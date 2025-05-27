import React from "react";
import { Hero } from "./components/Hero";
import { AboutProject } from "./components/AboutProject";
import { Ingredients } from "./components/Ingredients";
import { Preparation } from "./components/Preparation";
import { LeadForm } from "./components/LeadForm";
import { SocialLinks } from "./components/SocialLinks";
import { Navigation } from "./components/Navigation";
export function App() {
  return (
    <div className="font-sans bg-white">
      <main className="w-full pt-16">
        <Navigation />
        <Hero />
        <AboutProject />
        <Ingredients />
        <Preparation />
        <LeadForm />
        <SocialLinks />
      </main>
    </div>
  );
}
