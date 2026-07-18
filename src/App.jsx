import { useState } from 'react';
import ProfileCard from './ProfileCard';

const people = [
  {
    id: 1,
    name: 'ROHI',
    role: 'Frontend Developer',
    photoUrl: 'https://i.pravatar.cc/150?img=47',
    bio: 'Builds polished interfaces and loves motion design.',
    github: 'https://github.com/ava'
  },
  {
    id: 2,
    name: 'DERRICK TAMATEY',
    role: 'UI Engineer',
    photoUrl: 'https://i.pravatar.cc/150?img=12',
    bio: 'Turns complex ideas into simple, elegant user experiences.',
    github: 'https://github.com/noah'
  },
  {
    id: 3,
    name: ' ARMAH',
    role: 'Product Designer',
    photoUrl: 'https://i.pravatar.cc/150?img=32',
    bio: 'Combines strategy and storytelling to shape digital products.',
    github: 'https://github.com/mia'
  },
  {
    id: 4,
    name: 'FASAL ADAMU',
    role: 'React Specialist',
    photoUrl: 'https://i.pravatar.cc/150?img=15',
    bio: 'Enjoys building scalable components and clean state logic.',
    github: 'https://github.com/liam'
  },
  {
    id: 5,
    name: ' ASIEDU',
    role: 'Full Stack Developer',
    photoUrl: 'https://i.pravatar.cc/150?img=20',
    bio: 'Loves bridging design and backend systems in one workflow.',
    github: 'https://github.com/sophia'
  },
  {
    id: 6,
    name: 'GOLO',
    role: 'Accessibility Advocate',
    photoUrl: 'https://i.pravatar.cc/150?img=18',
    bio: 'Focuses on inclusive experiences and thoughtful interaction patterns.',
    github: 'https://github.com/ethan'
  }
];

function App() {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleCard = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">React Gallery</p>
          <h1>Meet the team</h1>
        </div>
        <div className="counter">Expanded: {expandedIds.length}</div>
      </header>

      <main className="card-grid">
        {people.map((person) => (
          <ProfileCard
            key={person.id}
            name={person.name}
            role={person.role}
            photoUrl={person.photoUrl}
            bio={person.bio}
            github={person.github}
            expanded={expandedIds.includes(person.id)}
            onToggle={() => toggleCard(person.id)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
