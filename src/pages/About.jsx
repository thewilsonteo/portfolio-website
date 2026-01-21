export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          {/* Placeholder for a professional headshot */}
          <div className="w-64 h-64 bg-gray-200 rounded-2xl mx-auto shadow-inner"></div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I am a software engineer with a passion for building clean, scalable applications. 
            My journey began with web designing, followed by web programming, and app programming,
            and today I specialize in modern web technologies that prioritize user experience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you can find me [Your Hobbies] or contributing to 
            open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
}