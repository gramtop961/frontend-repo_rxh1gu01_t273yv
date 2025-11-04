import React from 'react';
import Hero from './components/Hero';
import FeatureCinematics from './components/FeatureCinematics';
import AnalyticsShowcase from './components/AnalyticsShowcase';
import ShowreelStrip from './components/ShowreelStrip';
import Finale from './components/Finale';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <ShowreelStrip />
      <FeatureCinematics />
      <AnalyticsShowcase />
      <Finale />
    </div>
  );
}

export default App;
