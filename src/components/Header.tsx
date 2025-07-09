import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Menu, X, Phone, Home, User, Briefcase, FileText } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', url: '#home', icon: Home, onClick: () => scrollToSection('home') },
    { name: 'About', url: '#about', icon: User, onClick: () => scrollToSection('about') },
    { name: 'Services', url: '#services', icon: Briefcase, onClick: () => scrollToSection('services') },
    { name: 'Portfolio', url: '#portfolio', icon: FileText, onClick: () => scrollToSection('portfolio') },
  ];
  return <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-display font-bold text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-glow">
            Aesthetic Realcon
          </div>

          {/* Desktop Navigation - Now using TubeLight NavBar */}
          <nav className="hidden md:block">
            {/* NavBar will be rendered separately at top of page */}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" className="font-body mx-[15px]">
              <Phone className="w-4 h-4 mr-2" />
              +91 98765 43210
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-soft-gray">
            <nav className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('home')} className="font-body text-left text-foreground hover:text-accent transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="font-body text-left text-foreground hover:text-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="font-body text-left text-foreground hover:text-accent transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="font-body text-left text-foreground hover:text-accent transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="font-body text-left text-foreground hover:text-accent transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="font-body text-left text-foreground hover:text-accent transition-colors">
                Contact
              </button>
              <Button variant="secondary" className="font-body self-start">
                <Phone className="w-4 h-4 mr-2" />
                +91 98765 43210
              </Button>
            </nav>
          </div>}
      </div>

      {/* TubeLight NavBar */}
      <NavBar items={navItems} className="hidden md:block" />
    </header>;
};
export default Header;