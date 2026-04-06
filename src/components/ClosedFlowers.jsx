import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating flower decoratives shown around the Ganesha cover when the book is CLOSED.
 * Uses the same orbital keyframe approach as FloatLayer but with floral elements.
 * Fades out (same animation reversal) when the book opens.
 */
export default function ClosedFlowers({ open }) {
  const flowers = [
    { emoji: '🌸', left: '-22px', top: '8%',  dx: '-28px', dy: '22px',  t: '6.8s', delay: '0s' },
    { emoji: '🌺', left: '110%',  top: '12%', dx: '24px',  dy: '18px',  t: '7.4s', delay: '0.4s' },
    { emoji: '🌼', left: '-18px', top: '42%', dx: '-22px', dy: '-20px', t: '8.2s', delay: '0.8s' },
    { emoji: '🪷', left: '110%',  top: '48%', dx: '26px',  dy: '-18px', t: '7.1s', delay: '0.2s' },
    { emoji: '🌸', left: '20%',   top: '-14px',dx: '18px', dy: '-24px', t: '9s',   delay: '0.6s' },
    { emoji: '🌺', left: '72%',   top: '-14px',dx: '-20px',dy: '-22px', t: '6.5s', delay: '1.0s' },
    { emoji: '🌼', left: '14%',   top: '108%', dx: '20px', dy: '24px',  t: '8.8s', delay: '0.3s' },
    { emoji: '🪷', left: '68%',   top: '108%', dx: '-18px',dy: '26px',  t: '7.6s', delay: '0.7s' },
    { emoji: '🌸', left: '-24px', top: '72%', dx: '-26px', dy: '20px',  t: '9.4s', delay: '0.1s' },
    { emoji: '🌺', left: '110%',  top: '78%', dx: '22px',  dy: '18px',  t: '7.9s', delay: '0.5s' },
  ];

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="closed-flowers"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
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
              }}
            >
              {f.emoji}
            </span>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
