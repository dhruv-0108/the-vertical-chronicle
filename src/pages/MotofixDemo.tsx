import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronDown, Clock, Wrench, AlertCircle, PenTool, Calendar, FileText } from "lucide-react";

const BIKES = {
  Honda: ["CB Shine", "Activa 6G", "H'ness CB350"],
  RoyalEnfield: ["Classic 350", "Meteor 350", "Himalayan"],
  Yamaha: ["MT-15", "R15 V4", "FZ-S"],
};

const YEARS = ["2020", "2021", "2022", "2023", "2024"];

const TIMELINE = [
  { km: "500 km", time: "1 Month", type: "First Service", items: ["Engine Oil Change", "Chain Cleaning & Lube", "General Checkup"], status: "completed" },
  { km: "3,000 km", time: "3 Months", type: "General Service", items: ["Air Filter Cleaning", "Brake Pad Check", "Clutch Adjustment"], status: "due" },
  { km: "6,000 km", time: "6 Months", type: "Major Service", items: ["Engine Oil Change", "Oil Filter Change", "Spark Plug Clean/Replace"], status: "upcoming" },
];

const GUIDES = [
  { title: "How to clean and lube your chain", difficulty: "Beginner", time: "15 mins", icon: <PenTool className="w-5 h-5" /> },
  { title: "Checking tire pressure & tread", difficulty: "Beginner", time: "5 mins", icon: <AlertCircle className="w-5 h-5" /> },
  { title: "Adjusting clutch free-play", difficulty: "Intermediate", time: "10 mins", icon: <Wrench className="w-5 h-5" /> },
];

export default function MotofixDemo() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [activeTab, setActiveTab] = useState("timeline"); // timeline, guides, checklists
  const [selectedBike, setSelectedBike] = useState(false);

  const handleSelectBike = () => {
    if (brand && model && year) {
      setSelectedBike(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-200">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/motofix-case-study" className="text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Motofix DIY</h1>
          </div>
          <div className="w-6"></div> {/* Spacer for centering */}
        </div>
      </header>

      <main className="max-w-md mx-auto min-h-[calc(100vh-73px)] pb-20">
        {!selectedBike ? (
          <div className="p-6">
            <div className="text-center mb-8 mt-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Bike</h2>
              <p className="text-sm text-gray-500">Get model-specific maintenance schedules and guides.</p>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Brand</label>
                <select
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={brand}
                  onChange={(e) => { setBrand(e.target.value); setModel(""); }}
                >
                  <option value="">Select Brand</option>
                  {Object.keys(BIKES).map((b) => (
                    <option key={b} value={b}>{b.replace(/([A-Z])/g, ' $1').trim()}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Model</label>
                <select
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none disabled:opacity-50"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  disabled={!brand}
                >
                  <option value="">Select Model</option>
                  {brand && BIKES[brand as keyof typeof BIKES].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Year</label>
                <select
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none disabled:opacity-50"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  disabled={!model}
                >
                  <option value="">Select Year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSelectBike}
                disabled={!brand || !model || !year}
                className="w-full mt-6 bg-blue-600 text-white font-semibold rounded-xl px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
              >
                Show Maintenance Schedule
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Bike Header */}
            <div className="bg-white p-6 border-b border-gray-200 mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                    {year} {brand.replace(/([A-Z])/g, ' $1').trim()} {model}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Model specific data verified
                  </p>
                </div>
                <button
                  onClick={() => setSelectedBike(false)}
                  className="text-sm text-blue-600 font-medium hover:underline"
                >
                  Change
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 bg-white sticky top-[73px] z-40">
              <button
                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'timeline' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('timeline')}
              >
                <Calendar className="w-4 h-4 mx-auto mb-1" />
                Schedule
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'guides' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('guides')}
              >
                <PenTool className="w-4 h-4 mx-auto mb-1" />
                DIY Guides
              </button>
              <button
                className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'checklists' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('checklists')}
              >
                <FileText className="w-4 h-4 mx-auto mb-1" />
                Checklists
              </button>
            </div>

            {/* Content area */}
            <div className="p-4">
              {activeTab === 'timeline' && (
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  {TIMELINE.map((item, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 ${item.status === 'completed' ? 'bg-green-500' : item.status === 'due' ? 'bg-orange-500' : 'bg-gray-300'}`}>
                        {item.status === 'completed' ? <CheckCircle2 className="w-5 h-5 text-white" /> : <Clock className="w-5 h-5 text-white" />}
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white border border-gray-200 shadow-sm ml-4 md:ml-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-bold uppercase tracking-wider ${item.status === 'due' ? 'text-orange-600' : 'text-gray-500'}`}>
                            {item.time} / {item.km}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.status === 'completed' ? 'bg-green-100 text-green-700' : item.status === 'due' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'}`}>
                            {item.status}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3">{item.type}</h3>
                        <ul className="space-y-1.5">
                          {item.items.map((task, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-blue-500 mt-0.5">•</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                        {item.status === 'due' && (
                          <button className="mt-4 w-full bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium py-2 rounded-lg text-sm transition-colors">
                            Mark as Done
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'guides' && (
                <div className="space-y-4">
                  {GUIDES.map((guide, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 cursor-pointer hover:border-blue-300 transition-colors">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 text-blue-600">
                        {guide.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{guide.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                          <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded">
                            {guide.difficulty}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {guide.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <button className="text-sm font-medium text-blue-600 hover:underline">
                      Request a specific guide
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'checklists' && (
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="font-bold text-gray-900">Pre-Service Checklist</h3>
                    <p className="text-xs text-gray-500 mt-1">What to verify before handing your bike to a mechanic.</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      "Take photos of all sides of the bike",
                      "Note down the current odometer reading",
                      "Ask for an estimated cost beforehand",
                      "Ensure they check brake pads",
                      "Specify not to wash/polish if you DIY"
                    ].map((item, i) => (
                      <label key={i} className="flex items-start gap-3 p-4 hover:bg-gray-50 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
