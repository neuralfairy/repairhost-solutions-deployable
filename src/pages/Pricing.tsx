import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "setup + $199/month",
      description: "Perfect for small businesses getting started with CRM",
      popular: false,
      features: [
        "Basic CRM setup and configuration",
        "Up to 5 user accounts",
        "Standard data migration (up to 1,000 records)",
        "Email support",
        "2 hours of training",
        "30-day implementation timeline",
        "Basic reporting dashboard",
        "Mobile app setup"
      ],
      cta: "Start with Starter",
      href: "https://salescentri.com/pricing/plans-overview"
    },
    {
      name: "Professional",
      price: "$7,500",
      period: "setup + $399/month",
      description: "Ideal for growing businesses with advanced needs",
      popular: true,
      features: [
        "Complete CRM implementation",
        "Up to 25 user accounts",
        "Advanced data migration (up to 10,000 records)",
        "Priority phone & email support",
        "8 hours of comprehensive training",
        "45-day implementation timeline",
        "Custom workflows and automation",
        "Advanced reporting and analytics",
        "Integration with 3 business tools",
        "Quarterly optimization reviews"
      ],
      cta: "Choose Professional",
      href: "https://salescentri.com/pricing/plans-overview"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact for pricing",
      description: "Tailored solutions for large organizations",
      popular: false,
      features: [
        "Enterprise-grade CRM implementation",
        "Unlimited user accounts",
        "Unlimited data migration",
        "Dedicated account manager",
        "Unlimited training and support",
        "Custom implementation timeline",
        "Advanced automation and workflows",
        "Custom integrations",
        "White-glove onboarding",
        "24/7 priority support",
        "SLA guarantees",
        "Custom security configurations"
      ],
      cta: "Contact Sales",
      href: "https://salescentri.com/pricing/enterprise-custom"
    }
  ];

  const addOns = [
    {
      name: "Additional Training",
      price: "$150/hour",
      description: "Extra training sessions for your team"
    },
    {
      name: "Data Migration",
      price: "$0.10/record",
      description: "Additional data migration services"
    },
    {
      name: "Custom Integration",
      price: "$1,200/integration",
      description: "Connect additional business tools"
    },
    {
      name: "Priority Support",
      price: "$299/month",
      description: "24/7 priority support with guaranteed response times"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transparent CRM Implementation Pricing
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/80">
              Choose the perfect plan for your business. All plans include our proven implementation methodology and ongoing support.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                  Get Custom Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <h2 className="text-base font-semibold leading-7 text-primary">Pricing Plans</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Choose your CRM implementation plan
            </p>
          </div>
          
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`shadow-card-custom hover:shadow-enterprise transition-all duration-300 animate-fade-in-up group hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : 'hover:ring-primary/50'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full group-hover:scale-105 transition-all duration-200 ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:opacity-90 shadow-button-custom shadow-lg hover:shadow-enterprise' 
                        : 'hover:shadow-lg'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href={plan.href} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="py-24 bg-gradient-silver">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Optional Add-ons
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Enhance your CRM implementation with these additional services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={addon.name} className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Investment vs. Returns
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See how our CRM implementation pays for itself
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card-custom text-center">
              <CardHeader>
                <CardTitle className="text-xl">Average Investment</CardTitle>
                <div className="text-3xl font-bold text-primary">$15,000</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">First year total cost including setup and subscription</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom text-center">
              <CardHeader>
                <CardTitle className="text-xl">Revenue Increase</CardTitle>
                <div className="text-3xl font-bold text-green-600">$127,500</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Average annual revenue increase from improved sales processes</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom text-center">
              <CardHeader>
                <CardTitle className="text-xl">ROI</CardTitle>
                <div className="text-3xl font-bold text-primary">285%</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Return on investment in the first year</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gradient-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <Card className="shadow-card-custom">
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the setup fee?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">The setup fee covers complete CRM configuration, data migration, user setup, initial training, and go-live support.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card-custom">
                <CardHeader>
                  <CardTitle className="text-lg">How long does implementation take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Implementation timelines vary by plan: Starter (30 days), Professional (45 days), Enterprise (custom timeline based on requirements).</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card-custom">
                <CardHeader>
                  <CardTitle className="text-lg">Can I upgrade my plan later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Yes, you can upgrade your plan at any time. We'll help migrate your additional requirements seamlessly.</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card-custom">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our implementation, we'll refund your setup fee.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Choose your plan and start transforming your sales process today. No hidden fees, no surprises.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/pricing/free-trial" target="_blank" rel="noopener noreferrer">
                  <Zap className="mr-2 h-4 w-4" />
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;