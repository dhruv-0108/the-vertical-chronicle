import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TagChipsProps {
  tags: string[];
}

const TagChips = ({ tags }: TagChipsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chips = containerRef.current?.querySelectorAll(".tag-chip");

    if (chips) {
      gsap.fromTo(
        chips,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center xl:justify-start gap-3">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="tag-chip px-5 py-2.5 rounded-full text-sm font-space font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-default"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagChips;