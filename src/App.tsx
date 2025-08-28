import React from "react";
import FeatureShowcase from "./components/FeatureShowcase";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Intro section */}
      <header className="py-16 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
         

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            PrevaCare
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
            Your AI-powered companion for health & wellness. Scroll down to
            explore the features.
          </p>
        </div>
      </header>

      {/* Sticky Feature Showcase Section */}
      <FeatureShowcase />

      {/* Content After Showcase */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Thanks for reviewing!</h2>
          <p className="mt-2 text-gray-600">
            After the last feature, the page scrolls normally.
          </p>
        </div>
      </section>
    </div>
  );
}
