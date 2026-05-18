import os

filepath = '/Users/dhruvvarachhiya/Documents/the-vertical-chronicle-main/src/pages/Index.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# 1. Hero gap reduction
content = content.replace('className="px-6 md:px-12 pt-12 pb-16 min-h-[50vh]', 'className="px-6 md:px-12 pt-12 pb-8 min-h-[50vh]')

# 2. Exp Section
exp_old = '''      {/* Professional Experience Timeline */}
      <section className="mt-12 md:mt-24">
        <div className="px-6 md:px-12 py-12 md:py-16 w-full max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">Professional Experience</h2>
            <span className="text-xs font-bold text-black/70 tracking-widest pb-1 md:pb-2">⧗ 1+ Years Experience</span>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-8 mt-8">
            {[
              {
                period: "Jan 2026 - Present",
                role: "Business Analyst",
                company: "SSSM InfoTech Solutions Pvt. Ltd.",
                desc: "Driving requirement analysis and process alignment for MES implementations. Leading documentation of API configuration workflows for SAP integration."
              },
              {
                period: "May 2025 - Sep 2025",
                role: "Business Analyst",
                company: "PalmInfotech",
                desc: "Drafted 50+ user stories, use cases, and test cases. Managed a 5-member cross-functional team and applied AI to standardize flowchart documentation."
              },
              {
                period: "Jan 2025 - Apr 2025",
                role: "Software Engineer Intern",
                company: "Yash Metals",
                desc: "Built a real-time equipment downtime monitoring dashboard and implemented SQL-backed workflows to evaluate efficiency."
              }
            ].map((exp, idx, arr) => (
              <div key={idx} className="flex-1 relative pl-10 md:pl-0 md:pt-16 group">
                {/* Mobile vertical line for each item (except last) */}
                {idx !== arr.length - 1 && (
                  <div className="absolute left-[9px] top-2 bottom-[-4rem] w-[3px] bg-black/30 md:hidden z-0"></div>
                )}
                
                {/* Desktop horizontal line for each item (except last) */}
                {idx !== arr.length - 1 && (
                  <div className="absolute left-2 right-[-2rem] top-[9px] h-[3px] bg-black/30 hidden md:block z-0"></div>
                )}

                {/* Node */}
                <div className="absolute left-0 top-[2px] md:top-0 w-5 h-5 rounded-full bg-[#D1D1CB] border-[3px] border-black z-10 group-hover:scale-150 group-hover:bg-black transition-all duration-300 md:left-0"></div>
                
                <div className="mix-blend-color-burn pt-1 md:pt-0">'''

exp_new = '''      {/* Professional Experience Timeline */}
      <section className="">
        <div className="px-6 md:px-12 py-8 md:py-12 w-full max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">Professional Experience</h2>
            <span className="text-xs font-bold text-black/70 tracking-widest pb-1 md:pb-2">⧗ 1+ Years Experience</span>
          </div>

          <div className="flex flex-col gap-12 mt-4">
            {[
              {
                period: "Jan 2026 - Present",
                role: "Business Analyst",
                company: "SSSM InfoTech Solutions Pvt. Ltd.",
                desc: "Driving requirement analysis and process alignment for MES implementations. Leading documentation of API configuration workflows for SAP integration."
              },
              {
                period: "May 2025 - Sep 2025",
                role: "Business Analyst",
                company: "PalmInfotech",
                desc: "Drafted 50+ user stories, use cases, and test cases. Managed a 5-member cross-functional team and applied AI to standardize flowchart documentation."
              },
              {
                period: "Jan 2025 - Apr 2025",
                role: "Software Engineer Intern",
                company: "Yash Metals",
                desc: "Built a real-time equipment downtime monitoring dashboard and implemented SQL-backed workflows to evaluate efficiency."
              }
            ].map((exp, idx, arr) => (
              <div key={idx} className="relative group ml-0">
                {/* Vertical line for all sizes */}
                {idx !== arr.length - 1 && (
                  <div className="absolute -left-6 md:-left-10 top-2 bottom-[-4rem] w-[3px] bg-black/30 z-0"></div>
                )}

                {/* Node */}
                <div className="absolute -left-[32px] md:-left-[48px] top-[2px] w-5 h-5 rounded-full bg-[#D1D1CB] border-[3px] border-black z-10 group-hover:scale-150 group-hover:bg-black transition-all duration-300"></div>
                
                <div className="mix-blend-color-burn pt-1">'''

