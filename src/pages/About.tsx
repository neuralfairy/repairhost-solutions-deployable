import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Briefcase, 
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar
} from "lucide-react";
import aboutOfficeImage from "@/assets/about-office.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      experience: "15+ years in CRM consulting",
      expertise: "Salesforce, HubSpot, Strategic Planning"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      experience: "12+ years in system integration",
      expertise: "API Development, Data Migration, Security"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Success",
      experience: "10+ years in customer training",
      expertise: "Change Management, Training, User Adoption"
    },
    {
      name: "David Thompson",
      role: "Senior Implementation Consultant",
      experience: "8+ years in CRM implementation",
      expertise: "Process Optimization, Workflow Design"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a mission to simplify CRM implementation for businesses"
    },
    {
      year: "2020",
      title: "100th Client",
      description: "Reached our first major milestone helping 100 businesses transform their sales"
    },
    {
      year: "2022",
      title: "Enterprise Expansion", 
      description: "Launched enterprise services for Fortune 500 companies"
    },
    {
      year: "2024",
      title: "500+ Implementations",
      description: "Successfully completed over 500 CRM implementations across various industries"
    }
  ];

  const certifications = [
    "Salesforce Certified Partner",
    "HubSpot Platinum Partner",
    "Microsoft Dynamics Gold Partner",
    "ISO 27001 Security Certified",
    "GDPR Compliance Certified",
    "SOC 2 Type II Certified"
  ];

  const values = [
    {
      title: "Client Success First",
      description: "We measure our success by the tangible results our clients achieve",
      icon: Target
    },
    {
      title: "Transparent Process",
      description: "Clear communication and transparent pricing throughout every project",
      icon: CheckCircle
    },
    {
      title: "Expert Team",
      description: "Certified professionals with deep expertise in CRM platforms",
      icon: Award
    },
    {
      title: "Proven Methodology",
      description: "Battle-tested implementation process refined over 500+ projects",
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Repairhost Solutions
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/80">
              We're CRM implementation experts dedicated to transforming how businesses manage their sales processes and customer relationships.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/company/careers" target="_blank" rel="noopener noreferrer">
                  Join Our Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To empower businesses with expertly implemented CRM solutions that drive measurable growth, 
                  improve customer relationships, and streamline sales processes through proven methodologies 
                  and dedicated support.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To be the trusted CRM implementation partner for businesses worldwide, known for delivering 
                  exceptional results, transparent processes, and long-term value that transforms how 
                  organizations approach sales and customer management.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <img
                src={aboutOfficeImage}
                alt="Repairhost Solutions Office"
                className="rounded-lg shadow-enterprise w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-24 bg-gradient-silver">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="mx-auto rounded-lg bg-gradient-primary p-3 w-fit">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Key milestones in our growth and evolution
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <Card className={`w-full max-w-md shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 animate-fade-in ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`} style={{animationDelay: `${index * 0.2}s`}}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="bg-gradient-primary text-white">
                          <Calendar className="h-3 w-3 mr-1" />
                          {milestone.year}
                        </Badge>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gradient-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Expert Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Certified professionals with deep expertise in CRM implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-xs text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Certifications & Partnerships
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Industry-recognized certifications and strategic partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert} className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center p-6 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center justify-center mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cert}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="py-24 bg-gradient-silver">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Visit Our Reno Office
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Repairhost Solutions</p>
                    <p className="text-muted-foreground">123 Business Center Drive</p>
                    <p className="text-muted-foreground">Reno, NV 89501</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground mb-4">
                    Our Reno headquarters serves as the center of our operations, where our expert team 
                    develops CRM implementation strategies and provides ongoing support to clients worldwide.
                  </p>
                  <Button className="bg-gradient-primary hover:opacity-90 shadow-button-custom" asChild>
                    <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                      Schedule Office Visit <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="shadow-enterprise p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Work Together?</CardTitle>
                <CardDescription className="text-base">
                  Let's discuss how we can help transform your CRM implementation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-primary hover:opacity-90" asChild>
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Consultation
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                    Contact Sales Team
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;