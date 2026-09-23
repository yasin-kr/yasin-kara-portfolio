import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const ramp = (value: number, start: number, end: number) => {
  const t = clamp((value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

// A starting motion envelope; tune the reading interval with the approved artwork.
export function useSceneProgress(enabled: boolean) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;
    const path = element.querySelector<SVGPathElement>("[data-story-path]");
    const marker = element.querySelector<SVGGElement>("[data-story-marker]");
    const pathLength = path?.getTotalLength() ?? 0;
    let frame = 0;
    let visible = false;
    const update = () => {
      frame = 0;
      const bounds = element.getBoundingClientRect();
      const header =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 0;
      const viewport = document.documentElement.clientHeight - header;
      const progress = clamp(
        (header - bounds.top) / Math.max(1, bounds.height - viewport),
      );
      if (path && marker) {
        // Finish the journey while the image is still fully visible.
        const point = path.getPointAtLength(
          clamp((progress - 0.04) / 0.56) * pathLength,
        );
        marker.setAttribute("transform", `translate(${point.x} ${point.y})`);
        marker.setAttribute("visibility", "visible");
      }
      const retreat = ramp(progress, 0.3, 0.88);
      const text = ramp(progress, 0.18, 0.35) * (1 - ramp(progress, 0.88, 1));
      element.style.setProperty("--image-scale", String(1 - retreat * 0.45));
      element.style.setProperty("--image-y", `${-retreat * 12}vh`);
      element.style.setProperty(
        "--image-opacity",
        String(1 - ramp(progress, 0.6, 0.95)),
      );
      element.style.setProperty("--text-opacity", String(text));
      element.style.setProperty(
        "--text-y",
        `${(1 - ramp(progress, 0.18, 0.35)) * 16}px`,
      );
    };
    const queue = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        queue();
      },
      { rootMargin: "100px" },
    );
    const resize = new ResizeObserver(queue);
    observer.observe(element);
    resize.observe(element);
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
    };
  }, [enabled]);
  return ref;
}
