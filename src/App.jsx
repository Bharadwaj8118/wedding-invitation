import { useState, useRef, useEffect } from 'react';
import LoadingOverlay from './components/LoadingOverlay';
import Topbar from './components/Topbar';
import HeroSection from './components/HeroSection';
import RsvpSection from './components/RsvpSection';
import MessageSection from './components/MessageSection';
import VenueSection from './components/VenueSection';
import Footer from './components/Footer';

function App() {
  const [guestName, setGuestName] = useState('');
  const [bookOpen, setBookOpen]   = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleMusicToggle = (e) => {
    e?.preventDefault();
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setMusicPlaying(true);
      }).catch(err => {
        console.error("Music playback failed", err);
        setMusicPlaying(false);
      });
    }
  };
  // Automatically pause background music when the book opens, and resume when closed
  useEffect(() => {
    if (!audioRef.current) return;
    if (bookOpen) {
      audioRef.current.pause();
    } else if (musicPlaying) {
      audioRef.current.play().catch(err => console.error("Music resume failed", err));
    }
  }, [bookOpen, musicPlaying]);

  return (
    <>
      <LoadingOverlay />
      <Topbar musicPlaying={musicPlaying} onMusicToggle={handleMusicToggle} audioRef={audioRef} />
      <main>
        <HeroSection bookOpen={bookOpen} onBookToggle={setBookOpen} />
        <div id="rsvp" className="section container">
          <RsvpSection guestName={guestName} onNameSubmit={setGuestName} />
        </div>
        <div className="section container">
          <MessageSection guestName={guestName} />
        </div>
        <div id="venue" className="section container">
          <VenueSection />
        </div>
      </main>
      <Footer />
      <audio 
        ref={audioRef} 
        loop 
        preload="metadata"
        src="/audio.mp3" 
      />
    </>
  );
}

export default App;
