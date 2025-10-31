import { NextResponse } from "next/server";

export async function POST(request) {
  const { message, content, path } = await request.json();

  const username = process.env.GITHUB_USERNAME;
  const repo = process.env.GITHUB_REPO;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json({ error: "GitHub token not found" }, { status: 500 });
  }

  const filePath = path || "test.txt";
  const commitMessage = message || "Автоматический коммит из Next.js";
  const newContent = Buffer.from(content || `Обновлено: ${new Date().toISOString()}`).toString("base64");

  const url = `https://api.github.com/repos/${username}/${repo}/contents/${filePath}`;

  try {
    const getRes = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    let sha = null;
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
      body: JSON.stringify({
        message: commitMessage,
        content: newContent,
        sha: sha || undefined,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    return NextResponse.json({ success: true, commit: data.commit });
  } catch (error) {
    console.error("Ошибка коммита:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
