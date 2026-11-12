"use client";

import { useEffect, type PropsWithChildren } from "react";

export function ScrollRevealProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"),
    );

    if (
      elements.length === 0 ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.dataset.scrollVisible = "true";
          element.removeAttribute("data-scroll-pending");
          observer.unobserve(element);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const viewportHeight = window.innerHeight;
    const pendingElements = elements.filter((element) => {
      const { top, bottom } = element.getBoundingClientRect();
      const isInitiallyVisible = top < viewportHeight && bottom > 0;

      if (isInitiallyVisible) {
        element.dataset.scrollVisible = "true";
        return false;
      }

      element.dataset.scrollPending = "true";
      observer.observe(element);
      return true;
    });

    if (pendingElements.length > 0) {
      document.documentElement.dataset.scrollReady = "true";
    }

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.scrollReady;
      pendingElements.forEach((element) => {
        element.removeAttribute("data-scroll-pending");
      });
    };
  }, []);

  return children;
}
