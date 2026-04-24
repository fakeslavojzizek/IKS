import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation<T extends Element>(
  options: UseScrollAnimationOptions = {},
): [RefObject<T | null>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -60px 0px",
    once = true,
  } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

export function useStaggeredAnimation(
  count: number,
  options: UseScrollAnimationOptions = {},
) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>(options);
  const delays = Array.from({ length: count }, (_, i) => i * 0.12);
  return { ref, isVisible, delays };
}
