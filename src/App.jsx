/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/work';
import Stripes from './components/Stripes';
import Produts from './components/Produts';
import Maruees from './components/Maruees';
import Cards from './components/cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import CanvasAnimation from './components/CanvasAnimation';

function App() {
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      autoResize: true,
      smoothScrolling: true,
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      duration: 4.5,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      normalizeWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
  });

  return (
    <div className="w-full bg-zinc-950 text-white relative">
      <CanvasAnimation />
      <Navbar />
      <Work />
      <Stripes />
      <Produts />
      <Maruees />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
