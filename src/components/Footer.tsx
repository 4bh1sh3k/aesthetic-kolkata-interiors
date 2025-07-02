import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-gray text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl font-bold text-luxury-gold mb-4">
                Aesthetic Realcon
              </h3>
              <p className="font-body text-cream/80 mb-6 leading-relaxed">
                Premium interior design services in Kolkata. We create sophisticated, 
                functional spaces that reflect your unique style and elevate your lifestyle.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-luxury-gold" />
                  <span className="font-body text-cream/80">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-luxury-gold" />
                  <span className="font-body text-cream/80">info@aestheticrealcon.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-luxury-gold" />
                  <span className="font-body text-cream/80">123 Park Street, Kolkata 700016</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg font-semibold text-luxury-gold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="font-body text-cream/80 hover:text-luxury-gold transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="font-body text-cream/80 hover:text-luxury-gold transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="font-body text-cream/80 hover:text-luxury-gold transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')}
                    className="font-body text-cream/80 hover:text-luxury-gold transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="font-body text-cream/80 hover:text-luxury-gold transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-lg font-semibold text-luxury-gold mb-4">
                Our Services
              </h4>
              <ul className="space-y-2">
                <li className="font-body text-cream/80">Full Home Interiors</li>
                <li className="font-body text-cream/80">Office Interiors</li>
                <li className="font-body text-cream/80">Living Room Makeovers</li>
                <li className="font-body text-cream/80">Renovation Projects</li>
                <li className="font-body text-cream/80">Custom Furniture</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cream/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-cream/60 text-sm">
                © {currentYear} Aesthetic Realcon. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="font-body text-cream/60 hover:text-luxury-gold transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="font-body text-cream/60 hover:text-luxury-gold transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;