import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), reducedMotion ? 0 : 500);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loading"
          className="loading-overlay"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true" 
          role="status" 
          aria-live="polite"
        >
          <div className="loader-card">
            <div className="loader-spinner" />
            <p className="loader-text">Preparing your invitation...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
