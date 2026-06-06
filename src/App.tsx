/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import ContactFooter from "./components/ContactFooter";
import StarryBackground from "./components/StarryBackground";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll helper matching navigation elements
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-transparent text-text-primary min-h-screen relative overflow-x-hidden selection:bg-text-primary/20">
      
      {/* 1. Staged custom pre-loader overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Primary Page Body Layout hydration */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="relative bg-transparent min-h-screen flex flex-col"
        >
          {/* Fixed Dreamy Starry Background */}
          <StarryBackground />

          {/* Floated Navigation Header */}
          <Navbar onSayHiClick={() => scrollToId("contact")} />

          {/* Sequential landing layout */}
          <main className="flex-1 w-full flex flex-col bg-transparent">
            <Hero
              onSeeWorkClick={() => scrollToId("work")}
              onContactClick={() => scrollToId("contact")}
            />
            <SelectedWorks />
            <Journal />
            <Explorations />
            <Stats />
          </main>

          {/* Interactive footer details */}
          <ContactFooter onBackToTop={() => scrollToId("home")} />
        </motion.div>
      )}
    </div>
  );
}

