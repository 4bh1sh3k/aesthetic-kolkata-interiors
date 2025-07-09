import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";
import kitchenImage from "@/assets/kitchen-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import bedroomImage from "@/assets/bedroom-interior.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Luxury Penthouse",
      category: "residential",
      location: "Salt Lake, Kolkata",
      image: heroImage,
      description: "Modern luxury living with panoramic city views"
    },
    {
      id: 2,
      title: "Contemporary Kitchen",
      category: "kitchen",
      location: "Park Street, Kolkata",
      image: kitchenImage,
      description: "Elegant kitchen design with premium finishes"
    },
    {
      id: 3,
      title: "Corporate Headquarters",
      category: "commercial",
      location: "Sector V, Kolkata",
      image: officeImage,
      description: "Professional workspace with modern aesthetics"
    },
    {
      id: 4,
      title: "Master Bedroom Suite",
      category: "residential",
      location: "Ballygunge, Kolkata",
      image: bedroomImage,
      description: "Serene bedroom design with luxury touches"
    },
    {
      id: 5,
      title: "Executive Office",
      category: "commercial",
      location: "New Town, Kolkata",
      image: officeImage,
      description: "Sophisticated office space for senior executives"
    },
    {
      id: 6,
      title: "Family Kitchen",
      category: "kitchen",
      location: "Alipore, Kolkata",
      image: kitchenImage,
      description: "Functional family kitchen with elegant design"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "kitchen", label: "Kitchens" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our collection of premium projects that showcase our commitment 
              to excellence and revolutionary design thinking.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className="font-body"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="glass-card hover:scale-105 transition-all duration-300 group overflow-hidden glow-border">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button variant="premium" size="sm" className="w-full font-body">
                      View Details
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-accent mb-3 flex items-center">
                    <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                    {project.location}
                  </p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animate-fade-up">
            <p className="font-body text-xl text-muted-foreground mb-8">
              Ready to see your vision come to life?
            </p>
            <Button variant="premium" size="lg" className="font-body px-12 text-lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;