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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 animate-fade-up">
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent animate-glow">
            Transform Your Space Into 
          </span>
          <span className="block mt-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Aesthetic Reality
          </span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          Next-generation interior design solutions in Kolkata. From concept to completion, 
          we create spaces that reflect your personality and elevate your lifestyle to new heights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            variant="premium"
            size="lg" 
            className="font-body text-lg"
            onClick={scrollToContact}
          >
            Start Your Project
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-body text-lg glow-border"
            onClick={() => scrollToSection('portfolio')}
          >
            View Portfolio
          </Button>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">150+</div>
            <div className="font-body text-muted-foreground">Projects Completed</div>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">8+</div>
            <div className="font-body text-muted-foreground">Years Experience</div>
          </div>
          <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">100%</div>
            <div className="font-body text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-accent rounded-full flex justify-center glow-border">
          <div className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;