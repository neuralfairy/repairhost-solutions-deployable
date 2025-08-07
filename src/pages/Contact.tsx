import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Calendar,
  ArrowRight,
  Send,
  Users,
  Headphones
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our CRM experts",
      details: "+1 (775) 555-0123",
      hours: "Mon-Fri 8AM-6PM PST",
      cta: "Call Now",
      href: "tel:+17755550123"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses to your questions",
      details: "support@repairhost.com",
      hours: "24-hour response time",
      cta: "Send Email",
      href: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support during business hours",
      details: "Available on our website",
      hours: "Mon-Fri 8AM-8PM PST",
      cta: "Start Chat",
      href: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a personalized consultation",
      details: "30-60 minute sessions",
      hours: "Flexible scheduling",
      cta: "Book Now",
      href: "https://salescentri.com/get-started/calendly"
    }
  ];

  const officeInfo = {
    address: "123 Business Center Drive, Reno, NV 89501",
    phone: "+1 (775) 555-0123",
    email: "contact@repairhost.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM PST"
  };

  const departments = [
    {
      name: "Sales Inquiries",
      description: "New business, pricing, and consultations",
      email: "sales@repairhost.com",
      href: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      name: "Technical Support",
      description: "Implementation support and troubleshooting",
      email: "support@repairhost.com", 
      href: "https://salescentri.com/contact/support-request"
    },
    {
      name: "Partnership Opportunities",
      description: "Become a partner or integration requests",
      email: "partnerships@repairhost.com",
      href: "https://salescentri.com/contact/partnerships"
    },
    {
      name: "Customer Success",
      description: "Existing client support and optimization",
      email: "success@repairhost.com",
      href: "https://salescentri.com/login/customer-portal"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in Touch with Our CRM Experts
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/80">
              Ready to transform your sales process? Our team is here to help you every step of the way. 
              Choose your preferred way to connect with us.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose Your Preferred Contact Method
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We offer multiple ways to get in touch. Pick the option that works best for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="shadow-card-custom hover:shadow-enterprise transition-all duration-300 text-center animate-fade-in-up group hover:scale-105" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mx-auto rounded-lg bg-gradient-primary p-3 w-fit mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">{method.title}</CardTitle>
                  <CardDescription className="text-base group-hover:text-foreground transition-colors duration-200">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="font-semibold text-foreground">{method.details}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">{method.hours}</p>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90 group-hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-button-custom" asChild>
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-24 bg-gradient-silver">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours. 
                Please provide as much detail as possible about your CRM needs.
              </p>
              
              <Card className="shadow-enterprise">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>We'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" action="https://salescentri.com/get-started/contact" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" placeholder="Your Company Name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="CRM Implementation Inquiry" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Tell us about your CRM needs, current challenges, and how we can help..."
                        rows={4}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 shadow-button-custom hover:scale-105 transition-all duration-200">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8 animate-slide-in-right">
              {/* Office Information */}
              <Card className="shadow-card-custom">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Our Reno Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">{officeInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">{officeInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">{officeInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p className="text-muted-foreground">{officeInfo.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Contacts */}
              <Card className="shadow-card-custom">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Department Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={dept.name} className="border-b border-border/40 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-foreground">{dept.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={dept.href} target="_blank" rel="noopener noreferrer">
                          Contact {dept.name}
                        </a>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card-custom">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </a>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                      View Interactive Demo
                    </a>
                  </Button>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                      Request Custom Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Quick Links */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find quick answers to common questions about our CRM implementation services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">How long does implementation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Implementation timelines vary by plan: Starter (30 days), Professional (45 days), Enterprise (custom).</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">What CRM platforms do you support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">We specialize in Salesforce, HubSpot, Microsoft Dynamics, Pipedrive, and custom solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Yes, all plans include ongoing support with varying levels of service and response times.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="/faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;