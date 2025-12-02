import React, { useEffect, useRef } from "react";

/**
 * Full-screen gradient background with a canvas overlay drawing slow rain.
 * - Scales by devicePixelRatio for crispness.
 * - Auto disables animation on small screens (<= 640px) or when:
 *   - animate={false}
 *   - documentElement dataset has data-rain-disabled="true"
 */
const RainBackground = ({ animate = true }) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let droplets = [];
    const DPR = window.devicePixelRatio || 1;

    const isSmallScreen = () => window.innerWidth <= 640;
    const isRainDisabled =
      document.documentElement.dataset.rainDisabled === "true";

    const shouldAnimate = () => animate && !isRainDisabled && !isSmallScreen();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      const count = Math.floor((width * height) / 12000);
      droplets = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        len: 10 + Math.random() * 18,
        speed: 40 + Math.random() * 40,
        opacity: 0.12 + Math.random() * 0.15
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    let lastTime = performance.now();

    const loop = (time) => {
      frameRef.current = requestAnimationFrame(loop);

      if (!shouldAnimate()) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
      ctx.lineWidth = 1;

      for (const drop of droplets) {
        ctx.globalAlpha = drop.opacity;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.len);
        ctx.stroke();

        drop.y += drop.speed * dt;
        if (drop.y > height + drop.len) {
          drop.y = -drop.len;
          drop.x = Math.random() * width;
        }
      }
      ctx.globalAlpha = 1;
    };

    frameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [animate]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/70 via-slate-950 to-slate-950" />
      <canvas
        ref={canvasRef}
        data-rain-canvas="true"
        className="absolute inset-0"
      />
    </div>
  );
};

export default RainBackground;



