import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <main>
        <Projects />
        <Skills />  
        {/* Other sections will go here */}
      </main>
    </div>
  );
}

export default App;