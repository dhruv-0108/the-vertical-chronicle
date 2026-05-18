import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Linkedin, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".contact-animate");

    if (elements) {
      gsap.fromTo(
        elements,
        { 
          opacity: 0, 
          y: 60,
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
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Shape parallax
    if (shapeRef.current) {
      gsap.to(shapeRef.current, {
        y: -80,
        scale: 1.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  const buttons = [
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Resume",
      href: "#",
      variant: "primary",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      variant: "outline",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:hello@example.com",
      variant: "outline",
    },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="section-container relative"
    >
      {/* Large Glow Shape */}
      <div
        ref={shapeRef}
        className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary) / 0.15), transparent 70%)",
        }}
      />

      {/* Ambient Text */}
      <span className="ambient-text right-[5%] bottom-[10%]">
        CONNECT
      </span>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="contact-animate font-space text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.05]">
          <span className="text-foreground">The journey isn't complete —</span>
          <br />
          <span className="text-gradient-primary">I'm just getting started.</span>
        </h2>

        <p className="contact-animate text-lg md:text-xl text-muted-foreground mb-14 max-w-xl mx-auto">
          Let's connect and create something meaningful together.
        </p>

        <div className="contact-animate flex flex-wrap justify-center gap-4">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`btn-premium inline-flex items-center gap-3 px-8 py-4 rounded-full font-space font-medium transition-all duration-300 ${
                button.variant === "primary"
                  ? "bg-primary text-primary-foreground hover:scale-105"
                  : "border border-border/50 bg-card/30 text-foreground hover:border-primary/50 hover:text-primary hover:scale-105"
              }`}
              style={{
                boxShadow: button.variant === "primary" 
                  ? "0 0 40px hsl(var(--primary) / 0.3)"
                  : "none",
              }}
            >
              {button.icon}
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;