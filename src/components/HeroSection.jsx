import { motion } from 'framer-motion';
import InvitationBook from './InvitationBook';
import FloatLayer from './FloatLayer';
import ClosedFlowers from './ClosedFlowers';

export default function HeroSection({ bookOpen, onBookToggle }) {
  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        {/* Left: text copy — crossfades when book opens */}
        <div style={{ display: 'grid', gridTemplateAreas: '"stack"' }}>
          {/* Default Copy */}
          <motion.div
            className="hero__copy"
            style={{ gridArea: 'stack' }}
            animate={bookOpen
              ? { opacity: 0, y: -20, pointerEvents: 'none' }
              : { opacity: 1, y: 0,   pointerEvents: 'auto' }
            }
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="kicker">You are warmly invited</p>
            <h1 className="hero__title">
              <span className="hero__title-script">Naveen &amp; Anjali</span>
              <span className="hero__title-sub">Wedding Invitation</span>
            </h1>
            <p className="hero__lead">
              A day filled with love, laughter, and cherished moments.
              Tap on the invitation to see the magic
            </p>
            <div className="hero__cta">
              <a className="btn" href="#rsvp">Enter Your Name</a>
              <a className="btn btn-ghost" href="#venue">Find the Venue</a>
            </div>
          </motion.div>

          {/* New message shown when book opens */}
          <motion.div
            className="hero__copy"
            style={{ gridArea: 'stack', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            animate={bookOpen
              ? { opacity: 1, y: 0,   pointerEvents: 'auto' }
              : { opacity: 0, y: 20, pointerEvents: 'none' }
            }
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: bookOpen ? 0.3 : 0 }}
          >
            <h2 className="hero__title-script" style={{ fontSize: 'clamp(32px, 5.5vw, 48px)', marginBottom: '16px', lineHeight: 1.2 }}>
              Two hearts, one beautiful journey…
            </h2>
            <p className="hero__lead" style={{ marginTop: 0, maxWidth: '100%' }}>
              With love in our hearts and joy in our souls,<br />
              we invite you to celebrate a new beginning.
            </p>
          </motion.div>
        </div>

        {/* Right: the book fills the full column height */}
        <div className="hero__card">
          <InvitationBook open={bookOpen} onToggle={onBookToggle} />
          <ClosedFlowers open={bookOpen} />
          <FloatLayer open={bookOpen} />
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#rsvp" className="scroll-indicator__link" aria-label="Scroll to RSVP">
          <span>Scroll down</span>
        </a>
      </div>
    </section>
  );
}
