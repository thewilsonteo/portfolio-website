// Experience.jsx/
import { Briefcase } from 'lucide-react';
// import { Formatter } from '../components/Formatter.jsx';

const skillCategories = [
  { title: "Frontend", 
    skills: [
      {name: "Angular", icon: <img src={"src/assets/angular-icon.svg"} className="w-8 h-8" /> },
      {name: "React",   icon: <img src={"src/assets/react.svg"} className="w-8 h-8" /> },
      {name: "Python",  icon: <img src={"src/assets/python.svg"} className="w-8 h-8" /> },
      {name: "HTML5",   icon: <img src={"src/assets/html-5.svg"} className="w-8 h-8" /> },
      {name: "CSS",     icon: <img src={"src/assets/css-3.svg"} className="w-8 h-8" /> },
      {name: "JavaScript",  icon: <img src={"src/assets/javascript.svg"} className="w-8 h-8" /> },
      {name: "TypeScript",  icon: <img src={"src/assets/typescript-icon.svg"} className="w-8 h-8" /> },
      {name: "Bootstrap",   icon: <img src={"src/assets/bootstrap.svg"} className="w-8 h-8" /> },
      {name: "Ionic",   icon: <img src={"src/assets/ionic-icon.svg"} className="w-8 h-8" /> },
      {name: "Tailwind",    icon: <img src={"src/assets/tailwindcss-icon.svg"} className="w-8 h-8" /> },
    ]
  },
  { title: "Backend", 
    skills: [
      {name: "Node.js", icon: <img src={"src/assets/angular-icon.svg"} className="w-8 h-8" /> },
      {name: "PHP",     icon: <img src={"src/assets/php-alt.svg"} className="w-8 h-8" /> },
      {name: "MySQL",   icon: <img src={"src/assets/nodejs-icon.svg"} className="w-8 h-8" /> },
      {name: "Python",  icon: <img src={"src/assets/python.svg"} className="w-8 h-8" /> },
      {name: "NGINX",   icon: <img src={"src/assets/nginx.svg"} className="w-8 h-8" /> },
    ],
  },
  { title: "Software", 
    skills: [
      {name: "VS Code", icon: <img src={"src/assets/visual-studio-code.svg"} className="w-8 h-8" /> },
      {name: "Git",     icon: <img src={"src/assets/git-icon.svg"} className="w-8 h-8" /> },
      {name: "GitHub",  icon: <img src={"src/assets/github-icon.svg"} className="w-8 h-8" /> },
      {name: "Adobe Photoshop", icon: <img src={"src/assets/adobe-photoshop.svg"} className="w-8 h-8" /> },
      {name: "Canva",   icon: <img src={"src/assets/Canva-icon.png"} className="w-8 h-8" /> },
      {name: "Adobe XD",        icon: <img src={"src/assets/adobe-xd.svg"} className="w-8 h-8" /> },
      {name: "Figma",   icon: <img src={"src/assets/figma.svg"} className="w-8 h-8" /> },
      {name: "Sony Vegas",      icon: <img src={"src/assets/sony-vegas-logo-icon.svg"} className="w-8 h-8" /> },
      {name: "DaVinci Resolve", icon: <img src={"src/assets/DaVinci_Resolve_17_logo.svg"} className="w-8 h-8" /> },
    ],
  },
  { title: "Languages", 
    skills: [
      {name: "English"},
      {name: "Mandarin Chinese"},
      {name: "Japanese (JLPT N2 Certified)"}
    ]
   }
];

const timeline = [
  {
    role: "Full Stack Developer",
    company: "Ceesolution Pte. Ltd.",
    period: "Feb 2023 - Sep 2024 · 1 yr 8 mos",
    desc: "Built with **React 19** and **Tailwind CSS v4** for maximum speed."
  },
  {
    role: "Full Stack Engineer",
    company: "CloudScale Inc.",
    period: "2021 - 2023",
    desc: "Developed and maintained scalable APIs and responsive user interfaces for a high-traffic B2B platform."
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
                    <div className="mb-4 p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      {/* Icon sits directly above title */}
                      {skill.icon}
                    </div>
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline remains the same as previous step below this section... */}
        2. Professional Timeline
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <Briefcase className="text-blue-600" /> Career Path
          </h3>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {timeline.map((job, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Briefcase size={16} />
                </div>
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-slate-900">{job.role}</div>
                    <time className="text-xs font-semibold text-blue-600 uppercase">{job.period}</time>
                  </div>
                  <div className="text-sm font-medium text-slate-500 mb-2">{job.company}</div>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    {job.desc}{/* <Formatter content={job.desc} /> */}
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