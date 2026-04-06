import { useState } from 'react';

export default function VenueSection() {
  const [copied, setCopied] = useState(false);
  const address = `SRI RANGANATHA SWAMY KALYANA MANDAPAM Function Hall\nNear Main Road\nJammalamadugu, Andra Pradesh\nIndia`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      alert('Copy failed — please copy the address manually.');
    }
  }

  return (
    <div className="venue-grid grid lg:grid-cols-2 gap-8 items-start">
      <div className="section-head lg:col-span-2">
        <h2 className="section-title">The Venue</h2>
      </div>
      <div className="venue-side">
        <h3 className="venue-side__title">SRI RANGANATHA SWAMY KALYANA MANDAPAM</h3>
        <p className="venue-side__address">
          Function Hall<br />
          Near Main Road<br />
          Jammalamadugu, Andhra Pradesh<br />
          India
        </p>
        <div className="venue-side__buttons">
          <a
            href="https://maps.app.goo.gl/L2GLQeiFYPw7YDsW7?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Get Directions
          </a>
          <button className="btn btn-ghost" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy Address'}
          </button>
        </div>
        <p className="venue-side__hint">Tap "Get Directions" to open in Google Maps.</p>
      </div>

      <div className="map-card">
        <div className="map">
          <div className="map__iframe-wrap">
            <iframe
              title="Wedding venue map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.7216963952924!2d78.387886!3d14.866285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4710bb04f860d%3A0x7b7e3c906981a070!2sSRI%20RANGANATHA%20SWAMY%20KALYANA%20MANDAPAM!5e1!3m2!1sen!2sin!4v1774966948775!5m2!1sen!2sin"
              height="380"
              style={{ width: '100%', border: 0, borderRadius: 14 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
