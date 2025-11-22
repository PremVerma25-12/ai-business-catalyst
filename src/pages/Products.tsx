import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Database, FileText, Users, BarChart3, CheckCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Bot,
      name: "AI Chatbot Tool",
      tagline: "Intelligent Customer Conversations",
      overview: "Deploy production-ready chatbots in minutes with our no-code platform. Train on your data, customize responses, and provide 24/7 support.",
      features: [
        "Drag-and-drop chatbot builder",
        "Multi-channel deployment (web, WhatsApp, SMS)",
        "Auto-training on your documents",
        "Analytics dashboard",
        "Human handoff capability",
        "Multi-language support",
      ],
      pricing: "Starting at $99/month",
    },
    {
      icon: Database,
      name: "AI CRM System",
      tagline: "Smart Customer Relationship Management",
      overview: "CRM powered by AI that predicts customer behavior, automates follow-ups, and helps close more deals faster.",
      features: [
        "Predictive lead scoring",
        "Automated email sequences",
        "Sales pipeline optimization",
        "Customer sentiment tracking",
        "Integration with popular tools",
        "Mobile app included",
      ],
      pricing: "Starting at $149/month",
    },
    {
      icon: FileText,
      name: "AI Document Automation Tool",
      tagline: "Intelligent Document Processing",
      overview: "Extract, classify, and process documents automatically. From invoices to contracts, let AI handle your paperwork.",
      features: [
        "OCR & text extraction",
        "Smart document classification",
        "Data validation & verification",
        "Custom workflow automation",
        "Cloud storage integration",
        "Compliance & security built-in",
      ],
      pricing: "Starting at $199/month",
    },
    {
      icon: Users,
      name: "AI HR Screening Tool",
      tagline: "Smarter Hiring Decisions",
      overview: "Screen resumes, schedule interviews, and find the best candidates faster with AI-powered recruitment automation.",
      features: [
        "Resume parsing & ranking",
        "Skills matching algorithm",
        "Automated interview scheduling",
        "Candidate communication",
        "Bias-free screening",
        "ATS integration",
      ],
      pricing: "Starting at $249/month",
    },
    {
      icon: BarChart3,
      name: "AI Data Dashboard",
      tagline: "Real-Time Business Intelligence",
      overview: "Visualize your data with intelligent dashboards that automatically surface insights and anomalies.",
      features: [
        "Automated insight generation",
        "Anomaly detection",
        "Predictive forecasting",
        "Custom report builder",
        "Real-time data sync",
        "Export & sharing options",
      ],
      pricing: "Starting at $179/month",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">AI-Powered Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready-to-use AI tools that integrate seamlessly with your existing workflows
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Product Info */}
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <product.icon className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-primary font-semibold mb-4">{product.tagline}</p>
                    <p className="text-muted-foreground mb-6">{product.overview}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold">{product.pricing}</span>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild>
                        <Link to="/contact">Request Demo</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/pricing">View Plans</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Features & Screenshot Placeholder */}
                  <div className="bg-secondary/30 p-8">
                    <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Screenshot Placeholder */}
                    <div className="bg-gradient-dark rounded-lg h-48 flex items-center justify-center text-white/50">
                      <span>Product Screenshot</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Try Any Product Risk-Free</h2>
          <p className="text-xl mb-8 opacity-90">
            14-day free trial • No credit card required • Cancel anytime
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-foreground hover:bg-gray-100">
            <Link to="/contact">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
