import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/kitchen-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import bedroomImage from "@/assets/bedroom-interior.jpg";

const Services = () => {
  const services = [
    {
      title: "Full Home Interiors",
      description: "Complete home transformation from concept to completion. We design every room to create a cohesive, beautiful living environment that reflects your lifestyle.",
      image: kitchenImage,
      features: ["Space Planning", "Custom Furniture", "Lighting Design", "Color Consultation"]
    },
    {
      title: "Office Interiors",
      description: "Professional workspace design that enhances productivity and reflects your brand identity. Creating inspiring environments for modern businesses.",
      image: officeImage,
      features: ["Workspace Design", "Brand Integration", "Ergonomic Solutions", "Technology Integration"]
    },
    {
      title: "Living Room Makeovers",
      description: "Transform your living spaces into stunning entertainment areas that balance comfort with sophisticated style and functionality.",
      image: bedroomImage,
      features: ["Furniture Selection", "Layout Optimization", "Décor Styling", "Entertainment Centers"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer next-generation interior design services 
              tailored to create spaces that inspire and delight beyond imagination.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group animate-slide-up glow-border">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-body text-sm text-muted-foreground flex items-center">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-4 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    className="w-full font-body"
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up">
            <Card className="glass-card hover:scale-105 transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <h4 className="font-display text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">Renovation Projects</h4>
                <p className="font-body text-sm text-muted-foreground">Complete renovation and modernization of existing spaces</p>
              </CardContent>
            </Card>
            <Card className="glass-card hover:scale-105 transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <h4 className="font-display text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">Custom Furniture</h4>
                <p className="font-body text-sm text-muted-foreground">Bespoke furniture design and manufacturing</p>
              </CardContent>
            </Card>
            <Card className="glass-card hover:scale-105 transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <h4 className="font-display text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">Lighting Design</h4>
                <p className="font-body text-sm text-muted-foreground">Architectural and decorative lighting solutions</p>
              </CardContent>
            </Card>
            <Card className="glass-card hover:scale-105 transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <h4 className="font-display text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">Project Management</h4>
                <p className="font-body text-sm text-muted-foreground">End-to-end project coordination and execution</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;