import { ArrowLeft, Wrench, Users, Lightbulb, Target, Layout, TrendingUp, ClipboardList, BarChart3, Compass, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Title",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Motofix DIY</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Bike Maintenance Made Simple</p>
        <p className="text-gray-500 max-w-xl mb-12">
          A product case study based on primary research with 32 bike riders — understanding their pain points, behaviors, and needs around motorcycle maintenance.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["Primary Research", "32 Riders Surveyed", "DIY Maintenance", "Product Concept"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link 
          to="/motofix-demo" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors mb-12 text-sm font-medium shadow-sm"
        >
          View Interactive Prototype <Rocket className="w-4 h-4" />
        </Link>
        <p className="text-sm text-gray-400">Case Study • Dhruv Varachhiya</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "The Opportunity",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Compass className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">The Opportunity</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-4xl font-bold text-blue-600 mb-2">220M+</p>
              <p className="text-gray-700">Two-wheelers registered in India alone</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl border border-green-100">
              <p className="text-4xl font-bold text-green-600 mb-2">70%</p>
              <p className="text-gray-700">Owners service at local mechanics vs authorized centers</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Market Reality</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Massive user base with limited maintenance knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Trust gap between owners and service providers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>No single source of model-specific, beginner-friendly information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span>Rising digital literacy creating opportunity for self-learning</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800"><strong>Hypothesis:</strong> Bike owners want to understand their vehicles better but lack accessible, structured information tailored to their specific model.</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Research Methodology",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <ClipboardList className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Research Methodology</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">32</p>
            <p className="text-gray-700 font-medium">Bike Riders Surveyed</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">4</p>
            <p className="text-gray-700 font-medium">Ride Meets Attended</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
            <p className="text-5xl font-bold text-blue-600 mb-2">12</p>
            <p className="text-gray-700 font-medium">In-depth Interviews</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Survey Approach</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span>On-ground surveys at weekend ride meets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span>Mix of commuters, enthusiasts, and new riders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span>Age range: 19-42 years</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span>Bike ownership: 6 months to 8+ years</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Key Questions Explored</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600">?</span>
                <span>How do you currently learn about bike maintenance?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">?</span>
                <span>What frustrates you about service center visits?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">?</span>
                <span>Would you do basic maintenance yourself if guided?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">?</span>
                <span>What information do you wish you had about your bike?</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Key Findings",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Key Findings from 32 Riders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 bg-red-50 rounded-xl border border-red-100">
            <div className="flex items-end gap-2 mb-2">
              <p className="text-4xl font-bold text-red-600">78%</p>
              <p className="text-sm text-red-500 mb-1">(25/32)</p>
            </div>
            <p className="text-gray-700">Don't know their bike's recommended service intervals</p>
          </div>
          <div className="p-5 bg-orange-50 rounded-xl border border-orange-100">
            <div className="flex items-end gap-2 mb-2">
              <p className="text-4xl font-bold text-orange-600">84%</p>
              <p className="text-sm text-orange-500 mb-1">(27/32)</p>
            </div>
            <p className="text-gray-700">Felt overcharged or unsure about service center bills at least once</p>
          </div>
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-end gap-2 mb-2">
              <p className="text-4xl font-bold text-blue-600">69%</p>
              <p className="text-sm text-blue-500 mb-1">(22/32)</p>
            </div>
            <p className="text-gray-700">Willing to do basic DIY tasks if given clear, simple instructions</p>
          </div>
          <div className="p-5 bg-purple-50 rounded-xl border border-purple-100">
            <div className="flex items-end gap-2 mb-2">
              <p className="text-4xl font-bold text-purple-600">91%</p>
              <p className="text-sm text-purple-500 mb-1">(29/32)</p>
            </div>
            <p className="text-gray-700">Use YouTube for bike-related queries but find it "scattered" and "overwhelming"</p>
          </div>
        </div>
        <div className="bg-gray-900 text-white rounded-xl p-5">
          <p className="text-sm text-gray-400 mb-1">Top frustration (open-ended responses)</p>
          <p className="text-lg font-medium">"I don't know what's actually needed vs what they're just trying to sell me."</p>
          <p className="text-sm text-gray-400 mt-2">— Mentioned by 19 out of 32 respondents</p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Problem Statement",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Target className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Problem Statement</h2>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200">
          <p className="text-xl text-gray-800 leading-relaxed">
            <strong className="text-blue-600">Bike owners</strong> struggle to understand their vehicle's maintenance needs because information is either <strong className="text-red-600">too technical</strong> (manuals), <strong className="text-red-600">too scattered</strong> (YouTube), or <strong className="text-red-600">not trustworthy</strong> (mechanics with vested interests).
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 border-l-4 border-red-500 bg-white rounded-r-lg shadow-sm">
            <p className="font-semibold text-gray-900 mb-1">Knowledge Gap</p>
            <p className="text-sm text-gray-600">78% don't know service intervals</p>
          </div>
          <div className="p-4 border-l-4 border-orange-500 bg-white rounded-r-lg shadow-sm">
            <p className="font-semibold text-gray-900 mb-1">Trust Deficit</p>
            <p className="text-sm text-gray-600">84% felt overcharged</p>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-white rounded-r-lg shadow-sm">
            <p className="font-semibold text-gray-900 mb-1">Information Chaos</p>
            <p className="text-sm text-gray-600">91% find YouTube overwhelming</p>
          </div>
        </div>
        <div className="bg-blue-600 text-white rounded-xl p-5">
          <p className="font-medium">This leads to:</p>
          <p className="text-blue-100 mt-1">Poor maintenance decisions → Reduced bike lifespan → Unnecessary costs → Continued dependency on mechanics</p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "User Personas",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">User Personas</h2>
          <span className="text-sm text-gray-500 ml-auto">Based on survey segmentation</span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl p-5 border-2 border-blue-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏍️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Daily Commuter</h3>
                <p className="text-xs text-blue-600">44% of respondents (14/32)</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Rides 30-50 km daily</li>
              <li>• Prioritizes reliability & low cost</li>
              <li>• Needs simple reminders</li>
              <li>• Time-constrained, wants quick answers</li>
            </ul>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700 italic">"Just tell me what to check before monsoon hits."</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border-2 border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Budget-Conscious</h3>
                <p className="text-xs text-green-600">31% of respondents (10/32)</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Actively avoids service centers</li>
              <li>• Already does some DIY</li>
              <li>• Needs trusted step-by-step guides</li>
              <li>• Wants to verify mechanic claims</li>
            </ul>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 italic">"If I knew how, I'd do everything myself."</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border-2 border-purple-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Enthusiast</h3>
                <p className="text-xs text-purple-600">25% of respondents (8/32)</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Passionate about motorcycles</li>
              <li>• Wants deep technical knowledge</li>
              <li>• Interested in upgrades & mods</li>
              <li>• Already active in riding groups</li>
            </ul>
            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-purple-700 italic">"I want to know my bike inside out."</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Solution Overview",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Solution: Motofix DIY</h2>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 mb-8">
          <p className="text-xl font-medium mb-2">A single platform where bike owners select their exact model and get everything they need to understand and maintain their vehicle.</p>
          <p className="text-blue-200 text-sm">Model-specific • Beginner-friendly • Trustworthy</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">How It Works</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                <span className="text-gray-700">Select Brand → Model → Year</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                <span className="text-gray-700">See your bike's complete maintenance timeline</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                <span className="text-gray-700">Learn with simple DIY guides</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                <span className="text-gray-700">Get service-ready checklists</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Value Delivered</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Knowledge = Confidence</p>
                  <p className="text-sm text-gray-600">Addresses the 78% who don't know service intervals</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Trust Through Transparency</p>
                  <p className="text-sm text-gray-600">Helps the 84% who felt overcharged verify claims</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Structured Over Scattered</p>
                  <p className="text-sm text-gray-600">One place vs 91% struggling with YouTube chaos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Key Features",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Layout className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">🏍️</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Bike Model Selector</h3>
            <p className="text-sm text-gray-600 mb-3">Brand → Model → Year selection to get model-specific information</p>
            <p className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block">Addresses: 91% finding generic info useless</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">📅</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Maintenance Timeline</h3>
            <p className="text-sm text-gray-600 mb-3">Visual schedule showing what's due at what KM/time interval</p>
            <p className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">Addresses: 78% not knowing service intervals</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">📖</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">DIY Guides</h3>
            <p className="text-sm text-gray-600 mb-3">Step-by-step visual instructions for common tasks (chain cleaning, oil check, etc.)</p>
            <p className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded inline-block">Addresses: 69% willing to DIY with guidance</p>
          </div>
          <div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
              <span className="text-xl">✅</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Service Preparedness Checklist</h3>
            <p className="text-sm text-gray-600 mb-3">What to ask, verify, and expect before going to a mechanic</p>
            <p className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">Addresses: 84% who felt overcharged</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800"><strong>Current Status:</strong> Motofix is at concept/case-study stage, focused on validating problem-solution fit through this research.</p>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Success Metrics",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Success Metrics</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Activation & Engagement</h3>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-medium text-blue-900">Model Selection Rate</p>
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded">Primary</span>
                </div>
                <p className="text-sm text-blue-700">% of visitors who complete bike selection</p>
                <p className="text-xs text-blue-600 mt-2">Target: &gt;60% of homepage visitors</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-medium text-green-900">Guide Completion</p>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded">Engagement</span>
                </div>
                <p className="text-sm text-green-700">% of users who finish at least 1 DIY guide</p>
                <p className="text-xs text-green-600 mt-2">Target: &gt;40% of activated users</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Retention & Satisfaction</h3>
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-medium text-purple-900">Return Rate</p>
                  <span className="text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded">Retention</span>
                </div>
                <p className="text-sm text-purple-700">% returning within 30 days (around service time)</p>
                <p className="text-xs text-purple-600 mt-2">Target: &gt;25% monthly return</p>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-medium text-amber-900">Confidence Score</p>
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded">Outcome</span>
                </div>
                <p className="text-sm text-amber-700">Self-reported confidence in maintenance (1-10)</p>
                <p className="text-xs text-amber-600 mt-2">Target: +3 point improvement post-use</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-white rounded-xl p-5">
          <p className="font-medium mb-2">North Star Metric</p>
          <p className="text-2xl font-bold text-blue-400"># of maintenance tasks completed with Motofix guidance</p>
          <p className="text-sm text-gray-400 mt-2">Represents actual value delivered — users taking action based on our information</p>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Go-To-Market & Next Steps",
    content: (
      <div className="h-full">
        <div className="flex items-center gap-3 mb-8">
          <Rocket className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Go-To-Market & Next Steps</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Launch Strategy</h3>
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Phase 1: Community Seeding</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Partner with 3-5 riding groups from survey</li>
                  <li>• Launch with top 10 popular models first</li>
                  <li>• Target: 500 beta users in 2 months</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Phase 2: Content Growth</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Social snippets: "3 things to check before monsoon"</li>
                  <li>• User-requested model prioritization</li>
                  <li>• SEO for "[bike model] service guide"</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-medium text-gray-900 mb-1">Phase 3: Monetization</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Parts affiliate partnerships</li>
                  <li>• Premium advanced guides</li>
                  <li>• Workshop partnership program</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Immediate Next Steps</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span className="text-gray-700">Build MVP with 5 popular bike models</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span className="text-gray-700">Create 10 high-quality DIY guides</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span className="text-gray-700">Beta test with 20 riders from survey</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <span className="text-gray-700">Iterate based on usage data & feedback</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white">
              <p className="font-medium mb-1">Research Validation</p>
              <p className="text-sm text-blue-100">32 riders surveyed → Clear problem identified → Solution designed with data-backed features</p>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">Motofix DIY • Product Concept Case Study • 10 Slides • Dhruv Varachhiya</p>
      </div>
    ),
  },
];

const MotofixCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <h1 className="font-bold text-gray-900">Motofix DIY Case Study</h1>
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
                <span className="text-sm text-gray-400">Slide {index + 1} of 10</span>
              </div>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 min-h-[500px]">
                {slide.content}
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 text-center">
        <p className="text-gray-500 text-sm">Motofix DIY • Product Concept Case Study • Based on Primary Research with 32 Riders • Dhruv Varachhiya</p>
      </footer>
    </div>
  );
};

export default MotofixCaseStudy;
