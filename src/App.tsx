import { useState } from 'react';

const LECCIONES = [
  { id: 1, titulo: 'Lección 1: Introducción', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  { id: 2, titulo: 'Lección 2: Conceptos Básicos', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
];

export default function App() {
  const [leccionActual, setLeccionActual] = useState(LECCIONES[0]);

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#121212', color: 'white', fontFamily: 'sans-serif', margin: 0 }}>
      
      {/* Barra Lateral */}
      <aside style={{ width: '300px', backgroundColor: '#1e1e1e', padding: '20px', borderRight: '1px solid #333' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Temario</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {LECCIONES.map((lec) => (
            <li key={lec.id} style={{ marginBottom: '10px' }}>
              <button 
                onClick={() => setLeccionActual(lec)}
                style={{ 
                  width: '100%', padding: '12px', textAlign: 'left', 
                  backgroundColor: leccionActual.id === lec.id ? '#3b82f6' : 'transparent',
                  color: 'white', border: '1px solid #333', borderRadius: '8px', cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {lec.titulo}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Área del Reproductor */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          <h1 style={{ marginBottom: '20px', fontSize: '2rem' }}>{leccionActual.titulo}</h1>
          
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', backgroundColor: 'black' }}>
            <video 
              key={leccionActual.id}
              controls
              autoPlay
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              <source src={leccionActual.url} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
          
        </div>
      </main>
      
    </div>
  );
}
