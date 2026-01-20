import { useRef, useEffect } from "react";

const InteractiveGlowBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // const BALL_COUNT = 120;
    const BALL_COUNT = 220;
    // const SPHERE_RADIUS = 100;
    const SPHERE_RADIUS = 150;
    // const INTERACTION_RADIUS = 160;
    const INTERACTION_RADIUS = 220;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const CENTER_X = canvas.width *  0.70;
    const CENTER_Y = canvas.height * 0.50;

    const balls = Array.from({ length: BALL_COUNT }).map(() => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      const z = Math.cos(phi);              // -1 → 1
      const depth = (z + 1) / 2;            // 0 → 1

      const radius = SPHERE_RADIUS * Math.sqrt(1 - z * z);

      const x = CENTER_X + Math.cos(theta) * radius;
      const y = CENTER_Y + Math.sin(theta) * radius;

      return {
        x,
        y,
        baseX: x,
        baseY: y,
        z,
        depth,
        vx: 0,
        vy: 0,
        // size: 2.5 + depth * 5.5,
        size: 3.2 + depth * 6.5,
        hue: 190 + depth * 80,
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      balls.sort((a, b) => a.z - b.z);

      balls.forEach((ball) => {
        const dx = mouse.current.x - ball.x;
        const dy = mouse.current.y - ball.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const influence = Math.max(0, 1 - dist / INTERACTION_RADIUS);

        if (influence > 0) {
          ball.vx -= (dx / dist) * influence * 0.25;
          ball.vy -= (dy / dist) * influence * 0.25;
        }

        ball.vx += (ball.baseX - ball.x) * 0.01;
        ball.vy += (ball.baseY - ball.y) * 0.01;

        ball.vx *= 0.9;
        ball.vy *= 0.9;

        ball.x += ball.vx;
        ball.y += ball.vy;

        const alpha = Math.min(
          1,
          0.35 + ball.depth * 0.4 + influence * 0.5
        );

        ctx.beginPath();
        ctx.arc(
          ball.x,
          ball.y,
          ball.size + influence * 2.5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          influence > 0
            ? `hsla(${ball.hue}, 90%, 60%, ${alpha})`
            : `rgba(60,60,60,${0.85 + ball.depth * 0.15})`;

        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] pointer-events-none"
    />
  );
};

export default InteractiveGlowBackground;