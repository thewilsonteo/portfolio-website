// Experience.jsx
const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL", "Docker"] },
  { category: "Software", items: ["Git", "Agile", "CI/CD", "System Design"] }
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
                {skill.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}