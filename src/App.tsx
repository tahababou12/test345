import React, { useEffect, useRef, useState } from 'react';
import Reveal from 'reveal.js';
import { Menu, X, ChevronLeft, ChevronRight, Home, Menu as MenuIcon } from 'lucide-react';
import { 
  TimelineSection,
  AbstractSection,
  FidelitySection,
  BirefringenceSection,
  GhanaSection,
  MentalHealthSection,
  OkinawaSection,
  WomenInDataScienceSection,
  MasanaoSection,
  WebScraperSection
} from './components/Sections';
// 
const App: React.FC = () => {
  const revealRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [revealInstance, setRevealInstance] = useState<Reveal.Api | null>(null);

  useEffect(() => {
    let deck: Reveal.Api | null = null;
    
    if (revealRef.current) {
      // Initialize Reveal.js
      deck = new Reveal(revealRef.current, {
        hash: true,
        history: true,
        controls: false,
        progress: true,
        center: false,
        transition: 'slide',
        backgroundTransition: 'fade',
        touch: true,
        hideInactiveCursor: true,
        hideCursorTime: 3000,
        margin: 0,
        width: '100%',
        height: '100%',
      });

      deck.initialize().then(() => {
        setRevealInstance(deck);
        if (deck) {
          setTotalSlides(deck.getTotalSlides());
          
          deck.on('slidechanged', () => {
            if (deck) {
              setCurrentSlide(deck.getIndices().h);
            }
          });
        }
      });
    }

    // Cleanup function
    return () => {
      // Only attempt to destroy if deck was successfully initialized
      if (deck && typeof deck.destroy === 'function') {
        try {
          // Safely destroy the Reveal instance
          deck.destroy();
        } catch (error) {
          console.warn('Error during Reveal.js cleanup:', error);
        }
      }
    };
  }, []);

  const navigateTo = (slideIndex: number) => {
    if (revealInstance) {
      revealInstance.slide(slideIndex);
      setMenuOpen(false);
    }
  };

  const navigateNext = () => {
    if (revealInstance) {
      revealInstance.next();
    }
  };

  const navigatePrev = () => {
    if (revealInstance) {
      revealInstance.prev();
    }
  };

  const navigateHome = () => {
    if (revealInstance) {
      revealInstance.slide(0);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { title: 'Home', index: 0 },
    { title: 'Timeline', index: 1 },
    { title: 'Abstract', index: 2 },
    { title: 'Fidelity', index: 3 },
    { title: 'Birefringence', index: 4 },
    { title: 'Ghana', index: 5 },
    { title: 'Mental Health', index: 6 },
    { title: 'Okinawa', index: 7 },
    { title: 'Women in Data Science', index: 8 },
    { title: 'Masanao 679', index: 9 },
    { title: 'Web Scraper', index: 10 },
  ];

  return (
    <div className="relative">
      <button 
        className="nav-menu-button" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      <div className={`nav-menu ${menuOpen ? '' : 'closed'}`}>
        <h2 className="text-xl font-bold mb-6 text-blue-400">Portfolio Sections</h2>
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`w-full text-left py-2 px-4 rounded transition-colors ${
                  currentSlide === item.index 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-slate-700'
                }`}
                onClick={() => navigateTo(item.index)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {currentSlide > 0 && (
        <button 
          className="nav-button prev" 
          onClick={navigatePrev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {currentSlide < totalSlides - 1 && (
        <button 
          className="nav-button next" 
          onClick={navigateNext}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {currentSlide > 0 && (
        <button 
          className="nav-button home" 
          onClick={navigateHome}
          aria-label="Go to home"
        >
          <Home size={24} />
        </button>
      )}

      <div className="reveal" ref={revealRef}>
        <div className="slides">
          {/* Title Slide */}
          <section className="bg-gradient-to-br from-slate-900 to-blue-900">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Portfolio</h1>
              <div className="w-32 h-1 bg-blue-400 mb-8"></div>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-blue-200">Vajinder Kaur</h2>
              <p className="text-xl text-blue-100">MS Statistical Practice, Boston University</p>
            </div>
          </section>

          {/* Timeline Section */}
          <TimelineSection />

          {/* Abstract Section */}
          <AbstractSection />

          {/* Project Sections */}
          <FidelitySection />
          <BirefringenceSection />
          <GhanaSection />
          <MentalHealthSection />
          <OkinawaSection />
          <WomenInDataScienceSection />
          <MasanaoSection />
          <WebScraperSection />
        </div>
      </div>
    </div>
  );
};

export default App;
