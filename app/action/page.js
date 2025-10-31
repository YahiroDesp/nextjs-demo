"use client";
import { useState } from "react";
import "./action.css"; 

export default function ActionPage() {
  const [status, setStatus] = useState("Нажми кнопку, чтобы создать commit");

  const handleClick = async () => {
    setStatus("Создаём commit...");

    try {
      const res = await fetch("/api/commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "Коммит с фронтенда Next.js",
          content: "Это коммит, созданный из браузера",
          path: "frontend-commit1.txt",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Коммит успешно создан!");
      } else {
        setStatus("Ошибка: " + data.error);
      }
    } catch (err) {
      setStatus("Ошибка сети: " + err.message);
    }
  };

  return (
    <div className="action-container">
      <h1>Создание коммита в GitHub</h1>
      <button onClick={handleClick} className="commit-button">
        Сделать commit
      </button>
      <p className="status-text">{status}</p>
    </div>
  );
}
