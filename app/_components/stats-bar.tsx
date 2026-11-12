"use client"; // Mantenha esta linha se estiver usando Next.js App Router

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }, // Dispara quando 30% do elemento estiver visível
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Função de easing (easeOutExpo) para desacelerar suavemente no final
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(easeProgress * target);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, target, duration]);

  return (
    <h3
      ref={elementRef}
      className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight lg:leading-14 tracking-[-0.32px] mb-1 tabular-nums"
    >
      {count.toFixed(decimals)}
      {suffix}
    </h3>
  );
}

const STATS = [
  { target: 16, suffix: "y", decimals: 0, label: "Experience" },
  { target: 250, suffix: "+", decimals: 0, label: "Merchant Partner" },
  { target: 18, suffix: "+", decimals: 0, label: "Years Experience" },
  { target: 10.2, suffix: "k+", decimals: 1, label: "Worldwide Clients" },
];

export function StatsBar() {
  return (
    <section className="max-w-310 mx-auto w-full px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32">
      <div
        data-scroll-stagger
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6 px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16 bg-[#3D544D]/24 backdrop-blur-lg rounded-3xl lg:rounded-4xl w-full"
      >
        {STATS.map((stat, index) => (
          <div
            key={index}
            data-scroll-reveal="up"
            className="flex justify-center items-center flex-col text-center w-full lg:max-w-69.5 mx-auto"
          >
            <AnimatedCounter
              target={stat.target}
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
            <p className="text-sm sm:text-base text-[#2BB32A] font-medium leading-6">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
