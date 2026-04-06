import { useState, useEffect } from 'react';

export default function Topbar({ musicPlaying, onMusicToggle }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
      <div className="topbar__brand">
        <span className="topbar__brand-spark">✦</span> With Love
      </div>
      <div className="topbar__actions">
        <button
          className="icon-btn"
          onClick={onMusicToggle}
          aria-pressed={musicPlaying}
          aria-label={musicPlaying ? 'Pause background music' : 'Play background music'}
        >
          <span className={`icon-btn__icon vinyl-icon ${musicPlaying ? 'spinning' : ''}`}>⏺</span>
          <span className="icon-btn__label">{musicPlaying ? 'Pause music' : 'Play music'}</span>
        </button>
      </div>
    </header>
  );
}
