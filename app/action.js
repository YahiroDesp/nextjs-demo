"use client";
import { useState } from "react";

export default function ActionPage() {
  const [status, setStatus] = useState("Нажми кнопку, чтобы выполнить действие");

  const handleClick = () => {
    setStatus("Создаём commit...");
    setTimeout(() => {
      setStatus("✅ Коммит выполнен (симуляция)");
    }, 1000);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Страница действий</h1>
      <p>{status}</p>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Сделать commit
      </button>

      <div style={{ marginTop: "30px" }}>
        <a
          href="/"
          style={{
            color: "#0070f3",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Назад на главную
        </a>
      </div>
    </div>
  );
}
