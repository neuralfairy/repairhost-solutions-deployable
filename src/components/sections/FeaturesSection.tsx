import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Settings, 
  TrendingUp, 
  Users, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import featuresIcon from "@/assets/features-icon.jpg";

const FeaturesSection = () => {
  const features = [
    {
      name: "CRM Setup & Configuration",
      description: "Complete CRM implementation tailored to your business processes and requirements.",
      icon: Settings,
      benefits: ["Custom field configuration", "Workflow automation", "User permission setup"]
    },
    {
      name: "Sales Process Optimization",
      description: "Streamline your sales pipeline for maximum efficiency and conversion rates.",
      icon: TrendingUp,
      benefits: ["Pipeline optimization", "Lead scoring", "Sales forecasting"]
    },
    {
      name: "Team Training & Adoption",
      description: "Comprehensive training programs to ensure successful CRM adoption across your organization.",
      icon: Users,
      benefits: ["User training sessions", "Best practices guide", "Ongoing support"]
    },
    {
      name: "Data Integration & Migration",
      description: "Seamlessly integrate your existing data and systems with your new CRM platform.",
      icon: Database,
      benefits: ["Data migration", "System integration", "Quality assurance"]
    },
    {
      name: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance with industry standards.",
      icon: Shield,
      benefits: ["GDPR compliance", "Data encryption", "Access controls"]
    },
    {
      name: "Performance Analytics",
      description: "Advanced reporting and analytics to track ROI and optimize performance.",
      icon: Zap,
      benefits: ["Custom dashboards", "ROI tracking", "Performance metrics"]
    },
  ];

  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Complete CRM Solutions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need for successful CRM implementation
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive approach ensures your CRM implementation drives real business results. 
            From initial setup to ongoing optimization, we've got you covered.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={feature.name} className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-primary p-2">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl">{feature.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>

        <div className="mt-16 bg-gradient-card rounded-2xl p-8 text-center shadow-enterprise">
          <div className="flex justify-center mb-6">
            <img
              src={featuresIcon}
              alt="CRM Implementation Team"
              className="h-32 w-32 object-cover rounded-full shadow-card-custom"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to transform your sales process?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of businesses that have improved their sales performance with our CRM implementation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-button-custom" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                Interactive Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;