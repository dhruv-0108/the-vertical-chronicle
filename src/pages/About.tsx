import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Heart, Download } from "lucide-react";

const images = [
  "/images/about/about-1.png",
  "/images/about/about-2.png",
  "/images/about/about-3.png"
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b-[3px] border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-4 md:py-6 flex justify-between items-center">
          <Link to="/" className="font-bold text-lg tracking-widest text-white hover:opacity-60 transition">
            Dhruv
          </Link>
          <div className="flex gap-6 items-center text-sm font-semibold text-white/60">
            <Link to="/" className="hover:text-white transition">Work</Link>
            <span className="text-white">About Me</span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Slider */}
      <header className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-start overflow-hidden pt-20">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`About Background ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6">
              I build bridges between <span className="text-white/50">business needs</span> and <span className="text-white/50">technical execution.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl">
              I'm an IT Business Analyst and Developer who thrives at the intersection of product strategy, user experience, and systems architecture.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col gap-16 md:gap-24">

        {/* Grid Layout for Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Professional Life */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-white/20 pb-4">
              <Briefcase className="w-6 h-6 text-white/70" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Professional Life</h2>
            </div>
            <div className="space-y-6 text-white/70 font-medium leading-relaxed text-lg">
              <p>
                Currently, I'm working as an <strong className="text-white">IT Business Analyst at Yash Metals</strong>, where I drive requirement analysis and process alignment for manufacturing execution systems (MES). 
              </p>
              <p>
                My background in Software Engineering gives me a unique advantage: I don't just gather requirements, I understand the technical constraints and possibilities. I specialize in standardizing workflows, API documentation, and using AI tools to accelerate operational delivery.
              </p>
              <p>
                Whether I'm mapping out BPMN process flows or building a real-time downtime dashboard, my goal is always to deliver scalable, efficient solutions that make business sense.
              </p>
              <a 
                href="/Dhruv_Varachhiya_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-white hover:text-white/70 transition font-bold tracking-wide border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black w-max"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </div>

          {/* Personal Life */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b-2 border-white/20 pb-4">
              <Heart className="w-6 h-6 text-white/70" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Life Outside Corporate</h2>
            </div>
            <div className="space-y-6 text-white/70 font-medium leading-relaxed text-lg">
              <p>
                When I'm not writing specs or coding, I'm deeply passionate about visual storytelling. 
              </p>
              <p>
                I have a dedicated photography practice where I focus on capturing candid moments, landscapes, and the subtle interplay of light and shadow. It helps me maintain a creative perspective that I bring back into my professional product design work.
              </p>
              <p>
                I also enjoy tinkering with new web technologies, exploring the latest AI advancements, and finding small ways to automate my daily routines. I believe that maintaining a curious, creative life outside of work is the secret to building better products during work hours.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-[3px] border-white/20 mt-auto py-8">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-white/40 text-sm font-semibold tracking-widest uppercase">
          <span>© 2026 Dhruv Varachhiya</span>
          <span>India</span>
        </div>
      </footer>
    </div>
  );
};

export default About;
