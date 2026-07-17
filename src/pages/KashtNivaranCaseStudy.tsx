import { ArrowLeft, Heart, Languages, Layout, Sparkles, AlertCircle, Compass, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const KashtNivaranCaseStudy = () => {
  return (
    <div className="min-h-screen bg-[#F4ECD8] text-[#1C1612] selection:bg-[#C4541A]/20 selection:text-[#C4541A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F4ECD8]/95 backdrop-blur-sm border-b border-[#D4950A]/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-[#4A3F33] hover:text-[#C4541A] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
          <span className="text-sm font-semibold tracking-wider text-[#6E5F50]">CASE STUDY • DHRUV VARACHHIYA</span>
        </div>
      </nav>

      {/* Slides Container */}
      <div className="pt-20">
        
        {/* SLIDE 1 — TITLE SLIDE */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20 border-b border-[#D4950A]/20">
          <div className="max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C4541A]/10 rounded-2xl mb-8 border border-[#C4541A]/20">
              <Sparkles className="w-10 h-10 text-[#C4541A]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1C1612] mb-6 leading-tight tracking-wide">
              Kasht Nivaran
            </h1>
            <p className="text-xl md:text-2xl font-serif text-[#4A3F33] mb-8 max-w-2xl mx-auto italic">
              Reviving a Village Temple's Digital Presence
            </p>
            <p className="text-lg text-[#6E5F50] mb-10 max-w-2xl mx-auto leading-relaxed">
              A community initiative to design and build a serene, mobile-first web experience for Kasht Nivaran Hanumanji Mandir in Gola Gaam, Olpad, bringing daily darshan to devotees worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Giving Back", "Community Project", "Sacred Design System", "React + TS + Tailwind"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#EAE0CC] text-[#4A3F33] rounded-full text-sm font-semibold border border-[#D4950A]/20">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-[#6E5F50] font-medium tracking-widest">Case Study • Dhruv Varachhiya</p>
          </div>
        </section>

        {/* SLIDE 2 — THE WHY & BACKGROUND */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-[#D4950A]/20 bg-[#EAE0CC]/35">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#C4541A]/10 rounded-xl flex items-center justify-center border border-[#C4541A]/20">
                <Heart className="w-6 h-6 text-[#C4541A]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1612]">The Backstory & Vision</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  "Kasht Nivaran Hanumanji Mandir is a cherished spiritual hub in the small village of Gola Gaam (Olpad near Surat).",
                  "Devotees who migrated across India and globally had no direct way to receive daily visual updates (Nitya Darshan) from home.",
                  "Recognizing this gap, I took the initiative to build a dedicated digital gateway to bridge the distance.",
                  "The mission: design an interface that feels like a natural extension of the physical temple, loaded in a fraction of a second."
                ].map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#C4541A]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 border border-[#C4541A]/25">
                      <span className="text-[#C4541A] font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-[#4A3F33] text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#C4541A] text-white p-6 md:p-8 rounded-2xl w-full shadow-lg">
                  <h3 className="font-serif font-bold text-xl mb-4">Core Philosophy</h3>
                  <p className="text-white/90 text-lg leading-relaxed italic">
                    \"Technology serves best when it connects communities. By bringing the temple to the screens of remote devotees, we preserve cultural roots and offer a moment of peace in their busy daily lives.\"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 3 — SACRED DESIGN SYSTEM */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-[#D4950A]/20">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-[#D4950A]/10 rounded-xl flex items-center justify-center border border-[#D4950A]/20">
                <Compass className="w-6 h-6 text-[#D4950A]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1612]">Sacred Design System</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-[#1C1612] mb-6 flex items-center gap-2 font-serif">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C4541A]" />
                  Aesthetic Color Palette
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl border border-[#D4950A]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#C4541A]" />
                    <div>
                      <p className="font-bold text-sm text-[#1C1612]">Sindoor Red (#C4541A)</p>
                      <p className="text-xs text-[#6E5F50]">Extracted from the vermillion color of Hanumanji's deity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl border border-[#D4950A]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#D4950A]" />
                    <div>
                      <p className="font-bold text-sm text-[#1C1612]">Marigold Gold (#D4950A)</p>
                      <p className="text-xs text-[#6E5F50]">Inspired by fresh flower garlands and traditional temple borders</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl border border-[#D4950A]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#F4ECD8] border border-[#D4950A]/30" />
                    <div>
                      <p className="font-bold text-sm text-[#1C1612]">Temple Cream (#F4ECD8)</p>
                      <p className="text-xs text-[#6E5F50]">Warm and serene tone resembling aged sandstone walls</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#1C1612] mb-6 flex items-center gap-2 font-serif">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4950A]" />
                  Typography Architecture
                </h3>
                <ul className="space-y-4">
                  <li className="p-4 bg-white/40 rounded-xl border border-[#D4950A]/10">
                    <strong className="font-serif block text-lg mb-1">Tiro Devanagari</strong>
                    <span className="text-sm text-[#6E5F50]">Used for Sanskrit scripts, Gujarati, and Hindi titles to maintain scriptural authenticity.</span>
                  </li>
                  <li className="p-4 bg-white/40 rounded-xl border border-[#D4950A]/10">
                    <strong className="font-serif block text-lg mb-1">Cormorant Garamond</strong>
                    <span className="text-sm text-[#6E5F50]">An elegant serif typeface used for English headings to provide an editorial, premium texture.</span>
                  </li>
                  <li className="p-4 bg-white/40 rounded-xl border border-[#D4950A]/10">
                    <strong className="font-sans block text-sm font-semibold mb-1">DM Sans</strong>
                    <span className="text-sm text-[#6E5F50]">Clean, modern sans-serif utilized for primary reading content, guaranteeing high readability across viewports.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 4 — KEY DESIGN & TECH FEATURES */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-[#D4950A]/20 bg-[#EAE0CC]/35">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-[#C4541A]/10 rounded-xl flex items-center justify-center border border-[#C4541A]/20">
                <Layout className="w-6 h-6 text-[#C4541A]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1612]">Key Product & Tech Features</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#F4ECD8] p-6 rounded-2xl border border-[#D4950A]/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-[#C4541A]/15 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-[#C4541A]" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#1C1612] mb-3">Live Darshan Frame</h4>
                  <p className="text-sm text-[#4A3F33] leading-relaxed">
                    A beautiful, custom-bordered stone niche frame that hosts high-resolution live GIF/image updates of the deity, enhanced with a subtle vermillion gradient overlay.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#6E5F50] mt-6 tracking-wider">AESTHETIC FOCUS</span>
              </div>
              
              <div className="bg-[#F4ECD8] p-6 rounded-2xl border border-[#D4950A]/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-[#D4950A]/15 rounded-lg flex items-center justify-center mb-4">
                    <Languages className="w-5 h-5 text-[#D4950A]" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#1C1612] mb-3">Tri-Lingual Layer</h4>
                  <p className="text-sm text-[#4A3F33] leading-relaxed">
                    Instant, zero-latency toggle between Gujarati, English, and Hindi. Translates the full UI, including the holy 12 names of Lord Hanuman, for maximum accessibility.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#6E5F50] mt-6 tracking-wider">ACCESSIBILITY FOCUS</span>
              </div>
              
              <div className="bg-[#F4ECD8] p-6 rounded-2xl border border-[#D4950A]/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-[#C4541A]/15 rounded-lg flex items-center justify-center mb-4">
                    <Layout className="w-5 h-5 text-[#C4541A]" />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#1C1612] mb-3">Zero-Wrap Mobile Grid</h4>
                  <p className="text-sm text-[#4A3F33] leading-relaxed">
                    Custom CSS overrides created specifically to accommodate different phone sizes, guaranteeing the side-by-side columns stack perfectly on thin viewports without overlapping words.
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#6E5F50] mt-6 tracking-wider">PERFORMANCE FOCUS</span>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 5 — OUTCOME & VERIFICATION */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-[#D4950A]/20">
          <div className="max-w-5xl mx-auto w-full text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4950A]/10 rounded-full mb-6 border border-[#D4950A]/20">
              <Share2 className="w-8 h-8 text-[#D4950A]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1612] mb-6">Outcome & Verification</h2>
            
            <p className="text-lg md:text-xl text-[#4A3F33] max-w-3xl mx-auto leading-relaxed mb-12">
              The project was successfully reviewed and approved by the temple trustees. By utilizing lightweight HTML elements, custom inline styles, and minimal external scripts, the app maintains an incredibly low bundle size that loads instantly even on weak rural networks (3G/4G).
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <div className="p-5 bg-white/40 border border-[#D4950A]/10 rounded-xl text-center">
                <p className="text-3xl font-bold text-[#C4541A] mb-1">100%</p>
                <p className="text-xs text-[#6E5F50] uppercase font-bold tracking-widest">Mobile Responsive</p>
              </div>
              <div className="p-5 bg-white/40 border border-[#D4950A]/10 rounded-xl text-center">
                <p className="text-3xl font-bold text-[#C4541A] mb-1">&lt; 1s</p>
                <p className="text-xs text-[#6E5F50] uppercase font-bold tracking-widest">Loading Time</p>
              </div>
              <div className="p-5 bg-white/40 border border-[#D4950A]/10 rounded-xl text-center">
                <p className="text-3xl font-bold text-[#C4541A] mb-1">3</p>
                <p className="text-xs text-[#6E5F50] uppercase font-bold tracking-widest">Supported Languages</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-6 bg-[#1C1612] text-white text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Thank you for viewing this case study</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">Created with devotion, code, and care for the community of Gola Gaam.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-[#C4541A] hover:bg-[#C4541A]/90 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-md"
          >
            Return to Portfolio
          </Link>
        </section>
      </div>
    </div>
  );
};

export default KashtNivaranCaseStudy;
