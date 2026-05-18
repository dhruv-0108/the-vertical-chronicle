import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StorySectionProps {
  id: string;
  year?: string;
  title: string;
  description?: string;
  points?: string[];
  children?: React.ReactNode;
  accent?: "primary" | "secondary" | "accent";
  ambientText?: string;
}

const StorySection = ({
  id,
  year,
  title,
  description,
  points,
  children,
  accent = "primary",
  ambientText,
}: StorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const shape = shapeRef.current;

    if (section && content) {
      // Content slide-in animation - faster, more confident
      gsap.fromTo(
        content.children,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );

      // Shape parallax
      if (shape) {
        gsap.to(shape, {
          y: -100,
          rotation: 15,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }
  }, []);

  const accentColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  const shapeColors = {
    primary: "hsl(var(--primary) / 0.15)",
    secondary: "hsl(var(--secondary) / 0.08)",
    accent: "hsl(var(--accent) / 0.15)",
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="section-container"
    >
      {/* Abstract Shape */}
      <div
        ref={shapeRef}
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${shapeColors[accent]}, transparent 70%)`,
          filter: "blur(100px)",
          right: "-200px",
          top: "20%",
        }}
      />

      {/* Ambient Text */}
      {ambientText && (
        <span className="ambient-text left-[5%] top-[20%]">
          {ambientText}
        </span>
      )}

      {/* Connection to Timeline (visual only) */}
      <div 
        className="absolute left-[15%] top-1/2 -translate-y-1/2 w-px h-[200px] hidden xl:block"
        style={{
          background: "linear-gradient(180deg, transparent, hsl(var(--border) / 0.3), transparent)",
        }}
      />

      <div ref={contentRef} className="max-w-4xl mx-auto text-center xl:ml-[20%] xl:text-left">
        {year && (
          <span
            className={`inline-block font-space text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-6 ${accentColors[accent]}`}
          >
            {year}
          </span>
        )}

        <h2 className="font-space text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-8 tracking-tight">
          {title}
        </h2>

        {description && (
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed xl:ml-0 mx-auto">
            {description}
          </p>
        )}

        {points && points.length > 0 && (
          <ul className="mt-6 space-y-3 max-w-2xl xl:ml-0 mx-auto text-left">
            {points.map((point, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${accentColors[accent]}`} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
};

export default StorySection;