import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Testimonials = () => {
  const { toast } = useToast();
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    message: "",
    rating: ""
  });

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!testimonialForm.name || !testimonialForm.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert({
          name: testimonialForm.name,
          message: testimonialForm.message,
          rating: testimonialForm.rating
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Thank you for your feedback!",
        description: "Your testimonial has been submitted successfully.",
      });

      setTestimonialForm({
        name: "",
        message: "",
        rating: ""
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleTestimonialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTestimonialForm({
      ...testimonialForm,
      [e.target.name]: e.target.value
    });
  };

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Salt Lake, Kolkata",
      project: "Complete Home Interior",
      rating: 5,
      content: "Aesthetic Realcon transformed our home beyond our expectations. Their attention to detail and understanding of our needs was exceptional. The team delivered on time and within budget."
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Park Street, Kolkata",
      project: "Office Interior Design",
      rating: 5,
      content: "Professional, creative, and reliable. The office design has significantly improved our work environment and client impressions. Highly recommended for commercial projects."
    },
    {
      id: 3,
      name: "Anita Das",
      location: "Ballygunge, Kolkata",
      project: "Kitchen Renovation",
      rating: 5,
      content: "The kitchen renovation exceeded all our expectations. The team was professional, the design was stunning, and the execution was flawless. Our dream kitchen is now a reality."
    },
    {
      id: 4,
      name: "Suresh Gupta",
      location: "New Town, Kolkata",
      project: "Living Room Makeover",
      rating: 5,
      content: "From concept to completion, the entire process was smooth and enjoyable. The design team understood our vision perfectly and delivered a beautiful living space we love."
    },
    {
      id: 5,
      name: "Meera Singh",
      location: "Alipore, Kolkata",
      project: "Master Bedroom Design",
      rating: 5,
      content: "The bedroom design is absolutely gorgeous! The team created a perfect blend of comfort and luxury. Their professionalism and creativity are truly commendable."
    },
    {
      id: 6,
      name: "Vikram Agarwal",
      location: "Sector V, Kolkata",
      project: "Complete Office Fit-out",
      rating: 5,
      content: "Outstanding work on our office interiors. The team delivered a modern, functional workspace that has enhanced productivity and created a positive work environment."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-luxury-gold fill-luxury-gold' : 'text-soft-gray'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Client Testimonials
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our clients say about 
              their experience working with Aesthetic Realcon.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-elegant hover:shadow-luxury transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-soft-gray pt-4">
                    <h4 className="font-display text-lg font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="font-body text-sm text-accent mb-1">
                      {testimonial.location}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {testimonial.project}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial Submission Form */}
          <div className="mt-16 pt-16 border-t border-soft-gray">
            <Card className="shadow-elegant max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold text-primary mb-6 text-center">
                  Share Your Experience
                </h3>
                <form onSubmit={handleTestimonialSubmit} className="space-y-6">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={testimonialForm.name}
                      onChange={handleTestimonialChange}
                      placeholder="Enter your name"
                      required
                      className="font-body"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Rating (Optional)
                    </label>
                    <select
                      name="rating"
                      value={testimonialForm.rating}
                      onChange={handleTestimonialChange}
                      className="w-full p-3 border border-input rounded-md font-body bg-background"
                    >
                      <option value="">Select rating</option>
                      <option value="5">5 - Excellent</option>
                      <option value="4">4 - Very Good</option>
                      <option value="3">3 - Good</option>
                      <option value="2">2 - Fair</option>
                      <option value="1">1 - Poor</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Your Message *
                    </label>
                    <Textarea
                      name="message"
                      value={testimonialForm.message}
                      onChange={handleTestimonialChange}
                      placeholder="Share your experience with our services..."
                      rows={5}
                      required
                      className="font-body"
                    />
                  </div>

                  <div className="text-center">
                    <Button type="submit" size="lg" className="font-body">
                      Submit Testimonial
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-soft-gray animate-fade-in">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-accent mb-2">200+</div>
              <div className="font-body text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-accent mb-2">15+</div>
              <div className="font-body text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-accent mb-2">100%</div>
              <div className="font-body text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-accent mb-2">50+</div>
              <div className="font-body text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;