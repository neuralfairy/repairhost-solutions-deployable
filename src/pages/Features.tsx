import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  TrendingUp, 
  Users, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Play,
  Globe,
  Smartphone,
  BarChart
} from "lucide-react";
import featuresIcon from "@/assets/features-icon.jpg";

const Features = () => {
  const mainFeatures = [
    {
      title: "Complete CRM Setup",
      description: "End-to-end CRM implementation tailored to your business needs",
      icon: Settings,
      details: [
        "Custom field configuration and data structure design",
        "Workflow automation and business process mapping",
        "User roles and permission management",
        "Integration with existing tools and systems",
        "Mobile app configuration and setup"
      ]
    },
    {
      title: "Sales Process Optimization",
      description: "Streamline your sales pipeline for maximum efficiency",
      icon: TrendingUp,
      details: [
        "Lead scoring and qualification frameworks",
        "Sales pipeline design and optimization",
        "Automated follow-up sequences",
        "Performance tracking and KPI setup",
        "Revenue forecasting and reporting"
      ]
    },
    {
      title: "Team Training & Support",
      description: "Comprehensive training to ensure successful adoption",
      icon: Users,
      details: [
        "Role-based training programs",
        "Best practices documentation",
        "Change management support",
        "Ongoing technical support",
        "Regular check-ins and optimization"
      ]
    }
  ];

  const integrations = [
    { name: "Salesforce", category: "CRM Platform" },
    { name: "HubSpot", category: "Marketing & Sales" },
    { name: "Microsoft Dynamics", category: "Enterprise CRM" },
    { name: "Pipedrive", category: "Sales CRM" },
    { name: "Zoho CRM", category: "Business Suite" },
    { name: "Slack", category: "Communication" },
    { name: "Office 365", category: "Productivity" },
    { name: "Google Workspace", category: "Collaboration" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Mailchimp", category: "Email Marketing" },
    { name: "Zapier", category: "Automation" },
    { name: "API Integrations", category: "Custom Solutions" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Comprehensive CRM Implementation Features
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/80">
              Everything you need to successfully implement, optimize, and scale your CRM system for maximum business impact.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-4 w-4" />
                  Interactive Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Core Capabilities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need for CRM success
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {mainFeatures.map((feature, index) => (
              <Card key={feature.title} className="shadow-card-custom hover:shadow-enterprise transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-primary p-3">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="py-24 bg-gradient-silver">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explore Our Service Categories
            </h2>
          </div>
          
          <Tabs defaultValue="implementation" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
              <TabsTrigger value="optimization">Optimization</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="implementation" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-card-custom">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Data Migration & Setup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Legacy system data extraction</li>
                      <li>• Data cleaning and validation</li>
                      <li>• Custom field mapping</li>
                      <li>• Historical data preservation</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card-custom">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Security Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• User access controls</li>
                      <li>• Data encryption setup</li>
                      <li>• GDPR compliance configuration</li>
                      <li>• Backup and recovery systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="optimization" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-card-custom">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Performance Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Custom dashboard creation</li>
                      <li>• KPI tracking and monitoring</li>
                      <li>• Automated reporting setup</li>
                      <li>• ROI measurement tools</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card-custom">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Workflow Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sales process automation</li>
                      <li>• Lead nurturing sequences</li>
                      <li>• Task and reminder automation</li>
                      <li>• Email template setup</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="training" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-card-custom">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      User Training Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Role-specific training sessions</li>
                      <li>• Hands-on workshops</li>
                      <li>• Best practices documentation</li>
                      <li>• Video tutorial library</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card-custom">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Change Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Adoption strategy development</li>
                      <li>• User feedback collection</li>
                      <li>• Process improvement guidance</li>
                      <li>• Success metrics tracking</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="support" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-card-custom">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      24/7 Technical Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Priority support tickets</li>
                      <li>• Live chat assistance</li>
                      <li>• Phone support availability</li>
                      <li>• Emergency response team</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card-custom">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Ongoing Maintenance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Regular system updates</li>
                      <li>• Performance monitoring</li>
                      <li>• Backup verification</li>
                      <li>• Security patch management</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Integrations */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Seamless Integrations
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Connect your CRM with the tools you already use. We support integration with 100+ platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <Card key={integration.name} className="text-center p-4 shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <CardHeader className="p-2">
                  <CardTitle className="text-sm">{integration.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <Badge variant="secondary" className="text-xs">{integration.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="https://salescentri.com/solutions/psa-suite/integrations" target="_blank" rel="noopener noreferrer">
                View All Integrations
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <img
                src={featuresIcon}
                alt="CRM Features"
                className="mx-auto h-32 w-32 object-cover rounded-full shadow-card-custom"
              />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to see these features in action?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Book a personalized demo to see how our CRM implementation services can transform your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
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

export default Features;