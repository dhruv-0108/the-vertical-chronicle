import os

filepath = '/Users/dhruvvarachhiya/Documents/the-vertical-chronicle-main/src/pages/Index.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# 1. Fix alignment for sections (Experience & Selected Projects)
content = content.replace(
    '<section className="">\n        <div className="px-6 md:px-12 py-8 md:py-12 w-full max-w-4xl mx-auto">',
    '<section className="px-6 md:px-12">\n        <div className="py-8 md:py-12 w-full max-w-4xl mx-auto">'
)

# 2. Fix alignment for Footer
content = content.replace(
    '<footer className="w-full bg-black border-t-[3px] border-black">\n        <div className="px-6 md:px-12 py-12 md:py-16 w-full max-w-4xl mx-auto',
    '<footer className="w-full px-6 md:px-12 bg-black border-t-[3px] border-black">\n        <div className="py-12 md:py-16 w-full max-w-4xl mx-auto'
)

# 3. Fix alignment for ProjectRow
content = content.replace(
    'className="block border-b-[3px] border-black w-full group/row hover:bg-black transition-all duration-500 relative overflow-hidden group-hover/list:opacity-30 hover:!opacity-100 flex flex-col items-center">\n    <div className="px-6 md:px-12 py-12 md:py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mix-blend-color-burn group-hover/row:mix-blend-normal transition-all duration-500 w-full max-w-4xl">',
    'className="block border-b-[3px] border-black w-full px-6 md:px-12 group/row hover:bg-black transition-all duration-500 relative overflow-hidden group-hover/list:opacity-30 hover:!opacity-100 flex flex-col items-center">\n    <div className="py-12 md:py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mix-blend-color-burn group-hover/row:mix-blend-normal transition-all duration-500 w-full max-w-4xl">'
)

# 4. Reverse the order of the timeline array
array_old = '''            {[
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
            ].map((exp, idx, arr) => ('''

array_new = '''            {[
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
            ].map((exp, idx, arr) => ('''

content = content.replace(array_old, array_new)

with open(filepath, 'w') as f:
    f.write(content)
