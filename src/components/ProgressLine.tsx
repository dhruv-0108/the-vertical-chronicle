import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Milestone {
  id: string;
  sectionId: string;
  year: string;
  label: string;
}

const milestoneData: Milestone[] = [
  { id: "early-life", sectionId: "early-life", year: "2001-14", label: "Early Life" },
  { id: "growth", sectionId: "growth", year: "2014-16", label: "Growth" },
  { id: "bsc", sectionId: "bsc", year: "2020-23", label: "BSc IT" },
  { id: "msc", sectionId: "msc", year: "2023-25", label: "MSc IT" },
  { id: "industry", sectionId: "industry", year: "2025", label: "Business Analyst" },
  { id: "reinvention", sectionId: "reinvention", year: "Now", label: "Break + Reinvention" },
];

const ProgressLine = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [milestonePositions, setMilestonePositions] = useState<Record<string, number>>({});

  // Calculate actual section positions on the page
  const calculatePositions = useCallback(() => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const positions: Record<string, number> = {};

    milestoneData.forEach((milestone) => {
      const section = document.getElementById(milestone.sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionMiddle = sectionTop + section.offsetHeight / 3;
        const percentage = (sectionMiddle / docHeight) * 100;
        // Clamp between 5 and 95 for visual purposes
        positions[milestone.id] = Math.min(95, Math.max(5, percentage));
      }
    });

    setMilestonePositions(positions);
  }, []);

  useEffect(() => {
    // Calculate positions on mount and resize
    calculatePositions();
    
    const handleResize = () => {
      calculatePositions();
    };

    window.addEventListener("resize", handleResize);
    
    // Recalculate after a short delay to ensure DOM is ready
    const timeout = setTimeout(calculatePositions, 500);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [calculatePositions]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // Initial call
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    milestoneData.forEach((milestone, index) => {
      const element = document.querySelector(`[data-milestone="${milestone.id}"]`);
      if (element) {
        gsap.fromTo(
          element,
          { 
            opacity: 0, 
            x: -30,
            scale: 0.8 
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.4,
            delay: index * 0.02,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, [milestonePositions]);

  return (
    <div
      ref={lineRef}
      className="fixed left-[5%] top-1/2 -translate-y-1/2 h-[75vh] z-40 hidden xl:block"
    >
      {/* Background Track */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-border/20 rounded-full overflow-hidden">
        {/* Ambient glow effect */}
        <div 
          className="absolute inset-0 w-full opacity-30"
          style={{
            background: "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.3), transparent)",
          }}
        />
      </div>

      {/* Active Progress Line */}
      <div
        ref={progressRef}
        className="absolute left-1/2 -translate-x-1/2 w-[3px] rounded-full"
        style={{
          height: `${progress}%`,
          background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--accent)))",
          boxShadow: "0 0 20px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--primary) / 0.3)",
          transition: "height 0.05s linear",
        }}
      />

      {/* Progress Head Glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
        style={{
          top: `${progress}%`,
          transform: "translate(-50%, -50%)",
          background: "hsl(var(--primary))",
          boxShadow: "0 0 30px hsl(var(--primary)), 0 0 60px hsl(var(--primary) / 0.5)",
          opacity: progress > 2 ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Milestones */}
      {milestoneData.map((milestone) => {
        const position = milestonePositions[milestone.id] || 50;
        const isActive = progress >= position - 2;
        const isNear = Math.abs(progress - position) < 5;
        
        return (
          <div
            key={milestone.id}
            data-milestone={milestone.id}
            className="absolute left-1/2 flex items-center"
            style={{ 
              top: `${position}%`,
              transform: "translateX(-50%)",
            }}
          >
            {/* Connection Line to Content */}
            <div 
              className={`absolute h-[1px] transition-all duration-500 ${isActive ? "opacity-40" : "opacity-10"}`}
              style={{
                left: "10px",
                width: "60px",
                background: isActive 
                  ? "linear-gradient(90deg, hsl(var(--primary)), transparent)"
                  : "linear-gradient(90deg, hsl(var(--muted-foreground)), transparent)",
              }}
            />
            
            {/* Milestone Dot */}
            <div
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-primary scale-125"
                  : "bg-muted scale-100"
              }`}
              style={{
                boxShadow: isActive 
                  ? "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.4)"
                  : "none",
              }}
            >
              {/* Pulse ring for active */}
              {isActive && isNear && (
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
              )}
            </div>
            
            {/* Label */}
            <div
              className={`absolute left-[80px] whitespace-nowrap transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-30"
              }`}
            >
              <span className={`block text-xs font-space font-bold tracking-wide transition-colors duration-300 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}>
                {milestone.year}
              </span>
              <span className={`block text-[10px] transition-colors duration-300 ${
                isActive ? "text-foreground/70" : "text-muted-foreground/50"
              }`}>
                {milestone.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressLine;
