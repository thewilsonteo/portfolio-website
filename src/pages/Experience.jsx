// Experience.jsx/
const skills = [
  { category: "Frontend", 
    items: [
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
    ]
  },
  { category: "Backend", 
    items: [
      {name: "Node.js", icon: "angular-icon.svg"},
      {name: "PHP",     icon: "php-alt.svg"},
      {name: "MySQL",   icon: "nodejs-icon.svg"},
      {name: "Python",  icon: "python.svg"},
      {name: "NGINX",   icon: "nginx.svg"},
    ],
  },
  { category: "Software", items: 
    [
      {name: "VS Code", icon: "visual-sudio-code.svg"},
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
  { category: "Languages", items: ["English", "Mandarin Chinese", "Japanese (JLPT N2 Certified)"] }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4 border-b pb-2">{skill.category}</h3>
              <ul className="list-disc list-inside text-gray-600">
                {skill.items.map(item => <li key={item.name}>{item.name}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}