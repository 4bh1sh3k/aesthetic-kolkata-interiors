import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Palette } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Palette,
      title: "Creative Excellence",
      description: "Every project is a unique canvas where functionality meets artistry to create extraordinary spaces."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We listen, understand, and translate your vision into reality with personalized attention to detail."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Using only the finest materials and working with skilled craftsmen to ensure lasting beauty."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to delivering your dream spaces on time without compromising on quality or design."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              About Aesthetic Realcon
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Based in the cultural heart of Kolkata, we are passionate interior designers 
              dedicated to creating spaces that inspire, comfort, and reflect your personality.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <h3 className="font-display text-3xl font-semibold text-primary mb-6">
                Our Story
              </h3>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience in transforming spaces across Kolkata, 
                Aesthetic Realcon has become synonymous with luxury, elegance, and functionality. 
                Our journey began with a simple belief: every space has the potential to become 
                extraordinary.
              </p>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                From intimate residential projects to expansive commercial spaces, we bring 
                a perfect blend of traditional Bengali aesthetics and contemporary design 
                principles to create interiors that stand the test of time.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Today, we're proud to have completed over 200 projects, each one a testament 
                to our commitment to excellence and our clients' trust in our vision.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              <Card className="shadow-elegant hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-display font-bold text-accent mb-2">15+</div>
                  <div className="font-body text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-display font-bold text-accent mb-2">200+</div>
                  <div className="font-body text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-display font-bold text-accent mb-2">50+</div>
                  <div className="font-body text-sm text-muted-foreground">Team Members</div>
                </CardContent>
              </Card>
              <Card className="shadow-elegant hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-display font-bold text-accent mb-2">100%</div>
                  <div className="font-body text-sm text-muted-foreground">Satisfaction Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="animate-fade-in">
            <h3 className="font-display text-3xl font-semibold text-primary text-center mb-12">
              Our Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-luxury transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent group-hover:text-cream transition-all duration-300">
                      <value.icon className="w-8 h-8 text-accent group-hover:text-cream" />
                    </div>
                    <h4 className="font-display text-xl font-semibold text-primary mb-3">
                      {value.title}
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;