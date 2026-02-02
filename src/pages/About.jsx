// import profileImg from 'ben-kolde-Ajcipx1VDXI-unsplash.jpg'; // Import the image

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          {/* Placeholder for a professional headshot */}
          <div className="w-64 h-64 bg-gray-200 rounded-2xl mx-auto shadow-inner">
            <img 
              src="./ben-kolde-Ajcipx1VDXI-unsplash.jpg"
              alt="Professional Headshot" 
              className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-gray-100 transition-transform hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-justify">
            As a passionate software engineer, I specialize in building clean, scalable applications, with a focus on modern web technologies that prioritize user experience. My background includes a comprehensive journey through web design, web programming, and mobile app programming, which has equipped me with a holistic perspective throughout my career.
          </p>
          {/* <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you can find me eating, sleeping or contributing to 
            open-source projects.
          </p> */}
        </div>
      </div>
    </section>
  );
}