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
      <nav className="px-6 md:px-12 border-b-[3px] border-black">
        <div className="mx-auto w-full max-w-4xl py-6 md:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 text-sm font-semibold tracking-tight">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12 w-full md:w-auto">
            <div className="flex justify-between items-center w-full md:w-auto">
              <Link to="/" className="hover:opacity-60 transition font-bold text-lg tracking-widest">Dhruv</Link>
              {/* CV link for mobile on top right */}
              <Link to="/cv" className="hover:opacity-60 transition md:hidden font-semibold">CV</Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm font-semibold text-black/60">
              <Link to="/case-studies" className="hover:opacity-60 hover:text-black transition">Case Studies</Link>
              <Link to="/product-teardowns" className="hover:opacity-60 hover:text-black transition">Product Teardowns</Link>
              <Link to="/learning" className="hover:opacity-60 hover:text-black transition">Learning</Link>
              <Link to="/photography" className="hover:opacity-60 hover:text-black transition">Photography</Link>
            </div>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 items-center font-semibold text-black/60">
            <Link to="/" className="hover:opacity-60 hover:text-black transition">Work</Link>
            <Link to="/cv" className="hover:opacity-60 hover:text-black transition">CV</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 md:px-12 pt-12 pb-8 min-h-[50vh] flex flex-col justify-center items-center">
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center text-xs md:text-sm font-medium mb-4 mix-blend-color-burn gap-2 tracking-wide text-black/60">
          <div className="flex gap-2">
            <span>Based in Surat, IN →</span>
            <span className="text-black font-semibold">{timeString}</span>
          </div>
          <div className="flex gap-2">
            <span>✦ Status →</span>
            <span className="text-black font-semibold">Open to work</span>
          </div>
        </div>

        <div className="w-full max-w-4xl border-t-[3px] border-black mb-8 mix-blend-color-burn"></div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-8 mix-blend-color-burn w-full max-w-4xl text-left">
          Hi, this is Dhruv.
        </h1>

        <div className="space-y-3 text-lg md:text-xl font-medium text-black/70 tracking-tight mix-blend-color-burn w-full max-w-4xl text-left">
          <p><span className="text-black/40 font-bold tracking-wider text-xs md:text-sm mr-3 uppercase">Currently →</span> Business Analyst @ SSMInfotech</p>
          <p><span className="text-black/40 font-bold tracking-wider text-xs md:text-sm mr-3 uppercase">Previously →</span> PalmInfotech → Yash Metals</p>
          <p><span className="text-black/40 font-bold tracking-wider text-xs md:text-sm mr-3 uppercase">Delivering →</span> Seamless Operations ☻</p>
        </div>
      </header>

      {/* Professional Experience Timeline */}
      <section className="px-6 md:px-12">
        <div className="py-8 md:py-12 w-full max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight">Experience</h2>
            <span className="text-xs font-semibold text-black/50 tracking-widest pb-1 md:pb-2">⧗ 1+ Years Experience</span>
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
                company: "SSMInfotech Solutions Pvt. Ltd.",
                desc: "Driving requirement analysis and process alignment for MES implementations. Leading documentation of API configuration workflows for SAP integration."
              }
            ].map((exp, idx, arr) => (
              <div key={idx} className="flex-1 relative pl-10 md:pl-0 md:pt-16 group">
                {/* Mobile vertical line for each item (except last) */}
                {idx !== arr.length - 1 && (
                  <div className="absolute left-[9px] top-2 bottom-[-3rem] w-[3px] bg-black/30 md:hidden z-0"></div>
                )}

                {/* Node */}
                <div className="absolute left-0 top-[2px] md:top-0 w-5 h-5 rounded-full bg-[#D1D1CB] border-[3px] border-black z-10 group-hover:scale-150 group-hover:bg-black transition-all duration-300 md:left-0"></div>

                <div className="mix-blend-color-burn pt-1 md:pt-0">
                  <p className="text-xs md:text-sm font-semibold tracking-widest mb-2 text-black/50">{exp.period}</p>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tighter mb-1 leading-tight whitespace-normal">{exp.role}</h3>
                  <h4 className="text-sm md:text-base font-semibold text-black/70 mb-3 whitespace-normal">{exp.company}</h4>
                  <p className="text-sm md:text-base font-normal text-black/60 leading-relaxed max-w-sm">{exp.desc}</p>
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight">Selected Projects</h2>
            <span className="text-xs font-semibold text-black/50 tracking-widest pb-1 md:pb-2">⧗ Impact & Design</span>
          </div>
        </div>

        <div className="border-t-[3px] border-black group/list flex flex-col items-center">
          <ProjectRow
            title="Creator Match"
            subtitle="Brand Collaboration Platform"
            link="https://creatormatch-wireframe.vercel.app/"
            why="Brands struggle to find authentic micro-influencers."
            what="A platform connecting creators with targeted brand deals."
            how="Data-driven matching and user-centric UI design."
          />
          <ProjectRow
            title="AquaSonic"
            subtitle="Sonic water experience"
            link="https://aquasonic-urascape-website.vercel.app/"
            why="Users lack engaging, multi-sensory experiences."
            what="An immersive web application exploring sound and water."
            how="UX research-driven design and interactive prototyping."
          />
          <ProjectRow
            title="Motofix DIY"
            subtitle="Bike maintenance, simplified"
            link="https://motofix-psi.vercel.app/"
            why="Bike maintenance is overly technical for beginners."
            what="A mobile layout simplifying DIY repairs step-by-step."
            how="System design thinking and clear user journeys."
          />
          <ProjectRow
            title="Sadhana Mandala"
            subtitle="Spiritual Journal & Vows Tracker"
            link="https://journal-w7zl.vercel.app/"
            why="Practitioners lack dedicated tools to track daily rituals and vow timelines."
            what="A minimalist editorial-style diary to track daily sadhana and resolve commitment vows."
            how="React, TypeScript, Tailwind CSS, and Firebase Auth + Firestore for cloud sync."
          />
          <ProjectRow
            title="Kasht Nivaran"
            subtitle="Reviving Temple's Digital Presence"
            link="https://kasht-nivaran.vercel.app/"
            why="Small village temples lack a digital touchpoint for remote devotees to receive daily darshan."
            what="A clean, high-performance web app bringing daily darshan and Hanumanji's 12 names to worshippers globally."
            how="React, TypeScript, and a custom light/fast translation layer in Gujarati, Hindi, and English."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 bg-black border-t-[3px] border-black">
        <div className="py-12 md:py-16 w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-4 text-[#D1D1CB] text-sm font-semibold tracking-widest">
          <div className="flex flex-col items-start gap-6 md:gap-8">
            <div className="text-xl font-bold tracking-tighter">Dhruv Varachhiya</div>
            <div className="flex flex-wrap justify-start items-center gap-8 text-[#D1D1CB]/70">
              <a href="https://www.linkedin.com/in/dhruv-varachhiya-a94a43297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">LinkedIn <ArrowUpRight className="w-4 h-4" /></a>
              <a href="https://github.com/dhruv-0108" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">GitHub <ArrowUpRight className="w-4 h-4" /></a>
              <a href="mailto:dhruv.varachhiya90@gmail.com" className="hover:text-white transition flex items-center gap-1">Email <ArrowUpRight className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="text-[#D1D1CB]/40 font-normal whitespace-nowrap">© 2026 All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
};


const ProjectRow = ({ title, subtitle, link, why, what, how }: any) => {
  const isExternal = link.startsWith("http");
  const Component = isExternal ? "a" : Link;
  const props = isExternal ? { href: link, target: "_blank", rel: "noopener noreferrer" } : { to: link };

  return (
    <Component {...props as any} className="block border-b-[3px] border-black w-full px-6 md:px-12 group/row hover:bg-black transition-all duration-500 relative overflow-hidden group-hover/list:opacity-30 hover:!opacity-100 flex flex-col items-center">
      <div className="py-8 md:py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 mix-blend-color-burn group-hover/row:mix-blend-normal transition-all duration-500 w-full max-w-4xl">

        {/* Title section */}
        <div className="flex-1 transition-transform duration-500 ease-out group-hover/row:translate-x-4">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-2 leading-tight text-black group-hover/row:text-[#D1D1CB] transition-colors duration-500">{title}</h3>
          <p className="text-lg md:text-xl font-bold text-black/70 group-hover/row:text-[#D1D1CB]/70 transition-colors duration-500">{subtitle}</p>
        </div>

        {/* Why, What, How Section */}
        <div className="flex-1 max-w-lg lg:ml-auto text-base md:text-lg font-medium space-y-4 text-black/80 group-hover/row:text-[#D1D1CB]/80 transition-colors duration-500">
          <p className="transition-transform duration-500 delay-[50ms] group-hover/row:translate-x-2"><strong className="font-black tracking-widest text-sm mr-3 text-black group-hover/row:text-[#D1D1CB] transition-colors duration-500">Why:</strong>{why}</p>
          <p className="transition-transform duration-500 delay-[100ms] group-hover/row:translate-x-2"><strong className="font-black tracking-widest text-sm mr-3 text-black group-hover/row:text-[#D1D1CB] transition-colors duration-500">What:</strong>{what}</p>
          <p className="transition-transform duration-500 delay-[150ms] group-hover/row:translate-x-2"><strong className="font-black tracking-widest text-sm mr-3 text-black group-hover/row:text-[#D1D1CB] transition-colors duration-500">How:</strong>{how}</p>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border-[3px] border-black group-hover/row:border-[#D1D1CB] group-hover/row:bg-[#D1D1CB] group-hover/row:text-black group-hover/row:scale-[1.15] group-hover/row:rotate-45 transition-all duration-500 ease-out">
          <ArrowUpRight className="w-8 h-8" />
        </div>
      </div>
    </Component>
  );
};

export default Index;
