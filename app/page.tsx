'use client';

import Link from 'next/link';
import './globals.css'; // стили из globals.css

export default function HomePage() {
  return (
    <div className="home-container">
      <header>
        <h1>Добро пожаловать в мир Valorant!</h1>
        <p>Изучай оружие, скины и агентов прямо здесь.</p>
      </header>

      <div className="home-buttons">
        <Link href="/weapons" className="home-btn">Оружие</Link>
        <Link href="/skins" className="home-btn">Скины</Link>
        <Link href="/agents" className="home-btn">Агенты</Link>
      </div>

      <div className="home-banner">
        <img src="\banner.jpg" alt="Valorant Banner" />
      </div>
    </div>
  );
}
