import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Workflow, BarChart3, Brain, Mail, TrendingUp, Zap, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Chatbots for Customer Support",
      description: "Deploy intelligent chatbots that provide 24/7 customer support with human-like interactions.",
      features: [
        "Natural language processing",
        "Multi-language support",
        "CRM integration",
        "Sentiment analysis",
      ],
      benefits: [
        "Reduce support costs by up to 70%",
        "Instant responses 24/7",
        "Handle unlimited simultaneous conversations",
      ],
      useCases: ["E-commerce stores", "SaaS platforms", "Healthcare providers"],
    },
    {
      icon: Workflow,
      title: "Business Automation (RPA)",
      description: "Automate repetitive tasks and workflows to free your team for strategic work.",
      features: [
        "Process mining & optimization",
        "Document processing",
        "Data entry automation",
        "Workflow orchestration",
      ],
      benefits: [
        "Save 40+ hours per employee monthly",
        "Eliminate human errors",
        "Scalable automation solutions",
      ],
      useCases: ["Finance departments", "HR operations", "Supply chain management"],
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics & Insights",
      description: "Transform raw data into actionable intelligence with advanced analytics.",
      features: [
        "Predictive modeling",
        "Real-time dashboards",
        "Pattern recognition",
        "Custom reporting",
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify growth opportunities",
        "Predict market trends",
      ],
      useCases: ["Marketing teams", "Sales departments", "Executive leadership"],
    },
    {
      icon: Brain,
      title: "Custom AI Model Development",
      description: "Build bespoke AI models tailored to your specific business requirements.",
      features: [
        "Computer vision models",
        "NLP & text analysis",
        "Recommendation systems",
        "Forecasting models",
      ],
      benefits: [
        "Unique competitive advantage",
        "Proprietary AI solutions",
        "Full IP ownership",
      ],
      useCases: ["Tech startups", "Research institutions", "Enterprise companies"],
    },
    {
      icon: Mail,
      title: "AI Marketing Tools",
      description: "Automate and optimize your marketing campaigns with intelligent tools.",
      features: [
        "Email campaign automation",
        "Content generation",
        "A/B testing optimization",
        "Customer segmentation",
      ],
      benefits: [
        "Increase conversion rates",
        "Personalize at scale",
        "Optimize campaign ROI",
      ],
      useCases: ["Digital agencies", "E-commerce brands", "B2B companies"],
    },
    {
      icon: TrendingUp,
      title: "Predictive Intelligence Tools",
      description: "Forecast trends and outcomes using advanced machine learning algorithms.",
      features: [
        "Demand forecasting",
        "Churn prediction",
        "Risk assessment",
        "Revenue forecasting",
      ],
      benefits: [
        "Reduce inventory costs",
        "Prevent customer churn",
        "Optimize resource allocation",
      ],
      useCases: ["Retail chains", "SaaS businesses", "Financial services"],
    },
    {
      icon: Zap,
      title: "Workflow Automation & Integrations",
      description: "Connect your tools and automate cross-platform workflows seamlessly.",
      features: [
        "API integrations",
        "Cloud automation",
        "Legacy system bridges",
        "Real-time syncing",
      ],
      benefits: [
        "Eliminate data silos",
        "Streamline operations",
        "Improve team productivity",
      ],
      useCases: ["Operations teams", "IT departments", "Multi-tool organizations"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">AI Services That Drive Results</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to automate, optimize, and transform your business operations.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Service Overview */}
                  <div className="md:col-span-1 bg-gradient-primary text-white p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="opacity-90 mb-6">{service.description}</p>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                      <Link to="/contact">Request Demo</Link>
                    </Button>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-2 p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-primary">Key Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-4 text-primary">Benefits</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary">Ideal Use Cases</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, i) => (
                          <span key={i} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which AI solutions are right for your business
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-foreground hover:bg-gray-100">
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
