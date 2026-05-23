import React from 'react';
import Arrival from './components/narrative/Arrival';
import Atmosphere from './components/narrative/Atmosphere';
import CulinaryJourney from './components/narrative/CulinaryJourney';
import SocialProof from './components/narrative/SocialProof';
import BookingExperience from './components/narrative/BookingExperience';

function App() {
  return (
    <div className="bg-navy-950 text-pearl min-h-screen selection:bg-gold selection:text-navy-950">
      <main>
        <Arrival />
        <Atmosphere />
        <CulinaryJourney />
        <SocialProof />
        <BookingExperience />
      </main>
      
      <footer className="bg-navy-950 border-t border-navy-900 py-12 text-center">
        <p className="text-sand-500 font-sans text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} La Tavola Seaview. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
