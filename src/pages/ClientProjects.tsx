import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ClientProject = ({ title, link, image, why, color }: any) => {
  return (
    <Link to={link} className="block relative w-full h-[60vh] md:h-[80vh] group overflow-hidden cursor-pointer bg-[#111]">
      {/* Static Image Preview */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] opacity-50 group-hover:opacity-90" />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700 pointer-events-none"></div>
      
      {/* Title always visible on bottom left */}
      <div className="absolute bottom-10 left-6 md:bottom-16 md:left-16 z-10 transition-transform duration-700 group-hover:translate-x-4">
        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">{title}</h3>
      </div>

      {/* Fade-in About Section on the right */}
      <div className={`absolute top-0 right-0 bottom-0 w-full md:w-1/3 lg:w-1/4 ${color} p-8 md:p-12 flex flex-col justify-center translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 shadow-2xl`}>
        <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">About the Project</h4>
        <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed">
          {why}
        </p>
        <div className="mt-12 flex items-center gap-2 text-white font-bold tracking-widest text-sm uppercase group/btn">
          View Case Study <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:scale-110" />
        </div>
      </div>
    </Link>
  );
};

const ClientProjects = () => {
  return (
    <main className="relative min-h-screen w-full bg-black text-white selection:bg-white selection:text-black flex flex-col">
      <div className="w-full flex justify-center py-12 md:py-16">
        <nav className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 shadow-sm flex justify-center gap-4 text-sm font-medium uppercase tracking-widest rounded-sm">
          <Link to="/" className="text-white/50 hover:text-white transition">Portfolio</Link>
          <span className="text-white/30">/</span>
          <span className="text-white">Client Projects</span>
        </nav>
      </div>
      
      <section className="w-full flex flex-col">
        <ClientProject
          title="AstroSeva"
          link="/astroseva-case-study"
          image="/images/astroseva-preview.png"
          color="bg-[#1e1b4b]/95 backdrop-blur-md border-l-[3px] border-[#6366f1]/50"
          why="Built for a 72-year-old astrologer who needed a streamlined platform for simple kundli generation and secure payment integration to monetize services he was previously offering for free."
        />
        <ClientProject
          title="Kasht Nivaran"
          link="/kasht-nivaran-case-study"
          image="/images/kasht-preview.png"
          color="bg-[#7c2d12]/95 backdrop-blur-md border-l-[3px] border-[#ea580c]/50"
          why="Small village temples lack a digital touchpoint for remote devotees to receive daily darshan. This is a clean, high-performance web app bringing daily darshan and Hanumanji's 12 names to worshippers globally, featuring a custom light/fast translation layer in Gujarati, Hindi, and English."
        />
      </section>
    </main>
  );
};

export default ClientProjects;
