import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterAnimationProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const CounterAnimation = ({ end, suffix = "", duration = 2 }: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (counterRef.current && !hasAnimated.current) {
      ScrollTrigger.create({
        trigger: counterRef.current,
        start: "top 80%",
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;

          const obj = { value: 0 };
          gsap.to(obj, {
            value: end,
            duration: duration,
            ease: "power2.out",
            onUpdate: () => {
              setCount(Math.floor(obj.value));
            },
          });
        },
      });
    }
  }, [end, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span ref={counterRef} className="tabular-nums">
      {formatNumber(count)}{suffix}
    </span>
  );
};

export default CounterAnimation;
