import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 h-16">
      {/* 1. The "Glass" Layer - Only for the horizontal bar */}
      <div className={`absolute inset-0 z-10 glass border-b border-gray-100 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`} />

      {/* 2. The Content Layer */}
      <div className="relative max-w-7xl mx-auto px-6 h-full flex justify-between items-center z-30">
        <div className="text-xl font-bold font-montserrat text-slate-900">Wilson Teo</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
          {/* <a href="/resume.pdf" download className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold">
            Resume
          </a> */}
        </div>
        
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 3. The Mobile Menu - Now a direct child of the nav, but with its own solid BG */}
      <div className={`
        fixed inset-0 bg-white z-20 flex flex-col items-center justify-center
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <div className="flex flex-col items-center gap-12">
          {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-3xl font-bold text-slate-900 font-montserrat"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}