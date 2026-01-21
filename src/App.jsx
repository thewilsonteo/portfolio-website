import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="relative font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;