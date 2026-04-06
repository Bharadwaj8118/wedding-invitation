import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating decoratives (hearts, birds, sparkles) shown around the book ONLY when it is OPEN.
 * Hidden while the Ganesha / closed state is active.
 */
export default function FloatLayer({ open }) {
  const floaties = [
    { emoji: '❤',  cls: 'heart',   left: '-18px', top: '18%', dx: '34px',  dy: '22px',  t: '7.5s',  delay: '0.2s' },
    { emoji: '✳',  cls: 'sparkle', left: '14px',  top: '10%', dx: '18px',  dy: '16px',  t: '6.2s',  delay: '0.6s' },
    { emoji: '🐦', cls: 'bird',    left: '108px', top: '22%', dx: '-22px', dy: '20px',  t: '8.4s',  delay: '0.1s' },
    { emoji: '✳',  cls: 'sparkle', left: '-8px',  top: '52%', dx: '26px',  dy: '-20px', t: '9s',    delay: '0.3s' },
    { emoji: '❤',  cls: 'heart',   left: '132px', top: '62%', dx: '-28px', dy: '24px',  t: '7.9s',  delay: '0.9s' },
    { emoji: '🐦', cls: 'bird',    left: '54px',  top: '-6%', dx: '20px',  dy: '28px',  t: '10.1s', delay: '0.4s' },
    { emoji: '✳',  cls: 'sparkle', left: '128px', top: '-2%', dx: '-26px', dy: '30px',  t: '6.8s',  delay: '0.2s' },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="float-layer"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {floaties.map((f, i) => (
            <span
              key={i}
              className={`floaty floaty--${f.cls}`}
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
