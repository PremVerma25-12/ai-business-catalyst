import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "Free Forever",
      description: "Perfect for testing and small projects",
      features: [
        { text: "1 AI chatbot", included: true },
        { text: "1,000 messages/month", included: true },
        { text: "Email support", included: true },
        { text: "Basic analytics", included: true },
        { text: "Custom branding", included: false },
        { text: "API access", included: false },
        { text: "Advanced integrations", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Get Started Free",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "For growing businesses that need more power",
      features: [
        { text: "5 AI chatbots", included: true },
        { text: "50,000 messages/month", included: true },
        { text: "Priority email & chat support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true },
        { text: "Advanced integrations", included: true },
        { text: "24/7 priority support", included: false },
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      description: "For large organizations with custom needs",
      features: [
        { text: "Unlimited AI chatbots", included: true },
        { text: "Unlimited messages", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Custom analytics", included: true },
        { text: "White-label solutions", included: true },
        { text: "Full API access", included: true },
        { text: "Custom integrations", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      items: [
        { feature: "AI Chatbots", starter: "1", professional: "5", enterprise: "Unlimited" },
        { feature: "Messages per month", starter: "1,000", professional: "50,000", enterprise: "Unlimited" },
        { feature: "Users", starter: "1", professional: "5", enterprise: "Unlimited" },
        { feature: "Data retention", starter: "30 days", professional: "1 year", enterprise: "Unlimited" },
      ],
    },
    {
      category: "Support",
      items: [
        { feature: "Email support", starter: true, professional: true, enterprise: true },
        { feature: "Chat support", starter: false, professional: true, enterprise: true },
        { feature: "Phone support", starter: false, professional: false, enterprise: true },
        { feature: "Dedicated manager", starter: false, professional: false, enterprise: true },
      ],
    },
    {
      category: "Customization",
      items: [
        { feature: "Custom branding", starter: false, professional: true, enterprise: true },
        { feature: "White-label", starter: false, professional: false, enterprise: true },
        { feature: "Custom domains", starter: false, professional: true, enterprise: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.highlighted
                    ? "border-primary shadow-elegant scale-105"
                    : ""
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="text-primary mr-2 mt-0.5 flex-shrink-0" size={18} />
                        ) : (
                          <X className="text-muted-foreground mr-2 mt-0.5 flex-shrink-0" size={18} />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link to="/contact">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Detailed Comparison</h2>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-card rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-primary text-white">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4">Starter</th>
                  <th className="text-center p-4">Professional</th>
                  <th className="text-center p-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIndex) => (
                  <>
                    <tr key={`cat-${catIndex}`} className="bg-secondary">
                      <td colSpan={4} className="p-3 font-semibold">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={`item-${catIndex}-${itemIndex}`} className="border-b border-border">
                        <td className="p-4">{item.feature}</td>
                        <td className="p-4 text-center">
                          {typeof item.starter === "boolean" ? (
                            item.starter ? (
                              <Check className="text-primary mx-auto" size={20} />
                            ) : (
                              <X className="text-muted-foreground mx-auto" size={20} />
                            )
                          ) : (
                            item.starter
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof item.professional === "boolean" ? (
                            item.professional ? (
                              <Check className="text-primary mx-auto" size={20} />
                            ) : (
                              <X className="text-muted-foreground mx-auto" size={20} />
                            )
                          ) : (
                            item.professional
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof item.enterprise === "boolean" ? (
                            item.enterprise ? (
                              <Check className="text-primary mx-auto" size={20} />
                            ) : (
                              <X className="text-muted-foreground mx-auto" size={20} />
                            )
                          ) : (
                            item.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team is here to help you choose the right plan
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Talk to Sales</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
