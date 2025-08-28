import React, { useEffect, useMemo, useRef, useState } from "react";
import { features } from "../data/features";

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

export default function FeatureShowcase() {
  const [active, setActive] = useState(0);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [stickyInView, setStickyInView] = useState(false);

  // Observe when sticky section enters/leaves viewport
  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStickyInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Map scroll progress to feature index while sticky
  useEffect(() => {
    const container = outerRef.current;
    if (!container) return;

    const onScroll = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const total = features.length;
      const viewportH = window.innerHeight;
      const start = rect.top * -1;
      const progress = clamp(start / (viewportH * total), 0, 1);
      const idx = Math.floor(progress * total);
      if (stickyInView && idx !== active) {
        setActive(clamp(idx, 0, total - 1));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [stickyInView, active]);

  const goLeft = () =>
    setActive((p) => (p - 1 + features.length) % features.length);
  const goRight = () => setActive((p) => (p + 1) % features.length);

  // Height trick: make container height = features * 100vh
  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      height: `${features.length * 100}vh`,
    }),
    []
  );

  return (
    <section aria-label="Feature Showcase" className="w-full bg-white">
      <div ref={outerRef} style={containerStyle}>
        <div ref={stickyRef} className="sticky top-0 h-screen">
          <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center h-full">
              {/* Left: Text content + arrows */}
              <div className="flex flex-col justify-center gap-6">
                <p className="text-sm font-medium text-brand-600">
                  Feature No.{active + 1} -
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {features[active].title}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
                  {features[active].points.map((pt: string, idx: number) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 mt-6">
                  <button
                    aria-label="Previous feature"
                    onClick={goLeft}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white shadow-md transition transform hover:scale-105"
                  >
                    ←
                  </button>
                  <button
                    aria-label="Next feature"
                    onClick={goRight}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white shadow-md transition transform hover:scale-105"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Center: iPhone mock */}
              <div className="flex justify-center">
                <div className="relative w-[260px] h-[520px] md:w-[300px] md:h-[600px] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-black">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                  <img
                    src={features[active].image}
                    alt={features[active].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right: clickable features */}
              <div className="flex justify-start lg:justify-end">
                <ol className="flex flex-col gap-4">
                  {features.map((f, i) => {
                    const isActive = i === active;
                    return (
                      <li key={f.id}>
                        <button
                          onClick={() => setActive(i)}
                          className={`relative pl-4 text-left transition ${
                            isActive
                              ? "font-semibold text-gray-900"
                              : "text-gray-500"
                          }`}
                          aria-current={isActive ? "step" : undefined}
                        >
                          {isActive && (
                            <span className="absolute left-0 top-1 h-5 w-1 bg-brand-600 rounded"></span>
                          )}
                          Feature {i + 1} : {f.title}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
