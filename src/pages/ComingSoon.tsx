import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import InteractiveGradient from "../components/InteractiveGradient";

const ComingSoon = () => {
  const location = useLocation();
  const path = location.pathname;

  // Format pathname to display name (e.g., "/case-studies" -> "Case Studies")
  const getPageName = (pathStr: string) => {
    const segments = pathStr.split("/").filter(Boolean);
    if (segments.length === 0) return "Page";
    return segments[0]
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageName = getPageName(path);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 selection:bg-black selection:text-white overflow-hidden">
      {/* Background */}
      <InteractiveGradient />

      {/* Main Container */}
      <div className="w-full max-w-lg p-6 md:p-12 border-[3px] border-black bg-[#D1D1CB]/40 backdrop-blur-md text-left mix-blend-color-burn z-10">
        <span className="text-black/40 font-bold text-xs uppercase tracking-widest mb-4 block">
          ✦ Section Under Construction
        </span>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight text-black mb-4">
          {pageName}
        </h1>
        <p className="text-base md:text-lg font-normal text-black/70 mb-8 leading-relaxed">
          I am currently working on documenting these workflows and showcasing this content. This section will be live soon.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-[3px] border-black text-black text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 bg-transparent"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
