import { Link } from "react-router-dom";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Camera,
  Rocket,
  ArrowUpRight,
  Droplets,
  Bike,
  Users,
} from "lucide-react";
import InteractiveGradient from "../components/InteractiveGradient";

const CV = () => {
  return (
    <main className="relative min-h-screen w-full text-black font-sans p-3 md:p-5 lg:p-6 overflow-hidden selection:bg-black selection:text-white">
      <InteractiveGradient />
      <nav className="fixed top-4 right-4 left-4 md:left-auto md:right-4 z-50 bg-white/80 backdrop-blur-md border-2 border-black px-4 py-2 shadow-sm flex justify-between md:justify-start gap-4 text-sm font-medium uppercase tracking-widest">
        <Link to="/" className="text-gray-500 hover:text-black transition">Portfolio</Link>
        <span className="text-black">CV</span>
      </nav>
      <div className="relative z-10 mx-auto w-full max-w-[1920px] 2xl:max-w-[96vw] min-h-[calc(100vh-1.5rem)] flex flex-col lg:grid lg:grid-cols-12 gap-3 md:gap-4 mt-20 lg:mt-0">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-4 xl:col-span-3 2xl:col-span-2 bg-white/70 backdrop-blur-xl border-2 border-black p-5 flex flex-col gap-5 h-fit lg:sticky lg:top-6">
          {/* Header */}
          <header>
            <h1 className="font-space text-3xl xl:text-4xl font-bold leading-tight tracking-tight">
              Dhruv Varachhiya
            </h1>
            <p className="text-sm text-accent font-medium mt-1">
              Aspiring Product Manager · Business Analyst
            </p>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Curious observer turned builder. I translate ambiguity into
              decisions through user research, systems thinking, and clean
              execution.
            </p>
          </header>

          {/* Contact */}
          <section>
            <h2 className="font-space text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Contact
            </h2>
            <ul className="text-xs space-y-1.5">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <a href="mailto:dhruv.varachhiya90@gmail.com" className="hover:text-accent">
                  dhruv.varachhiya90@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+91 9512905894</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Surat, Gujarat</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-accent" />
                <a href="https://www.linkedin.com/in/dhruv-varachhiya-a94a43297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-accent">linkedin.com/in/dhruv</a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-accent" />
                <a href="https://github.com/dhruv-0108" className="hover:text-accent">github.com/dhruv-0108</a>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section>
            <h2 className="font-space text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Core Skills
            </h2>
            <div className="space-y-2 text-xs">
              <SkillRow label="SQL" level={90} />
              <SkillRow label="JavaScript" level={80} />
              <SkillRow label="HTML & CSS" level={85} />
              <SkillRow label="Agile & Scrum" level={85} />
              <SkillRow label="Requirement Gathering" level={90} />
              <SkillRow label="Journey Mapping" level={85} />
            </div>
          </section>

          {/* Tools */}
          <section>
            <h2 className="font-space text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Tools & Platforms
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {[
                "ClickUp",
                "PlantUML",
                "GitHub",
                "VS Code",
                "Google Workspace",
                "AI Tools",
                "Excel",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded-full border border-border bg-muted/40 text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="font-space text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Languages
            </h2>
            <p className="text-xs text-foreground/80">
              English · Hindi · Gujarati
            </p>
          </section>

          {/* Resume CTA */}
          <a
            href="/Dhruv_Varachhiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Dhruv_Varachhiya_Resume.pdf"
            className="mt-auto inline-flex items-center justify-center gap-2 text-xs font-space font-semibold px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </aside>

        {/* MAIN GRID */}
        <section className="lg:col-span-8 xl:col-span-9 2xl:col-span-10 flex flex-col xl:grid xl:grid-cols-3 gap-3 md:gap-4 items-start">
          
          {/* LEFT COLUMN */}
          <div className="xl:col-span-2 flex flex-col gap-3 md:gap-4 w-full">
            {/* Experience */}
            <Card
              icon={<Briefcase className="w-3.5 h-3.5" />}
              title="Experience"
            >
              <ol className="space-y-3">
                <ExpItem
                  role="Business Analyst"
                  org="SSMInfotech Solutions Pvt. Ltd."
                  period="Jan 2026 — Present"
                  points={[
                    "Driving requirement analysis and process alignment for MES implementations across 2 manufacturing industries.",
                    "Leading the documentation of API configuration workflows for direct SAP integration within the X-Force MES platform.",
                    "Collaborating with a 4-member cross-functional team to convert plant operations and business requirements into functional MES configuration specifications.",
                    "Standardizing BPMN-based process flow, equipment flow, and quality traceability models.",
                  ]}
                />
                <ExpItem
                  role="Business Analyst"
                  org="PalmInfotech"
                  period="May 2025 — Sep 2025"
                  points={[
                    "Drafted 50+ user stories, use cases, and test cases by mapping client workflows.",
                    "Translated client requirements into actionable documentation, enabling alignment with internal teams.",
                    "Managed a 5-member team of QA, developers, and designers, ensuring on-time delivery.",
                    "Applied AI prompt engineering with PlantUML to standardize flowchart documentation, saving 10 hours/week.",
                  ]}
                />
                <ExpItem
                  role="Software Engineer Intern"
                  org="Yash Metals"
                  period="Jan 2025 — Apr 2025"
                  points={[
                    "Built a real-time equipment downtime monitoring dashboard used by 5+ site managers.",
                    "Implemented SQL-backed workflows to track equipment downtime and evaluate equipment efficiency across shifts.",
                    "Generated exportable CSV/PDF reports that supported maintenance reviews and reduced time spent compiling operational summaries by ~25%.",
                  ]}
                />
              </ol>
            </Card>

            {/* About / Snapshot */}
            <Card
              icon={<span className="text-[10px] font-bold">01</span>}
              title="Snapshot"
            >
              <ul className="text-xs space-y-1.5 text-foreground/85 list-disc pl-4">
                <li><strong>Impact at Scale:</strong> Managed requirements for LMEL & Emami MES implementations.</li>
                <li><strong>Efficiency:</strong> Built real-time monitoring dashboards, reducing operational reporting time by 25%.</li>
                <li><strong>Leadership:</strong> Managed a 5-member cross-functional team ensuring on-time delivery.</li>
                <li><strong>Innovation:</strong> Saved 10 hours/week via AI-driven PlantUML flowchart engineering.</li>
              </ul>
            </Card>

            {/* Projects */}
            <Card
              icon={<Rocket className="w-3.5 h-3.5" />}
              title="Projects"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <ProjectTile
                  icon={<Droplets className="w-4 h-4" />}
                  title="AquaSonic"
                  subtitle="Sonic water experience"
                  caseStudy="/aquasonic-case-study"
                  live="https://aquasonic-urascape-website.vercel.app/"
                />
                <ProjectTile
                  icon={<Bike className="w-4 h-4" />}
                  title="Motofix DIY"
                  subtitle="Bike maintenance, simplified"
                  caseStudy="/motofix-case-study"
                  live="https://motofix-psi.vercel.app/"
                />
                <ProjectTile
                  icon={<Users className="w-4 h-4" />}
                  title="Creator Match"
                  subtitle="Brand Collaboration Platform"
                  caseStudy="/creatormatch-case-study"
                  live="https://creatormatch-wireframe.vercel.app/"
                />
              </div>
            </Card>

            {/* Photography */}
            <Card icon={<Camera className="w-3.5 h-3.5" />} title="Photography">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 md:gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md bg-muted/60 border border-border flex items-center justify-center text-[10px] text-muted-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">
                Frames from travel, streets, and quiet moments.
              </p>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <div className="xl:col-span-1 flex flex-col gap-3 md:gap-4 w-full">
            {/* Education */}
            <Card icon={<GraduationCap className="w-3.5 h-3.5" />} title="Education">
              <ul className="space-y-3 text-xs">
                <EduItem
                  degree="MSc in Information Technology"
                  school="DAIICT"
                  period="2023 — 2025"
                  note="Grade: 70% | Gandhinagar, Gujarat"
                />
                <EduItem
                  degree="BSc in Information Technology"
                  school="Veer Narmad South Gujarat University"
                  period="2020 — 2023"
                  note="Grade: 68.8% | Surat, Gujarat"
                />
              </ul>
            </Card>

            {/* Leadership & Extracurricular */}
            <Card
              icon={<Award className="w-3.5 h-3.5" />}
              title="Leadership & Extracurricular"
            >
              <ul className="flex flex-col gap-5 text-xs">
                <li>
                  <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5 mb-1">
                    <h3 className="font-semibold text-sm">Student Placement Cell</h3>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">Nov 2023 — Dec 2024</span>
                  </div>
                  <p className="text-[11px] text-accent mb-1.5 font-medium">Member · DAIICT</p>
                  <ul className="list-disc pl-4 space-y-1 text-foreground/85">
                    <li>Coordinated with 120+ recruiting companies and acted as liaison for 400+ students.</li>
                    <li>Scheduled and aligned 10+ interviews across 4 venues.</li>
                  </ul>
                </li>
                <li>
                  <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5 mb-1">
                    <h3 className="font-semibold text-sm">Project Manager Job Simulation</h3>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">2025</span>
                  </div>
                  <p className="text-[11px] text-accent mb-1.5 font-medium">Siemens Mobility — Forage</p>
                  <ul className="list-disc pl-4 space-y-1 text-foreground/85">
                    <li>Defined 5+ KPIs to improve progress visibility and alignment.</li>
                    <li>Built Excel dashboards using data from 3+ stakeholders.</li>
                  </ul>
                </li>
              </ul>
            </Card>
          </div>

        </section>
      </div>
    </main>
  );
};

/* ---------- helpers ---------- */

const Card = ({
  icon,
  title,
  className = "",
  children,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`bg-white/70 backdrop-blur-xl border-2 border-black p-4 flex flex-col h-fit ${className}`}
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="w-5 h-5 rounded-md bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </span>
      <h2 className="font-space text-xs font-bold uppercase tracking-[0.18em]">
        {title}
      </h2>
    </div>
    <div className="flex-1">{children}</div>
  </div>
);

const SkillRow = ({ label, level }: { label: string; level: number }) => (
  <div>
    <div className="flex justify-between text-[11px] mb-0.5">
      <span className="text-foreground/85">{label}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-1 rounded-full bg-muted overflow-hidden">
      <div
        className="h-full bg-primary"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const ExpItem = ({
  role,
  org,
  period,
  points,
}: {
  role: string;
  org: string;
  period: string;
  points: string[];
}) => (
  <li className="border-l-2 border-primary/30 pl-3">
    <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
      <h3 className="text-sm font-semibold">{role}</h3>
      <span className="text-[10px] text-muted-foreground whitespace-nowrap">
        {period}
      </span>
    </div>
    <p className="text-[11px] text-accent font-medium">{org}</p>
    <ul className="mt-1 text-xs text-foreground/85 list-disc pl-4 space-y-0.5">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </li>
);

const EduItem = ({
  degree,
  school,
  period,
  note,
}: {
  degree: string;
  school: string;
  period: string;
  note: string;
}) => (
  <li>
    <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
      <h3 className="font-semibold">{degree}</h3>
      {period && (
        <span className="text-[10px] text-muted-foreground whitespace-nowrap">{period}</span>
      )}
    </div>
    <p className="text-[11px] text-accent">{school}</p>
    <p className="text-[11px] text-muted-foreground mt-0.5">{note}</p>
  </li>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
    <span className="text-foreground/85">{children}</span>
  </li>
);

const ProjectTile = ({
  icon,
  title,
  subtitle,
  caseStudy,
  live,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  caseStudy?: string;
  live?: string;
}) => (
  <div className="border border-black p-3 bg-white/60 backdrop-blur-sm flex flex-col h-full">
    <div className="flex items-center justify-between mb-2">
      <span className="w-7 h-7 rounded-md bg-primary/10 text-primary flex items-center justify-center">
        {icon}
      </span>
    </div>
    <h3 className="text-sm font-semibold leading-tight">{title}</h3>
    <p className="text-[11px] text-muted-foreground mt-0.5 mb-4">{subtitle}</p>
    
    <div className="mt-auto flex flex-col gap-1.5">
      {caseStudy && (
        <Link
          to={caseStudy}
          className="text-[10px] font-space uppercase tracking-wider text-accent hover:underline flex items-center gap-1"
        >
          View case study →
        </Link>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-space uppercase tracking-wider text-accent hover:underline flex items-center gap-1"
        >
          View prototype <ArrowUpRight className="w-3 h-3" />
        </a>
      )}
      {!caseStudy && !live && (
        <span className="text-[10px] font-space uppercase tracking-wider text-muted-foreground">
          Coming soon
        </span>
      )}
    </div>
  </div>
);

export default CV;
