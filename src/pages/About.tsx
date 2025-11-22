import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly explore cutting-edge AI technologies to deliver the best solutions.",
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize data security and maintain the highest ethical standards.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project and interaction.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "AI Experts" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About AwsQuality</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make AI accessible and practical for businesses of all sizes, 
            helping them unlock unprecedented growth and efficiency.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower businesses worldwide with intelligent AI solutions that drive efficiency, 
                  innovation, and sustainable growth. We believe every company deserves access to 
                  enterprise-grade AI technology, regardless of size or industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Eye className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To become the world's most trusted AI partner, recognized for transforming businesses 
                  through innovative, ethical, and impactful artificial intelligence solutions that create 
                  lasting value for our clients and their customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Our AI Solutions Matter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              In today's fast-paced digital economy, businesses face mounting pressure to do more with less. 
              Manual processes drain resources, human error costs millions, and competitors who embrace AI 
              are pulling ahead.
            </p>
            <p className="text-lg text-muted-foreground">
              We bridge the gap between complex AI technology and practical business needs. Our solutions 
              don't just automate tasks—they transform operations, unlock insights, and create competitive 
              advantages that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Meet Our Leadership</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our team combines decades of experience in AI, software development, and business transformation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Dr. Prem Verma", role: "Founder & CEO", description: "15+ years in AI & Machine Learning" },
              { name: "Tanisk Gowshami", role: "CTO", description: "Former AI Lead at Fortune 500" },
              { name: "Shwet Chouray", role: "Head of Solutions", description: "Expert in Business Automation" },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-8 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
