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
        © {new Date().getFullYear()} Wilson Teo. Built with React & Tailwind.
        Photo by <a href="https://unsplash.com/@benkolde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Kolde</a> & <a href="https://unsplash.com/@azka_ryhns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Azka Rayhansyah</a> on <a href="https://unsplash.com/photos/person-holding-space-gray-iphone-6-displaying-i-design-and-develop-experiences-that-make-peoples-lives-simple-text-Ajcipx1VDXI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </footer>
    </div>
  );
}

export default App;