import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, BarChart3, Brain, Target, Shield, Users, CheckCircle, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Home = () => {
  const solutionsRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();
  const industriesRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const solutions = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "24/7 intelligent customer support that never sleeps",
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Streamline workflows and eliminate repetitive tasks",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable business insights",
    },
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Tailored AI solutions for your unique business needs",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Increased Efficiency",
      description: "Automate up to 80% of repetitive tasks",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and data protection",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team to ensure your success",
    },
  ];

  const industries = [
    "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Real Estate"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "AwsQuality transformed our customer service. Response times dropped by 60% and satisfaction scores soared.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      content: "The automation solutions saved us countless hours. ROI was visible within the first month.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, InnovateLab",
      content: "Best AI implementation partner we've worked with. Professional, knowledgeable, and results-driven.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-dark/95 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transform Your Business with <br />
            <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              Powerful AI Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
            We help companies automate workflows, save time, reduce costs, and grow faster using advanced AI technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">Get Free Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section ref={solutionsRef.ref} className="py-20 bg-gradient-subtle">
        <div className={cn(
          "container mx-auto px-4 transition-all duration-700",
          solutionsRef.isVisible ? "opacity-100 animate-slide-up" : "opacity-0"
        )}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Key AI Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cutting-edge AI technologies designed to solve real business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <solution.icon className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={benefitsRef.ref} className="py-20">
        <div className={cn(
          "container mx-auto px-4 transition-all duration-700",
          benefitsRef.isVisible ? "opacity-100 animate-slide-up" : "opacity-0"
        )}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose AwsQuality</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver measurable results backed by cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-glow transition-shadow">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section ref={industriesRef.ref} className="py-20 bg-secondary/30">
        <div className={cn(
          "container mx-auto px-4 transition-all duration-700",
          industriesRef.isVisible ? "opacity-100 animate-slide-left" : "opacity-0"
        )}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted by leading companies across multiple sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/30 rounded-xl px-6 py-3 hover:shadow-elegant transition-all hover:scale-105 hover:bg-primary/5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef.ref} className="py-20">
        <div className={cn(
          "container mx-auto px-4 transition-all duration-700",
          testimonialsRef.isVisible ? "opacity-100 animate-slide-up" : "opacity-0"
        )}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-elegant transition-all hover:-translate-y-1 duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section ref={ctaRef.ref} className="py-20 bg-gradient-primary text-white">
        <div className={cn(
          "container mx-auto px-4 text-center transition-all duration-700",
          ctaRef.isVisible ? "opacity-100 animate-slide-down" : "opacity-0"
        )}>
          <h2 className="text-4xl font-bold mb-4">Start Your AI Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free consultation and discover how AI can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
