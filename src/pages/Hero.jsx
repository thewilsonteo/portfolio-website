// Hero.jsx
export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">Hi, I'm Wilson</h1>
      <p className="text-xl text-gray-400 mb-8">Full Stack Developer specializing in high-performance applications.</p>
      <a href="#projects" className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition">View Work</a>
    </section>
  );
}