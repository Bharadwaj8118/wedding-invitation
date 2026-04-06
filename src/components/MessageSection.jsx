import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function MessageSection({ guestName }) {
  const { ref, inView } = useScrollReveal(0.12);

  const events = [
    { label: 'Haldi',     date: '22-04-2026', time: '8:00 AM' },
    { label: 'Reception', date: '22-04-2026', time: '7:30 PM' },
    { label: 'Muhurtham', date: '23-04-2026', time: '7:35 AM – 8:35 AM' },
  ];

  const flowers = [
    { emoji: '🌸', left: '0%',   top: '5%',   dx: '-20px', dy: '20px',  t: '7s',   delay: '0s' },
    { emoji: '🌺', left: '95%',  top: '15%',  dx: '20px',  dy: '15px',  t: '8s',   delay: '0.5s' },
    { emoji: '🪷', left: '-2%',  top: '45%',  dx: '-15px', dy: '-20px', t: '6.5s', delay: '1s' },
    { emoji: '🌼', left: '98%',  top: '55%',  dx: '25px',  dy: '-15px', t: '9s',   delay: '0.2s' },
    { emoji: '🌸', left: '2%',   top: '85%',  dx: '15px',  dy: '-25px', t: '7.5s', delay: '0.7s' },
    { emoji: '🌺', left: '95%',  top: '90%',  dx: '-20px', dy: '-20px', t: '6.8s', delay: '0.3s' },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="message-wrap relative"
      style={{ position: 'relative' }}
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0 }}>
        {flowers.map((f, i) => (
          <span
            key={i}
            className="cf-floaty"
            style={{
              '--left':  f.left,
              '--top':   f.top,
              '--dx':    f.dx,
              '--dy':    f.dy,
              '--t':     f.t,
              '--delay': f.delay,
              zIndex: 0
            }}
          >
            {f.emoji}
          </span>
        ))}
      </div>

      <div className="section-head relative z-10">
        <h2 className="section-title">The Events</h2>
      </div>
      <div className="message-card relative z-10">
        <p className="message-text">
          {guestName ? `Dear ${guestName},` : 'Dear Guest,'}<br /><br />
          It is with tremendous joy that we invite you to join us as we embark on this beautiful new chapter of our lives. 
          Your presence will make our celebration truly complete.
        </p>
        
        <div className="message-meta">
          {events.map(ev => (
            <div key={ev.label} className="meta-pill">
              <span className="meta-pill__label">{ev.label}</span>
              <span className="meta-pill__value">{ev.date}</span>
              <span className="meta-pill__value">{ev.time}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
