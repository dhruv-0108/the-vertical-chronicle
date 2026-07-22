import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Bike, Sparkles, Compass } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  status: "coming-soon" | "in-progress" | "completed";
  caseStudyLink?: string;
  landingPageLink?: string;
}

const projects: Project[] = [
  {
    id: "astro-engine",
    title: "Astro-Engine",
    subtitle: "Vedic Intelligence & Relocation Atlas",
    icon: <Compass className="w-10 h-10" />,
    status: "completed",
    landingPageLink: "https://github.com/dhruv-0108/Astro-Engine",
  },
  {
    id: "motofix",
    title: "Motofix DIY",
    subtitle: "Bike Maintenance Made Simple",
    icon: <Bike className="w-10 h-10" />,
    status: "completed",
    caseStudyLink: "/motofix-case-study",
    landingPageLink: "https://motofix-psi.vercel.app/",
  },
  {
    id: "future",
    title: "Future Project",
    subtitle: "Something Exciting",
    icon: <Sparkles className="w-10 h-10" />,
    status: "coming-soon",
  },
];

const ProjectCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".project-card");

    if (cards) {
      gsap.fromTo(
        cards,
        { 
          opacity: 0, 
          y: 80, 
          rotateY: -5,
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.5,
          stagger: 0.1,
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

  const getStatusBadge = (project: Project) => {
    const styles = {
      "coming-soon": "bg-muted/50 text-muted-foreground border-border/50",
      "in-progress": "bg-accent/10 text-accent border-accent/30",
      completed: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
    };

    const labels = {
      "coming-soon": "Case Study Coming Soon",
      "in-progress": "In Progress",
      completed: "View Case Study",
    };

    const badgeContent = (
      <span className={`text-[10px] font-space uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors duration-200 ${styles[project.status]}`}>
        {labels[project.status]}
      </span>
    );

    // If completed and has case study link, make it clickable
    if (project.status === "completed" && project.caseStudyLink) {
      const isExternal = project.caseStudyLink.startsWith("http");
      
      if (isExternal) {
        return (
          <a
            href={project.caseStudyLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-block"
          >
            {badgeContent}
          </a>
        );
      }
      
      return (
        <Link
          to={project.caseStudyLink}
          onClick={(e) => e.stopPropagation()}
          className="inline-block"
        >
          {badgeContent}
        </Link>
      );
    }

    return badgeContent;
  };

  const getArrowButton = (project: Project) => {
    const buttonClasses = "w-10 h-10 rounded-full flex items-center justify-center bg-muted/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300";
    
    // Has landing page - make it a link
    if (project.landingPageLink) {
      return (
        <a
          href={project.landingPageLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={buttonClasses}
        >
          <ArrowUpRight className="w-5 h-5 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      );
    }
    
    // No landing page - show tooltip
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={(e) => e.stopPropagation()}
              className={`${buttonClasses} cursor-default`}
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Landing page coming soon</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
    >
      {projects.map((project) => {
        const cardClassName = "project-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 block";
        const cardStyle = {
          background: "linear-gradient(180deg, hsl(var(--card) / 0.6), hsl(var(--card) / 0.3))",
          border: "1px solid hsl(var(--border) / 0.2)",
        };
        
        const cardContent = (
          <>
            {/* Animated Border */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.2), transparent, hsl(var(--accent) / 0.2))",
              }}
            />
          
            {/* Inner Card */}
            <div 
              className="absolute inset-[1px] rounded-2xl pointer-events-none"
              style={{
                background: "linear-gradient(180deg, hsl(var(--card)), hsl(var(--background)))",
              }}
            />

            {/* Top Highlight */}
            <div 
              className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
              }}
            />

            <div className="relative z-10">
              <div className="mb-8 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform-gpu origin-left">
                {project.icon}
              </div>

              <h3 className="font-space text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-8">{project.subtitle}</p>

              <div className="flex items-center justify-between">
                {getStatusBadge(project)}
                {getArrowButton(project)}
              </div>
            </div>
          </>
        );

        return (
          <div
            key={project.id}
            className={cardClassName}
            style={cardStyle}
          >
            {cardContent}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