if exp_old in content:
    content = content.replace(exp_old, exp_new)
else:
    print("Warning: exp_old not found!")

# 3. Selected Projects gap and header alignment
projects_old = '''      {/* Projects List */}
      <section className="mt-12 md:mt-24 mb-24">
        <div className="px-6 md:px-12 pt-12 pb-4 flex justify-between items-center w-full max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-black/60">Selected Projects</h2>
          <span className="text-xs font-bold text-black/40 tracking-widest hidden sm:block">⧗ Impact & Design</span>
        </div>'''

projects_new = '''      {/* Projects List */}
      <section className="">
        <div className="px-6 md:px-12 py-8 md:py-12 w-full max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9]">Selected Projects</h2>
            <span className="text-xs font-bold text-black/70 tracking-widest pb-1 md:pb-2">⧗ Impact & Design</span>
          </div>'''

if projects_old in content:
    content = content.replace(projects_old, projects_new)
else:
    print("Warning: projects_old not found!")

# 4. ProjectRow alignment - reduce py to reduce gaps
project_row_old = '''  <Link to={link} className="block border-b-[3px] border-black w-full group/row hover:bg-black transition-all duration-500 relative overflow-hidden group-hover/list:opacity-30 hover:!opacity-100 flex flex-col items-center">
    <div className="px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mix-blend-color-burn group-hover/row:mix-blend-normal transition-all duration-500 w-full max-w-4xl">'''

project_row_new = '''  <Link to={link} className="block border-b-[3px] border-black w-full group/row hover:bg-black transition-all duration-500 relative overflow-hidden group-hover/list:opacity-30 hover:!opacity-100 flex flex-col items-center">
    <div className="px-6 md:px-12 py-12 md:py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mix-blend-color-burn group-hover/row:mix-blend-normal transition-all duration-500 w-full max-w-4xl">'''

if project_row_old in content:
    content = content.replace(project_row_old, project_row_new)
else:
    print("Warning: project_row_old not found!")

# 5. Footer Layout update
footer_old = '''      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 md:py-16 border-t-[3px] border-black bg-black text-[#D1D1CB] text-sm font-bold tracking-widest flex flex-col md:flex-row justify-between items-center md:items-end gap-12 md:gap-4">
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-8">
          <div className="text-xl font-black tracking-tighter">Dhruv Varachhiya</div>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-8">'''

footer_new = '''      {/* Footer */}
      <footer className="w-full bg-black border-t-[3px] border-black">
        <div className="px-6 md:px-12 py-12 md:py-16 w-full max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-4 text-[#D1D1CB] text-sm font-bold tracking-widest">
          <div className="flex flex-col items-start gap-6 md:gap-8">
            <div className="text-xl font-black tracking-tighter">Dhruv Varachhiya</div>
            <div className="flex flex-wrap justify-start items-center gap-8">'''

if footer_old in content:
    content = content.replace(footer_old, footer_new)
else:
    print("Warning: footer_old not found!")

footer_end_old = '''        <div className="text-[#D1D1CB]/50 font-medium">© 2026 All Rights Reserved</div>
      </footer>'''

footer_end_new = '''          <div className="text-[#D1D1CB]/50 font-medium whitespace-nowrap">© 2026 All Rights Reserved</div>
        </div>
      </footer>'''

if footer_end_old in content:
    content = content.replace(footer_end_old, footer_end_new)
else:
    print("Warning: footer_end_old not found!")

with open(filepath, 'w') as f:
    f.write(content)
print("Changes applied successfully.")
