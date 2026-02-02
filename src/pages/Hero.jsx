export default function Hero() {
  return (
    /* The key is 'clip' and 'relative' on this parent section */
    <section className="relative h-screen overflow-hidden clip">
      
      {/* 1. Fixed Background & Overlay Wrapper */}
      {/* This div acts as the viewport for the fixed elements */}
      <div className="absolute inset-0">
        <div className="fixed inset-0 z-0">
          <img 
            src="./azka-rayhansyah-DByY8MbE9OE-unsplash.jpg" 
            alt="Background" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* The overlay is now inside the same clipping context */}
        <div className="fixed inset-0 z-10 bg-slate-900/80 backdrop-blur-sm"></div>
      </div>

      {/* 2. The Content (Standard relative positioning) */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-500">Wilson</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
          Full Stack Developer crafting high-performance, beautiful web experiences
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition">
            View Work
          </a>
          <a href="#contact" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-bold transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}