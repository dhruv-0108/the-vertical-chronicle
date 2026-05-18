import { useEffect, useRef } from 'react';

const InteractiveGradient = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      currentX += (targetX - currentX) * 0.02;
      currentY += (targetY - currentY) * 0.02;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#D1D1CB]">
      <div 
        ref={blobRef}
        className="absolute top-0 left-0 w-[80vw] h-[80vw] md:w-[800px] md:h-[800px] rounded-full blur-[80px] opacity-100 mix-blend-multiply"
        style={{
          background: "radial-gradient(circle at center, rgba(30, 64, 175, 0.8) 0%, rgba(96, 165, 250, 0.5) 40%, rgba(209, 209, 203, 0) 80%)",
          willChange: "transform"
        }}
      />
      {/* Heavy, dark grain */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
    </div>
  );
};

export default InteractiveGradient;
