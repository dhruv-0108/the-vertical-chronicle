import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Fast, confident intro animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.2 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        ".scroll-indicator",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

    // Parallax shapes with different speeds
    gsap.to(shape1Ref.current, {
      y: 300,
      rotation: 45,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    gsap.to(shape2Ref.current, {
      y: 200,
      rotation: -30,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.8,
      },
    });

    gsap.to(shape3Ref.current, {
      y: 400,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.3,
      },
    });

    // Title and subtitle parallax on scroll - move together, don't fade
    gsap.to([titleRef.current, subtitleRef.current], {
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "center top",
        scrub: true,
      },
    });
  }, []);

  const handleScroll = () => {
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Abstract Shapes - Layered with Parallax */}
      <div
        ref={shape1Ref}
        className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        ref={shape2Ref}
        className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.5), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        ref={shape3Ref}
        className="absolute top-[30%] left-[50%] w-[300px] h-[300px] rotate-45 opacity-10"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent)",
          filter: "blur(40px)",
        }}
      />

      {/* Hero Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 100% 60% at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)",
        }}
      />

      {/* Grid Pattern - More Subtle */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient Text */}
      <span className="ambient-text top-[15%] right-[5%] opacity-[0.02]">
        JOURNEY
      </span>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          ref={titleRef}
          className="font-space text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-10 tracking-tight"
        >
          <span className="text-foreground">An amazing </span>
          <span className="text-gradient-primary">PM</span>
          <span className="text-foreground"> took birth in </span>
          <span className="text-gradient-primary">2001</span>
          <span className="text-foreground">.</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Not born extraordinary — shaped by{" "}
          <span className="text-foreground font-medium">moments</span>,{" "}
          <span className="text-foreground font-medium">discipline</span>,{" "}
          <span className="text-foreground font-medium">curiosity</span>, and{" "}
          <span className="text-foreground font-medium">determination</span>.
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScroll}
        className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group"
      >
        <span className="text-xs font-space uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all">
          Begin Journey
        </span>
        <div className="relative">
          <ChevronDown className="w-6 h-6 scroll-hint-arrow" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;