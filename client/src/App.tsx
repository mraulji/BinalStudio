import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/inter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";

// Import components
import NavBar from "./components/ui/NavBar";
import Photographer3DCarousel from "./components/ui/Photographer3DCarousel";
import Footer from "../src/components/ui/Footer";
import Hero from "./components/sections/Hero";
import Event3DSlider from "./components/sections/Event3DSlider";
import PhotographerInfo from "./components/sections/PhotographerInfo";
import Team from "./components/sections/Team";
import Portfolio from "./components/sections/Portfolio";
import Services from "./components/sections/Services";
import Achievements from "./components/sections/Achievements";
import YouTube from "./components/sections/YouTube";
import Contact from "./components/sections/Contact";
import Scene3D from "./components/3d/Scene3D";
import ServiceCarousel from "./components/ui/ServiceCarousel";
import PricingOffers from "./components/sections/PricingOffers";
import Admin from "./components/sections/Admin"; // Import your Admin page
import AdminLogin from "./components/sections/AdminLogin";

// Import stores
import { useAudio } from "./lib/stores/useAudio";

// Main UI as a separate component
function MainUI() {
  const { toggleMute } = useAudio();

  useEffect(() => {
    const handleUserInteraction = () => {
      toggleMute();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [toggleMute]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col">
      {/* Navigation */}
      <NavBar />
      {/* 3D Photographer Carousel Section */}
      <section id="home" className="relative min-h-screen h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl mx-auto z-10">
          <Photographer3DCarousel />
        </div>
        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{
              position: [0, 0, 8],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
            gl={{
              antialias: true,
              powerPreference: "high-performance"
            }}
          >
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
        <div className="relative z-10 mt-12">
          <Hero />
        </div>
        <div className="relative z-10 mt-12">
          <Event3DSlider />
        </div>
      </section>
      {/* Photographer Information Section */}
      <section id="photographer" className="py-12 sm:py-16 lg:py-20 bg-black/10">
        <PhotographerInfo />
      </section>
      {/* Team Section */}
      <section id="team" className="py-12 sm:py-16 lg:py-20">
        <Team />
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-black/20">
        <Portfolio />
      </section>
      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20">
        <ServiceCarousel />
      </section>
      {/* Pricing & Offers Section */}
      <section id="pricing-offers" className="py-12 sm:py-16 lg:py-20">
        <PricingOffers />
      </section>
      {/* Achievements Section */}
      <section id="achievements" className="py-12 sm:py-16 lg:py-20">
        <Achievements />
      </section>
      {/* YouTube Section */}
      <section id="videos" className="py-12 sm:py-16 lg:py-20 bg-black/20">
        <YouTube />
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20">
        <Contact />
      </section>
      {/* Background particles effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20" />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainUI />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
