// Projects.jsx
const projects = [
  { title: "FinTech App", type: "Mobile", desc: "A React Native investment tracker." },
  { title: "E-shop CMS", type: "Web", desc: "Full-stack dashboard with Next.js." }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj) => (
            <div key={proj.title} className="bg-white overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 bg-gray-200"></div> {/* Placeholder for Image */}
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{proj.type}</span>
                <h3 className="text-2xl font-bold mt-2">{proj.title}</h3>
                <p className="text-gray-600 mt-2">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}