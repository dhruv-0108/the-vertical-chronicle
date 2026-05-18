import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import InteractiveGradient from "../components/InteractiveGradient";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true });

  return (
    <div className="relative min-h-screen bg-transparent text-black font-sans selection:bg-black selection:text-white">
      <InteractiveGradient />

      {/* Navbar */}
      <nav className="p-6 md:px-12 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 text-sm font-bold tracking-tight border-b-[3px] border-black">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12 w-full md:w-auto">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link to="/" className="hover:opacity-60 transition font-black text-lg tracking-widest">Dhruv</Link>
            {/* CV link for mobile on top right */}
            <Link to="/cv" className="hover:opacity-60 transition md:hidden font-bold">CV</Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm font-bold">
            <Link to="/case-studies" className="hover:opacity-60 transition">Case Studies</Link>
            <Link to="/product-teardowns" className="hover:opacity-60 transition">Product Teardowns</Link>
            <Link to="/learning" className="hover:opacity-60 transition">Learning</Link>
            <Link to="/photography" className="hover:opacity-60 transition">Photography</Link>
          </div>
        </div>
        <div className="hidden md:flex gap-6 lg:gap-8 items-center font-bold">
          <Link to="/" className="hover:opacity-60 transition">Work</Link>
          <Link to="/cv" className="hover:opacity-60 transition">CV</Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 md:px-12 pt-12 pb-8 min-h-[50vh] flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center text-xs md:text-sm font-bold mb-4 mix-blend-color-burn gap-2 tracking-wide">
          <div className="flex gap-2">
            <span className="text-black/70">Based in Surat, IN →</span>
            <span className="text-black">{timeString}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-black/70">✦ Status →</span>
            <span className="text-black">Open to work</span>
          </div>
        </div>
        
        <div className="w-full max-w-4xl border-t-[3px] border-black mb-8 mix-blend-color-burn"></div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-8 mix-blend-color-burn w-full max-w-4xl text-left">
          Hi, this is Dhruv.
        </h1>

        <div className="space-y-3 text-lg md:text-xl font-bold text-black/80 tracking-tight mix-blend-color-burn w-full max-w-4xl text-left">
          <p><strong className="text-black font-black tracking-wider text-xs md:text-sm mr-3">Currently →</strong> Business Analyst @ SSSM InfoTech</p>
          <p><strong className="text-black font-black tracking-wider text-xs md:text-sm mr-3">Previously →</strong> PalmInfotech • Yash Metals</p>
          <p><strong className="text-black font-black tracking-wider text-xs md:text-sm mr-3">Delivering →</strong> Seamless Operations ☻</p>
        </div>
      </header>

      {/* Professional Experience Timeline */}
      <section className="px-6 md:px-12">
        <div className="py-8 md:py-12 w-full max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight">Experience</h2>
            <span className="text-xs font-bold text-black/70 tracking-widest pb-1 md:pb-2">⧗ 1+ Years Experience</span>
          </div>

          <div className="relative flex flex-col md:flex-row gap-12 md:gap-8 mt-8">
            {/* Desktop continuous horizontal line */}
            <div className="absolute left-0 right-0 top-[9px] h-[3px] bg-black/30 hidden md:block z-0"></div>

            {[
              {
                period: "Jan 2025 - Apr 2025",
                role: "Software Engineer Intern",
                company: "Yash Metals",
                desc: "Built a real-time equipment downtime monitoring dashboard and implemented SQL-backed workflows to evaluate efficiency."
              },
              {
                period: "May 2025 - Sep 2025",
                role: "Business Analyst",
                company: "PalmInfotech",
                desc: "Drafted 50+ user stories, use cases, and test cases. Managed a 5-member cross-functional team and applied AI to standardize flowchart documentation."
              },
              {
                period: "Jan 2026 - Present",
                role: "Business Analyst",
                company: "SSSM InfoTech Solutions Pvt. Ltd.",
                desc: "Driving requirement analysis and process alignment for MES implementations. Leading documentation of API configuration workflows for SAP integration."
              }
            ].map((exp, idx, arr) => (
              <div key={idx} className="flex-1 relative pl-10 md:pl-0 md:pt-16 group">
                {/* Mobile vertical line for each item (except last) */}
                {idx !== arr.length - 1 && (
                  <div className="absolute left-[9px] top-2 bottom-[-4rem] w-[3px] bg-black/30 md:hidden z-0"></div>
                )}

                {/* Node */}
                <div className="absolute left-0 top-[2px] md:top-0 w-5 h-5 rounded-full bg-[#D1D1CB] border-[3px] border-black z-10 group-hover:scale-150 group-hover:bg-black transition-all duration-300 md:left-0"></div>
                
                <div className="mix-blend-color-burn pt-1 md:pt-0">
                  <p className="text-xs md:text-sm font-bold tracking-widest mb-2 text-black/60">{exp.period}</p>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-black tracking-tighter mb-1 leading-tight whitespace-nowrap">{exp.role}</h3>
                  <h4 className="text-sm md:text-base font-bold text-black/80 mb-3 whitespace-nowrap truncate">{exp.company}</h4>
                  <p className="text-sm md:text-base font-medium text-black/70 leading-relaxed max-w-sm">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="px-6 md:px-12">
        <div className="py-8 md:py-12 w-full max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-tight">Selected Projects</h2>
            <span className="text-xs font-bold text-black/70 tracking-widest pb-1 md:pb-2">⧗ Impact & Design</span>
          </div>
        </div>

        <div className="border-t-[3px] border-black group/list flex flex-col items-center">
          <ProjectRow
            title="Creator Match"
            subtitle="Brand Collaboration Platform"
            link="/creatormatch-case-study"
            prototypeLink="https://creatormatch-wireframe.vercel.app/"
            why="Brands struggle to find authentic micro-influencers."
            what="A platform connecting creators with targeted brand deals."
            how="Data-driven matching and user-centric UI design."
          />
          <ProjectRow
            title="AquaSonic"
            subtitle="Sonic water experience"
            link="/aquasonic-case-study"
            prototypeLink="https://aquasonic-urascape-website.vercel.app/"
            why="Users lack engaging, multi-sensory experiences."
            what="An immersive web application exploring sound and water."
            how="UX research-driven design and interactive prototyping."
          />
          <ProjectRow
            title="Motofix DIY"
            subtitle="Bike maintenance, simplified"
            link="/motofix-case-study"
            prototypeLink="https://motofix-psi.vercel.app/"
            why="Bike maintenance is overly technical for beginners."
            what="A mobile layout simplifying DIY repairs step-by-step."
            how="System design thinking and clear user journeys."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 bg-black border-t-[3px] border-black">
        <div className="py-12 md:py-16 w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-4 text-[#D1D1CB] text-sm font-bold tracking-widest">
          <div className="flex flex-col items-start gap-6 md:gap-8">
            <div className="text-xl font-black tracking-tighter">Dhruv Varachhiya</div>
            <div className="flex flex-wrap justify-start items-center gap-8">
            <a href="https://www.linkedin.com/in/dhruv-varachhiya-a94a43297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">LinkedIn <ArrowUpRight className="w-4 h-4" /></a>
            <a href="https://github.com/dhruv-0108" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">GitHub <ArrowUpRight className="w-4 h-4" /></a>
            <a href="mailto:dhruv.varachhiya90@gmail.com" className="hover:text-white transition flex items-center gap-1">Email <ArrowUpRight className="w-4 h-4" /></a>
          </div>
        </div>
          <div className="text-[#D1D1CB]/50 font-medium whitespace-nowrap">© 2026 All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
};

const ProjectRow = ({ title, subtitle, link, prototypeLink, why, what, how }: any) => (
  <div className="block border-b-[3px] border-black w-full px-6 md:px-12 group/row hover:bg-black transition-all duration-500 relative overflow-hidden group-hover/list:opacity-30 hover:!opacity-100 flex flex-col items-center">
    <div className="py-12 md:py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mix-blend-color-burn group-hover/row:mix-blend-normal transition-all duration-500 w-full max-w-4xl">

      {/* Title section */}
      <div className="flex-1 transition-transform duration-500 ease-out group-hover/row:translate-x-4">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-2 leading-tight text-black group-hover/row:text-[#D1D1CB] transition-colors duration-500">{title}</h3>
        <p className="text-lg md:text-xl font-bold text-black/70 group-hover/row:text-[#D1D1CB]/70 transition-colors duration-500 mb-6">{subtitle}</p>
        
        {/* Action Links */}
        <div className="flex flex-wrap gap-4 mt-8 transition-transform duration-500 delay-[50ms] group-hover/row:translate-x-2">
          <Link to={link} onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-[3px] border-black text-black text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white group-hover/row:border-[#D1D1CB] group-hover/row:text-[#D1D1CB] group-hover/row:hover:bg-[#D1D1CB] group-hover/row:hover:text-black transition-all duration-300">
            Case Study <ArrowUpRight className="w-4 h-4" />
          </Link>
          {prototypeLink && (
            prototypeLink.startsWith('http') ? (
              <a href={prototypeLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white border-[3px] border-black text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-transparent hover:text-black group-hover/row:bg-[#D1D1CB] group-hover/row:text-black group-hover/row:border-[#D1D1CB] group-hover/row:hover:bg-transparent group-hover/row:hover:text-[#D1D1CB] transition-all duration-300">
                Prototype <ArrowUpRight className="w-4 h-4" />
              </a>
            ) : (
              <Link to={prototypeLink} onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white border-[3px] border-black text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-transparent hover:text-black group-hover/row:bg-[#D1D1CB] group-hover/row:text-black group-hover/row:border-[#D1D1CB] group-hover/row:hover:bg-transparent group-hover/row:hover:text-[#D1D1CB] transition-all duration-300">
                Prototype <ArrowUpRight className="w-4 h-4" />
              </Link>
            )
          )}
        </div>
      </div>

      {/* Why, What, How Section */}
      <div className="flex-1 max-w-lg lg:ml-auto text-base md:text-lg font-medium space-y-4 text-black/80 group-hover/row:text-[#D1D1CB]/80 transition-colors duration-500">
        <p className="transition-transform duration-500 delay-[100ms] group-hover/row:translate-x-2"><strong className="font-black tracking-widest text-sm mr-3 text-black group-hover/row:text-[#D1D1CB] transition-colors duration-500">Why:</strong>{why}</p>
        <p className="transition-transform duration-500 delay-[150ms] group-hover/row:translate-x-2"><strong className="font-black tracking-widest text-sm mr-3 text-black group-hover/row:text-[#D1D1CB] transition-colors duration-500">What:</strong>{what}</p>
        <p className="transition-transform duration-500 delay-[200ms] group-hover/row:translate-x-2"><strong className="font-black tracking-widest text-sm mr-3 text-black group-hover/row:text-[#D1D1CB] transition-colors duration-500">How:</strong>{how}</p>
      </div>
    </div>
  </div>
);

export default Index;
