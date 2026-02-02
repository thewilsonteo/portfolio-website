// Experience.jsx
import { Briefcase } from 'lucide-react';
import TextFormatter from '../components/TextFormatter.jsx';

const skillCategories = [
  { title: "Frontend", 
    skills: [
      {name: "Angular", icon: "angular-icon.svg"},
      {name: "React",   icon: "react.svg"},
      {name: "Python",  icon: "python.svg"},
      {name: "HTML5",   icon: "html-5.svg"},
      {name: "CSS",     icon: "css-3.svg"},
      {name: "JavaScript",  icon: "javascript.svg"},
      {name: "TypeScript",  icon: "typescript-icon.svg"},
      {name: "Bootstrap",   icon: "bootstrap.svg"},
      {name: "Ionic",   icon: "ionic-icon.svg"},
      {name: "Tailwind",    icon: "tailwindcss-icon.svg"},
      {name: "Elementor",   icon: "elementor-icon.svg"},
    ]
  },
  { title: "Backend", 
    skills: [
      {name: "Node.js", icon: "nodejs-icon.svg"},
      {name: "PHP",     icon: "php-alt.svg"},
      {name: "MySQL",   icon: "mysql-icon.svg"},
      {name: "Python",  icon: "python.svg"},
      {name: "NGINX",   icon: "nginx.svg"},
    ],
  },
  { title: "Software", 
    skills: [
      {name: "VS Code", icon: "visual-studio-code.svg"},
      {name: "Git",     icon: "git-icon.svg"},
      {name: "GitHub",  icon: "github-icon.svg"},
      {name: "Adobe Photoshop", icon: "adobe-photoshop.svg"},
      {name: "Canva",   icon: "Canva-icon.png"},
      {name: "Adobe XD",        icon: "adobe-xd.svg"},
      {name: "Figma",   icon: "figma.svg"},
      {name: "Sony Vegas",      icon: "sony-vegas-logo-icon.svg"},
      {name: "DaVinci Resolve", icon: "DaVinci_Resolve_17_logo.svg"},
    ],
  },
  { title: "Languages", 
    skills: [
      {name: "English"},
      {name: "中文"},
      {name: "日本語"}
    ]
   }
];

const timeline = [
  {
    role: "Full Stack Developer",
    company: "Ceesolution Pte. Ltd.",
    logo: "ceesolution-pte-ltd.jpeg",
    period: "2023 - 2024",
    desc: [
        "Collaborate with product managers, developers, and stakeholders in the requirement-gathering phase, as well as with cross-functional teams for effective development and timely project completion to deliver high-quality software products.",
        "Test, deploy, and debug software programs and systems. Run performance tests and debug issues in existing software while maintaining data privacy practices.",
        "Design frontend and backend architectures, including user interface desin and API design. Generate technical documentation, prototypes, and wireframes while keeping up to date with design trends and ensuring developed and delivered solutions are user-centered."
    ],
  },
  {
    role: "Web Designer",
    company: "SkipQoo",
    logo: "skipqoo.jpg",
    period: "2021 - 2023",
    desc: [
      "Integrated systems such as ERP and API request for several businesses.",
      "Assisting in designing and implementing new features and functionality for marketing websites.",
      "Building user interfaces and ensuring high performance of websites.",
      "Maintaining quality service by establishing and enforcing organisation standards.",
      "Preserved marketing arms with reputable followings by producing deliverables at a consistent rate.",
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>
        
        {/* Category Containers */}
        <div className="space-y-16 mb-24">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-8 text-gray-400 uppercase tracking-widest text-center">
                {category.title}
              </h3>
              
              {/* Individual Skill Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group"
                  >
                    {/* This is the React version of *ngIf */}
                    {skill.icon && (
                      <div className="mb-4 p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        {/* Icon sits directly above title */}
                        <img src={`./${skill.icon}`} className="w-8 h-8" />
                      </div>
                    )}
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Timeline (Linear Version) */}
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-600" /> Career Path
          </h3>
          
          {/* The Vertical Line */}
          <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-12">
            {timeline.map((job, index) => (
              <div key={index} className="relative pl-10 md:pl-16">
              {/* The Timeline Dot/Logo */}
              <div className="absolute -left-4.5 md:-left-6 top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-gray-100 shadow-sm z-10 overflow-hidden">
                {job.logo ? (
                  <img 
                    src={`./${job.logo}`} 
                    alt={job.company} 
                    className="w-full h-full object-contain p-1" 
                  />
                ) : (
                  <Briefcase size={16} className="text-blue-600" />
                )}
              </div>

                {/* The Content Card */}
                <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {job.role}
                      </h4>
                      <p className="text-sm font-medium text-slate-500">{job.company}</p>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-full w-fit">
                      {job.period}
                    </span>
                  </div>

                  {/* Using our Formatter Component */}
                  <div className="mt-4 text-justify">
                    <TextFormatter content={job.desc} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}