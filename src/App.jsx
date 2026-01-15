import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from "./components/Hero";
import ProblemAwareness from "./components/ProblemAwareness";
import Framework from "./components/Framework";
import Services from "./components/Services";
import Authority from "./components/Authority";
import Comparison from "./components/Comparison";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Helmet>
        <title>Groas Marketing - We Engineer Profitable Growth on Meta</title>
        <meta 
          name="description" 
          content="Meta Ads expertise, scaling systems, and ROAS focus for founders and D2C brands. Stop wasting ad spend and start scaling profitably with data-driven performance marketing." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Hero />
        <ProblemAwareness />
        <Framework />
        <Services />
        <Authority />
        <Comparison />
        <Portfolio />
        <FinalCTA />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;