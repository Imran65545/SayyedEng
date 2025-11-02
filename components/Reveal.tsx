"use client";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  // option to disable auto-unobserve if user wants re-animate on re-enter
  once?: boolean;
};

export default function Reveal({ children, className = "", once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Assign incremental --i values for staggering
    const revealNodes = Array.from(el.querySelectorAll<HTMLElement>(".reveal"));
    revealNodes.forEach((node, idx) => {
      try {
        node.style.setProperty("--i", String(idx));
      } catch (e) {
        // ignore styling errors
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            if (once) observer.unobserve(entry.target);
          } else {
            // if not once, remove class when it leaves
            if (!once) entry.target.classList.remove("reveal-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      }
    );

    revealNodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
