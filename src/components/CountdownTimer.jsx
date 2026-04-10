import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TimeUnit({ value, label }) {
  const formattedValue = String(value).padStart(2, '0');

  return (
    <div className="luxury-unit">
      <div className="luxury-unit__number-wrap">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="luxury-unit__number"
          >
            {formattedValue}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="luxury-unit__label">{label}</div>
    </div>
  );
}

export default function CountdownTimer() {
  const targetDate = new Date('2026-04-23T07:35:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-section">
      <div className="container">
        <div className="luxury-card">
          <div className="luxury-head">
            <h3 className="luxury-title">Counting down to the Big Day</h3>
            <p className="luxury-subtitle">April 23, 2026</p>
          </div>
          <div className="luxury-grid">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="luxury-divider" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="luxury-divider" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <div className="luxury-divider" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </div>
  );
}
