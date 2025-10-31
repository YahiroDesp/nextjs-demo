export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Главная страница (пустая)</h1>
      <p>Это стартовая страница Next.js</p>
      <a
        href="/action"
        style={{
          display: "inline-block",
          marginTop: "20px",
          color: "white",
          background: "#0070f3",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Перейти на страницу действий
      </a>
    </div>
  );
}
