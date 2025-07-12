import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Luxury Interior Design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-gray/90 via-warm-gray/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight my-[20px]">
            Transform Your
            <span className="block text-luxury-gold">Living Spaces</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-cream/90 mb-8 leading-relaxed">
            Premium interior design services in Kolkata. We create sophisticated, 
            functional spaces that reflect your unique style and elevate your lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} variant="secondary" size="lg" className="font-body text-lg px-8 py-6 bg-luxury-gradient hover:shadow-luxury transition-all duration-300 text-neutral-950">
              Start Your Project
            </Button>
            <Button onClick={scrollToPortfolio} variant="outline" size="lg" className="font-body text-lg px-8 py-6 border-cream hover:text-warm-gray transition-all duration-300 bg-neutral-950 hover:bg-neutral-800 rounded-lg text-yellow-400">
              View Portfolio
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-cream/20">
            <div className="text-center md:text-left">
              <div className="font-display text-3xl font-bold text-luxury-gold mb-2">15+</div>
              <div className="font-body text-cream/80">Years Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-display text-3xl font-bold text-luxury-gold mb-2">200+</div>
              <div className="font-body text-cream/80">Projects Completed</div>
            </div>
            <div className="text-center md:text-left">
              <div className="font-display text-3xl font-bold text-luxury-gold mb-2">100%</div>
              <div className="font-body text-cream/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;