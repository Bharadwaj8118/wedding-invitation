import { useState, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function PetalShower({ active }) {
  const [petals, setPetals] = useState([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!active || prefersReducedMotion) { setPetals([]); return; }

    const spawned = Array.from({ length: 26 }, (_, i) => ({
      id: i,
      size:   10 + Math.random() * 18,
      startX: (Math.random() - 0.5) * 260,
      drift:  (Math.random() - 0.5) * 160,
      rot:    (Math.random() * 220 - 110).toFixed(1),
      dur:    (1.1 + Math.random() * 1.2).toFixed(2),
      delay:  (Math.random() * 0.4).toFixed(2),
    }));
    setPetals(spawned);

    const timer = setTimeout(() => setPetals([]), 3400);
    return () => clearTimeout(timer);
  }, [active, prefersReducedMotion]);

  return (
    <div className="petals" aria-hidden="true">
      {petals.map(p => (
        <div
          key={p.id}
          className="petal"
          style={{
            '--size':    `${p.size}px`,
            '--start-x': `${p.startX}px`,
            '--drift':   `${p.drift}px`,
            '--rot':     `${p.rot}deg`,
            '--dur':     `${p.dur}s`,
            '--delay':   `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
