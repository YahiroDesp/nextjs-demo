'use client';

import { useState } from 'react';
import Link from 'next/link';

type Skin = { name: string; image: string; };
type Weapon = { name: string; skins: Skin[]; };

export default function WeaponsPage() {
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);

  const weapons: Weapon[] = [
    { name: 'Vandal', skins: [
      { name: 'Forsaken', image: '/skins/vandal-forsaken.jpg' },
      { name: 'Prime', image: '/skins/vandal-prime.jpg' },
      { name: 'Reaver', image: '/skins/vandal-reaver.jpg' },
    ]},
    { name: 'Phantom', skins: [
      { name: 'Oni', image: '/skins/phantom-oni.jpg' },
      { name: 'Prime', image: '/skins/phantom-prime.jpg' },
      { name: 'Glitchpop', image: '/skins/phantom-glitchpop.jpg' },
    ]},
    { name: 'Operator', skins: [
      { name: 'Reaver', image: '/skins/operator-reaver.jpg' },
      { name: 'Sentinel', image: '/skins/operator-sentinel.jpg' },
    ]},
  ];

  return (
    <>
      <header>
        <h1>Оружие Valorant</h1>
        <nav>
          <Link href="/">Главная</Link>
          <Link href="/skins">Скины</Link>
          <Link href="/agents">Агенты</Link>
        </nav>
      </header>

      <div className="container">
        {!selectedWeapon && (
          <div className="weapons-cards">
            {weapons.map((weapon) => (
              <div
                key={weapon.name}
                className="weapon-card"
                onClick={() => setSelectedWeapon(weapon)}
              >
                <h3>{weapon.name}</h3>
                <p>Нажми, чтобы увидеть скины</p>
              </div>
            ))}
          </div>
        )}

        {selectedWeapon && (
          <div>
            <button className="back-button" onClick={() => setSelectedWeapon(null)}>
              Назад к оружию
            </button>

            <h2>{selectedWeapon.name} - Скины</h2>
            <div className="skins-container">
              {selectedWeapon.skins.map((skin) => (
                <div key={skin.name} className="skin-card">
                  <img src={skin.image} alt={skin.name} />
                  <p>{skin.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
