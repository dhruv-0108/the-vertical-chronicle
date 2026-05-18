import { ArrowLeft, Droplets, Brain, Users, CheckCircle, TrendingUp, Rocket, AlertTriangle, Target, Heart, Zap, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AquaSonicCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <span className="text-sm text-gray-400">Case Study • Dhruv Varachhiya</span>
        </div>
      </nav>

      {/* Slides Container */}
      <div className="pt-20">
        
        {/* SLIDE 1 — TITLE SLIDE */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20 border-b border-gray-100">
          <div className="max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-2xl mb-8">
              <Droplets className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AquaSonic
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Energized Water for Mental Clarity & Positivity
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto italic">
              A physical wellness product based on sound vibration (Nada Brahman) and energized through 108 Hanuman Chalisas.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Physical Product", "Mental Wellness", "Science + Spirituality", "Not an App"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400">Case Study • Dhruv Varachhiya</p>
          </div>
        </section>

        {/* SLIDE 2 — PROBLEM STATEMENT */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-gray-100 bg-gray-50">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Problem Statement</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  "People experience high levels of stress, anxiety, emotional overload, and poor mental clarity.",
                  "Existing meditation apps feel generic and disconnected from cultural grounding.",
                  "Users want tangible, natural, non-chemical tools for emotional balance.",
                  "Ancient Indian practice combined water + mantra chanting, but no modern product delivers this physically."
                ].map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-8 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4">Impact</h3>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Rising mental stress → declining focus → lack of emotional stability → demand for simple wellness solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 3 — MARKET RESEARCH */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-gray-100">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Market Research</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Market Insights
                </h3>
                <ul className="space-y-4">
                  {[
                    "India's wellness market is rapidly growing with increasing demand for non-pharma mental health solutions.",
                    "Rising awareness of vibrational healing, sound therapy, and spiritual wellness.",
                    "Consumers are shifting toward cultural + science-blended wellness practices.",
                    "No physical product exists that energizes water using traditional chant processes."
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-red-500" />
                  User Pain Points
                </h3>
                <ul className="space-y-4">
                  {[
                    "Difficulty staying calm and mentally centered.",
                    "Inconsistent meditation habits.",
                    "Overdependence on screens/apps.",
                    "Desire for culturally rooted, simple practices."
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600">
              <p className="text-blue-900 font-medium text-lg">
                <span className="font-bold">Opportunity:</span> Introduce a physical energized-water product grounded in Nada Brahman.
              </p>
            </div>
          </div>
        </section>

        {/* SLIDE 4 — USER PERSONA */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-gray-100 bg-gray-50">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">User Persona</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Persona 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Student / Young Adult</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    Struggles with anxiety, academic pressure.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    Wants better focus & emotional stability.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    Prefers simple, screen-free wellness habits.
                  </li>
                </ul>
              </div>
              
              {/* Persona 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Working Professional / Meditation Practitioner</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-purple-500">•</span>
                    Feels stressed and mentally overloaded.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-500">•</span>
                    Wants a grounding element in daily routine.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-500">•</span>
                    Values authenticity and traditional practices.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-500 mb-4 font-medium">Emotional Outcomes Desired</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Calmness", "Positivity", "Focus", "Faith", "Mental Clarity"].map((outcome) => (
                  <span key={outcome} className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 5 — SOLUTION OVERVIEW */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-gray-100">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Solution – AquaSonic Energized Water</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  What AquaSonic IS
                </h3>
                <ul className="space-y-4">
                  {[
                    "A physical water product energized through 108 complete Hanuman Chalisas.",
                    "Follows Nada Brahman principles: sound vibration influences water energy.",
                    "Performed by a Siddha practitioner with sankalp (intent).",
                    "Blends science + spirituality + vibration-based wellness."
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-red-500 text-xl">✕</span>
                  What AquaSonic is NOT
                </h3>
                <ul className="space-y-4">
                  {[
                    "Not an app.",
                    "Not ritual guidance.",
                    "No chanting required by user.",
                    "No complex steps — just drink the energized water."
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 text-gray-500">
                      <span className="text-red-400">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-gray-900">Authenticity</h4>
                </div>
                <p className="text-gray-600">
                  Each bottle includes a scratch code to verify authenticity and batch origin.
                </p>
              </div>
              
              <div className="bg-blue-600 text-white p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5" />
                  <h4 className="font-bold">Hero Moment</h4>
                </div>
                <p className="text-blue-100">
                  Each batch is charged with 108 Hanuman Chalisas — not a short frequency clip.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 6 — USER JOURNEY */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-gray-100 bg-gray-50">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">User Journey – Current & Future</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Current MVP */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 px-4 py-2 bg-gray-200 rounded-lg inline-block">
                  CURRENT (MVP)
                </h3>
                <div className="space-y-4 mt-6">
                  {[
                    "User discovers AquaSonic.",
                    "Contacts via WhatsApp.",
                    "Shares requirement (quantity, location).",
                    "AquaSonic prepares & delivers energized water.",
                    "User consumes normally."
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Future */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg inline-block">
                  FUTURE
                </h3>
                <div className="space-y-4 mt-6">
                  {[
                    "Order directly from website.",
                    "Select product quantity.",
                    "Secure checkout.",
                    "Online authenticity verification using scratch code.",
                    "Receive guided batch details + calm experience notes."
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 7 — METRICS & GTM */}
        <section className="min-h-screen flex items-center px-6 py-20 border-b border-gray-100">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Metrics & Go-To-Market Strategy</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Metrics */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Metrics</h3>
                <div className="bg-blue-600 text-white p-6 rounded-2xl mb-6">
                  <p className="text-blue-200 text-sm mb-1">North Star Metric</p>
                  <p className="text-xl font-bold">Returning Users / Repeat Orders</p>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-500 text-sm font-medium mb-2">Supporting Metrics:</p>
                  {[
                    "Word-of-mouth referrals",
                    "Emotional feedback (calmness, clarity, positivity)",
                    "Batch authenticity verifications",
                    "Time between first and repeated orders"
                  ].map((metric, index) => (
                    <div key={index} className="flex gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* GTM */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Go-To-Market</h3>
                <div className="space-y-4">
                  {[
                    "Storytelling-led launch: Nada Brahman + ancient practice + modern wellness product.",
                    "Limited-batch drops to build trust & authenticity.",
                    "Early community building via users needing natural stress-relief solutions.",
                    "Minimal ads; rely on referral trust and credibility.",
                    "High-empathy communication: purity, intention, tradition."
                  ].map((strategy, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-gray-400 text-sm">AquaSonic • Case Study • 7-Slide Deck</p>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20 px-6 bg-gray-900 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Thank you for reading</h2>
          <p className="text-gray-400 mb-8">Have questions about this case study?</p>
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AquaSonicCaseStudy;
