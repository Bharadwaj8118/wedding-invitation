import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

export default function RsvpSection({ guestName, onNameSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { text } = useTypewriter(
    submitted ? `Dear ${guestName},\nYou are invited to celebrate the wedding of Naveen & Anjali.\nWe can't wait to celebrate with you!` : '',
    18
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onNameSubmit(inputValue.trim());
    setSubmitted(true);
  }

  return (
    <div className="rsvp-grid">
      <div className="section-head">
        <h2 className="section-title">Join the Celebration</h2>
        <p className="section-subtitle">Type your name to view your special invitation.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <form onSubmit={handleSubmit} className="rsvp-form">
          <label htmlFor="guestName" className="input-label">Enter Your Name</label>
          <input
            id="guestName"
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="e.g., Harsha"
            required
            className="mb-4"
          />
          <button type="submit" className="btn w-full">Show my welcome</button>
          <p className="rsvp-note mt-3">Tip: Try "Harsha" or "Harsha &amp; Family".</p>
        </form>

        <motion.div
          className="welcome-card"
          animate={submitted ? { y: [3, 0], opacity: [0.85, 1] } : {}}
          transition={{ duration: 0.52 }}
        >
          <div className="welcome-card__frame">
            <div className="welcome-message" role="status" aria-live="polite">
              {submitted
                ? text.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)
                : <span className="welcome-placeholder">Your personalized message will appear here.</span>
              }
            </div>
          </div>
          <div className="welcome-card__signature">
            <span className="signature-script">With love,</span>
            <span className="signature-names">Naveen &amp; Anjali</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
