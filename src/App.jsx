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
  const userPausedRef = useRef(false);

  const handleMusicToggle = (e) => {
    e?.preventDefault();
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
      userPausedRef.current = true;
    } else {
      audioRef.current.play().then(() => {
        setMusicPlaying(true);
        userPausedRef.current = false;
      }).catch(err => {
        console.error("Music playback failed", err);
        setMusicPlaying(false);
      });
    }
  };
  // Attempt autoplay on mount or first interaction
  useEffect(() => {
    const tryPlayAudio = async () => {
      if (audioRef.current && audioRef.current.paused && !userPausedRef.current) {
        try {
          await audioRef.current.play();
          setMusicPlaying(true);
        } catch (err) {
          // Autoplay blocked by browser policy, silently catch
        }
      }
    };

    // Attempt immediately
    tryPlayAudio();

    // Fallback: play on first user interaction if blocked
    const onInteract = () => {
      tryPlayAudio();
      document.removeEventListener('click', onInteract);
      document.removeEventListener('touchstart', onInteract);
      document.removeEventListener('keydown', onInteract);
    };

    document.addEventListener('click', onInteract);
    document.addEventListener('touchstart', onInteract);
    document.addEventListener('keydown', onInteract);

    return () => {
      document.removeEventListener('click', onInteract);
      document.removeEventListener('touchstart', onInteract);
      document.removeEventListener('keydown', onInteract);
    };
  }, []);

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
        autoPlay
        preload="metadata"
        src="/audio.mp3" 
      />
    </>
  );
}

export default App;
