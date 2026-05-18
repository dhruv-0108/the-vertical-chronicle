import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Presentation, Trophy, Mic } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Best NCC Cadet",
    description: "Junior Category, South-West Region",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "5 Gujarat NCC Battalion",
    description: "Active Member & Participant",
  },
  {
    icon: <Mic className="w-7 h-7" />,
    title: "Little Orators",
    description: "Participated in Public Speaking Competition",
  },
  {
    icon: <Presentation className="w-7 h-7" />,
    title: "National PPT Finalist",
    description: "PowerPoint Presentation Competition",
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    title: "State Athletics",
    description: "Competitor at State Level (10th Grade)",
  },
];

const AchievementCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".achievement-card");

    if (cards) {
      gsap.fromTo(
        cards,
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto xl:mx-0"
    >
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="achievement-card group relative overflow-hidden rounded-xl p-6 transition-all duration-300 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.4))",
            border: "1px solid hsl(var(--border) / 0.3)",
          }}
        >
          {/* Hover Glow */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
            }}
          />

          {/* Border Glow on Hover */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 0 1px hsl(var(--primary) / 0.3)",
            }}
          />

          <div className="relative z-10 flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
              {achievement.icon}
            </div>
            <div className="text-left">
              <h3 className="font-space font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementCards;