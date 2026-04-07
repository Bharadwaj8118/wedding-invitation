import { useEffect, useRef } from 'react';
import PetalShower from './PetalShower';
import { buildCovers } from '../utils/buildCovers';

export default function InvitationBook({ open, onToggle }) {
  const bookRef = useRef(null);
  const videoRef = useRef(null);
  const { left, right } = buildCovers();
  const lastTapRef = useRef(0);  // tracks last tap time for double-tap detection

  // Single click on the cover area → toggle open/close
  function handleClick(e) {
    // Clicks inside the pages area pass through (so video controls work)
    if (e.target.closest?.('.pages')) return;
    onToggle(!open);
  }

  // Double-tap / double-click on the pages area → close the book
  function handlePagesDoubleClick(e) {
    e.stopPropagation();   // prevent outer handleClick from firing
    onToggle(false);        // close
  }

  // Touch: detect double-tap (two taps within 300ms) on the pages area
  function handlePagesTouchEnd(e) {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      e.preventDefault();
      onToggle(false);  // double-tap → close
    }
    lastTapRef.current = now;
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(!open);
    }
    // Escape key while open → close
    if (e.key === 'Escape' && open) {
      onToggle(false);
    }
  }

  // Auto-play when open, pause when closed
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (open) {
      // Wait for the book-open animation (900ms) before playing
      const timer = setTimeout(() => {
        video.play().catch(() => {
          // Auto-play may be blocked by browser policy — silently ignore
        });
      }, 950);
      return () => clearTimeout(timer);
    } else {
      // Book closed → pause & reset to start
      if (!video.paused) {
        video.pause();
      }
    }
  }, [open]);

  return (
    <div
      ref={bookRef}
      className={`invitation-book ${open ? 'is-open' : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={open ? 'Wedding invitation is open. Tap to close.' : 'Open the wedding invitation'}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="book-glow" />
      <PetalShower active={open} />

      <div className="book">
        <div className="cover cover--left cover--ganesha">
          <div className="cover__inner">
            <img src="/ganesha.png" alt="Lord Ganesha — Wedding Blessings" className="cover__ganesha-img" />
          </div>
        </div>

        <div className="cover cover--right">
          <div className="cover__inner" style={{ height: '100%', display: 'block' }}>
            <img src={right} alt="Sanskrit marriage mantras" className="cover__image" style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
          </div>
        </div>

        {/* Pages: double-click / double-tap here to close */}
        <div
          className="pages"
          aria-hidden={!open}
          onDoubleClick={handlePagesDoubleClick}
          onTouchEnd={handlePagesTouchEnd}
        >
          <div className="pages__inner">
            <div className="pages__header">
              <div className="pages__title">Naveen &amp; Anjali</div>
              <div className="pages__subtitle">
                Wedding Invitation &nbsp;·&nbsp; <span className="pages__close-hint">Tap to close</span>
              </div>
            </div>
            <div className="video-wrap">
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                aria-label="Wedding invitation video"
                id="invitationVideo"
              >
                <source src="/Video Project 1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="invitation-book__hint" aria-hidden={false}>{open ? 'Tap to close' : 'Tap to open'}</div>
    </div>
  );
}
