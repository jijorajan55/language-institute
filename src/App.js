import React from 'react';
import './App.css'; 
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyDoctorGerman from './components/WhyDoctorGerman';
import WhatsAppSection from './components/WhatsAppSection';
import VictoryMatters from './components/VictoryMatters';
import PlacementSupport from './components/PlacementSupport';
import PlacementSuccess from './components/PlacementSuccess';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WhyDoctorGerman />
      <WhatsAppSection />
      <VictoryMatters />
      <PlacementSupport />
      <PlacementSuccess />
      <ContactForm />
      <Footer /> 
    </div>
  );
}

export default App;