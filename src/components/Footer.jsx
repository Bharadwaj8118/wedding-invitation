export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="footer__brand">Naveen &amp; Anjali</div>
          <div className="footer__small">Made with love for your special day.</div>
        </div>
        <div className="footer__right">
          <a className="footer__link" href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Back to top ↑</a>
        </div>
      </div>

      <div className="footer__credits" style={{ marginTop: '40px', textAlign: 'center', width: '100%' }}>
        <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: 'italic', color: 'var(--gold-2)', fontSize: '18px', marginBottom: '6px' }}>
          Made by
        </div>
        <div style={{ fontFamily: '"Great Vibes", cursive', fontWeight: '400', color: '#b88a55', fontSize: '32px' }}>
          Munishekar Bhardwaj
        </div>
      </div>
    </footer>
  );
}
