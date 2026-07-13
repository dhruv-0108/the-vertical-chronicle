import { ArrowLeft, Users, Lightbulb, Target, Layout, TrendingUp, ClipboardList, BarChart3, Compass, Rocket, AlertTriangle, CheckCircle2, Shield, Zap, DollarSign, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Title",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">CreatorMatch</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">AI-Powered Brand Collaborations for Everyday Social Media Creators</p>
        <p className="text-gray-500 max-w-xl mb-12 mx-auto">
          Pain Points → Personas → Product Concept → Features → Value Proposition → Go-To-Market
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["Creator Economy", "Brand Collabs", "AI Tools", "Marketplace"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href="https://drive.google.com/file/d/1QqWQG03hMSml8CYF1FtdAbNYWSiZL8Gh/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors mb-12 text-sm font-medium shadow-sm"
        >
          View Original Pitch Deck <ArrowUpRight className="w-4 h-4" />
        </a>
        <p className="text-sm text-gray-400">Case Study • Dhruv Varachhiya</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Identified Pain Points",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900">Identified Pain Points — What Keeps Creators Up at Night</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center flex flex-col justify-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">40</p>
            <p className="text-gray-700 font-medium">Creators Surveyed</p>
            <p className="text-xs text-gray-500 mt-1">Reddit & Discord</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center flex flex-col justify-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">1K-80K</p>
            <p className="text-gray-700 font-medium">Follower Range</p>
          </div>
          <div className="p-6 bg-red-50 rounded-xl border border-red-100 text-center flex flex-col justify-center">
            <p className="text-4xl font-bold text-red-600 mb-2">80%</p>
            <p className="text-gray-700 font-medium text-sm">Say lack of monetization kills motivation</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Top Validated Pain Points</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-gray-900">1. Rejection Fear</p>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-bold">31/40</span>
              </div>
              <p className="text-sm text-gray-600">Creators hesitate to pitch brands fearing silence or cringe perception. "Why would a brand work with me?"</p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-gray-900">2. Income Instability</p>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold">29/40</span>
              </div>
              <p className="text-sm text-gray-600">Unpredictable earnings — ₹8K one month, ₹800 the next — preventing full-time commitment. Payments delayed 60-90 days.</p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <p className="font-bold text-gray-900">3. Editing Burnout</p>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold">26/40</span>
              </div>
              <p className="text-sm text-gray-600">Spending 3-4 hours editing a single Reel, losing weekends and momentum.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "User Personas",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900">User Personas — Who We're Building For</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl p-5 border-2 border-purple-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-1">Starter Micro-Influencer</h3>
            <p className="text-sm text-purple-600 mb-4 font-semibold">1K–10K Followers</p>
            <p className="text-sm font-medium text-gray-800 mb-2">Riya Sharma, 22 — Budget Fashion</p>
            <p className="text-xs text-gray-500 italic mb-4">"Brand mujhse collab kyun karega?"</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>Goal:</strong> Get her first paid brand collaboration</li>
              <li><strong>Frustration:</strong> Reels take an entire day to create</li>
              <li><strong>Need:</strong> Easy discovery + faster creation</li>
              <li><strong>Success:</strong> First paid gig in 30 days</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-5 border-2 border-blue-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-1">Growing Micro-Influencer</h3>
            <p className="text-sm text-blue-600 mb-4 font-semibold">10K–40K Followers</p>
            <p className="text-sm font-medium text-gray-800 mb-2">Karan Mehta, 27 — Personal Finance</p>
            <p className="text-xs text-gray-500 italic mb-4">"Kal reach boom, aaj zero — koi logic nahi."</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>Goal:</strong> Stable monthly income & insights</li>
              <li><strong>Frustration:</strong> Income swings wildly</li>
              <li><strong>Need:</strong> Niche-aligned brands + pricing guidance</li>
              <li><strong>Success:</strong> Consistent income within ±20%</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-5 border-2 border-green-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-1">Established Influencer</h3>
            <p className="text-sm text-green-600 mb-4 font-semibold">40K–80K Followers</p>
            <p className="text-sm font-medium text-gray-800 mb-2">Dr. Sneha Nair, 31 — Skincare</p>
            <p className="text-xs text-gray-500 italic mb-4">"Contract mein lifetime exclusivity tha... samajh nahi payi."</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>Goal:</strong> Work with reliable, high-quality brands</li>
              <li><strong>Frustration:</strong> Delayed payments + heavy revisions</li>
              <li><strong>Need:</strong> Safe contracts, fast payouts, AI tools</li>
              <li><strong>Success:</strong> Predictable revenue & turnaround</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Product Concept",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900">Product Concept</h2>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl p-6 mb-8 shadow-lg">
          <p className="text-lg font-medium leading-relaxed">CreatorMatch connects micro-influencers with brand campaigns that fit their niche — while giving them tools to create faster, pitch safely, and earn reliably.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-gray-900 text-lg">Smart Match Feed + Brand Profiles</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Personalised gig recommendations and clear brand profiles with apply buttons, removing the need for cold DMs.</p>
            <p className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded inline-block font-medium">Solves: No replies, low confidence</p>
          </div>
          <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900 text-lg">AI Content Studio</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Prompt-based creation for scripts, hooks, and captions. Refine it with your own voice to reduce editing time.</p>
            <p className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded inline-block font-medium">Solves: Slow editing, creative burnout</p>
          </div>
          <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-gray-900 text-lg">Pricing Insights & Safe Agreements</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">See average rates for similar creators and get simple, safe contract templates highlighting risky terms.</p>
            <p className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded inline-block font-medium">Solves: Underpricing, bad contracts</p>
          </div>
          <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-6 h-6 text-amber-600" />
              <h3 className="font-bold text-gray-900 text-lg">Guaranteed Payouts (48-72 hrs)</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Escrow-backed payments released quickly after approval with real-time tracking for every deliverable.</p>
            <p className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded inline-block font-medium">Solves: Unstable income, 90-day delays</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Prioritised Features (RICE)",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Layout className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900">Prioritised Features — RICE Framework</h2>
        </div>
        <div className="overflow-x-auto mb-6 border border-gray-200 rounded-xl shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 uppercase">
              <tr>
                <th className="px-5 py-4 border-b">Feature</th>
                <th className="px-5 py-4 border-b">Reach (5)</th>
                <th className="px-5 py-4 border-b">Impact (5)</th>
                <th className="px-5 py-4 border-b">Confidence (5)</th>
                <th className="px-5 py-4 border-b">Effort (5)</th>
                <th className="px-5 py-4 font-bold border-b text-purple-700 bg-purple-50">RICE Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-5 py-4 font-semibold text-gray-900">Smart Match Feed</td>
                <td className="px-5 py-4">5</td>
                <td className="px-5 py-4">5</td>
                <td className="px-5 py-4">4</td>
                <td className="px-5 py-4">3</td>
                <td className="px-5 py-4 font-bold text-purple-700 bg-purple-50/50">33.3</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-semibold text-gray-900">Pricing Insights & Contracts</td>
                <td className="px-5 py-4">3</td>
                <td className="px-5 py-4">4</td>
                <td className="px-5 py-4">5</td>
                <td className="px-5 py-4">2</td>
                <td className="px-5 py-4 font-bold text-purple-700 bg-purple-50/50">30.0</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-semibold text-gray-900">Guaranteed Payouts</td>
                <td className="px-5 py-4">5</td>
                <td className="px-5 py-4">4</td>
                <td className="px-5 py-4">4</td>
                <td className="px-5 py-4">4</td>
                <td className="px-5 py-4 font-bold text-purple-700 bg-purple-50/50">20.0</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-semibold text-gray-900">AI Content Studio</td>
                <td className="px-5 py-4">4</td>
                <td className="px-5 py-4">4</td>
                <td className="px-5 py-4">3</td>
                <td className="px-5 py-4">5</td>
                <td className="px-5 py-4 font-bold text-purple-700 bg-purple-50/50">9.6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-5 border border-purple-100">
          <p className="font-bold text-purple-900 mb-2">Why this order?</p>
          <p className="text-sm text-gray-700">Features that help creators get discovered and earn safely are the highest priority for v1.</p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "GTM Strategy & Success Metrics",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Rocket className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-900">GTM Strategy & Success Metrics</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Go-To-Market Strategy</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Targeted outreach in Instagram/YouTube creator groups and value-led breakdowns in Reddit/Discord.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Secure 100–150 D2C brand partners via pilot campaigns with guided onboarding.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Drive early creator traction via "First Gig in 30 Days" program and 2-3 tap applications.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Top Risks & Mitigations</h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                <p className="text-sm font-bold text-red-800 mb-1">Risk: Brands hesitate to post campaigns</p>
                <p className="text-sm text-red-700">Mitigation: Provide hands-on support and assist in writing briefs.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-sm font-bold text-orange-800 mb-1">Risk: Trust in payout system</p>
                <p className="text-sm text-orange-700">Mitigation: Escrow-backed flow with clear, real-time tracking.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg">
          <p className="font-bold mb-4 text-lg">Success Metrics</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <p className="text-purple-400 font-bold text-lg">Activation</p>
              <p className="text-sm mt-1 text-gray-300">1+ application in first month</p>
            </div>
            <div className="p-3">
              <p className="text-purple-400 font-bold text-lg">First Gig</p>
              <p className="text-sm mt-1 text-gray-300">Under 45 days</p>
            </div>
            <div className="p-3">
              <p className="text-purple-400 font-bold text-lg">Repeat Brands</p>
              <p className="text-sm mt-1 text-gray-300">3+ campaigns in 2 months</p>
            </div>
            <div className="p-3">
              <p className="text-purple-400 font-bold text-lg">Payouts</p>
              <p className="text-sm mt-1 text-gray-300">Released within 72 hrs</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const CreatorMatchCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="font-bold text-gray-900">CreatorMatch Case Study</h1>
        </div>
      </header>

      {/* Slides */}
      <main className="pt-20">
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            className="min-h-screen flex items-center justify-center px-6 py-16 border-b border-gray-100"
          >
            <div className="max-w-5xl w-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400 font-medium tracking-wide">Slide {index + 1} of 6</span>
              </div>
              <div className="bg-white rounded-3xl p-5 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 min-h-[500px]">
                {slide.content}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 text-center">
        <p className="text-gray-500 text-sm">CreatorMatch • AI-Powered Brand Collaborations Case Study • Dhruv Varachhiya</p>
      </footer>
    </div>
  );
};

export default CreatorMatchCaseStudy;
