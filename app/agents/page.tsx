import Link from 'next/link';

const agents = [
  { name: 'Jett', role: 'Duelist', abilities: ['Cloudburst', 'Updraft', 'Tailwind', 'Blade Storm'], image: '/agents/jett.jpg' },
  { name: 'Sage', role: 'Sentinel', abilities: ['Barrier Orb', 'Slow Orb', 'Healing Orb', 'Resurrection'], image: '/agents/sage.jpg' },
  { name: 'Phoenix', role: 'Duelist', abilities: ['Curveball', 'Hot Hands', 'Blaze', 'Run It Back'], image: '/agents/phoenix.jpg' },
  { name: 'Sova', role: 'Initiator', abilities: ['Shock Bolt', 'Recon Bolt', 'Owl Drone', 'Hunter\'s Fury'], image: '/agents/sova.jpg' },
  { name: 'Viper', role: 'Controller', abilities: ['Snake Bite', 'Poison Cloud', 'Toxic Screen', 'Viper\'s Pit'], image: '/agents/viper.jpg' },
  { name: 'Reyna', role: 'Duelist', abilities: ['Leer', 'Devour', 'Dismiss', 'Empress'], image: '/agents/reyna.jpg' },
];

export default function AgentsPage() {
  return (
    <>
      <header>
        <h1>Агенты Valorant</h1>    
        <nav>
          <Link href="/">ГлавнаяYA</Link>
          <Link href="/skins">Скины</Link>
          <Link href="/agents">Агенты</Link>
        </nav>
      </header>
      <div className="container">
        <div className="cards">
          {agents.map((agent) => (
            <div key={agent.name} className="card">
              <img src={agent.image} alt={agent.name} />
              <h3>{agent.name}</h3>
              <p>Роль: {agent.role}</p>
              <p>Способности:</p>
              <ul style={{ paddingLeft: '20px', textAlign: 'left', fontSize: '0.9rem' }}>
                {agent.abilities.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
