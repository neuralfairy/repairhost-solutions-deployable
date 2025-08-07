import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Search, 
  ArrowRight, 
  HelpCircle,
  MessageCircle,
  Phone,
  Settings,
  Users,
  DollarSign,
  Clock,
  Shield
} from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      questions: [
        {
          q: "What is CRM implementation and why do I need it?",
          a: "CRM implementation is the process of setting up, configuring, and deploying a Customer Relationship Management system for your business. It involves data migration, user training, workflow setup, and integration with existing tools. You need it to centralize customer data, streamline sales processes, improve customer relationships, and gain valuable insights into your business performance."
        },
        {
          q: "How do I know if my business is ready for CRM implementation?",
          a: "Your business is ready for CRM implementation if you're experiencing challenges with customer data management, sales process inefficiencies, lack of visibility into your sales pipeline, or difficulty tracking customer interactions. Typically, businesses with 5+ employees or those handling 50+ leads per month benefit significantly from CRM systems."
        },
        {
          q: "Which CRM platform is best for my business?",
          a: "The best CRM platform depends on your business size, industry, budget, and specific requirements. We specialize in Salesforce (enterprise-grade), HubSpot (marketing-focused), Microsoft Dynamics (integration-heavy), and Pipedrive (sales-focused). During our consultation, we'll assess your needs and recommend the most suitable platform."
        }
      ]
    },
    {
      title: "Implementation Process",
      icon: Settings,
      questions: [
        {
          q: "How long does CRM implementation take?",
          a: "Implementation timelines vary by plan and complexity: Starter plan (30 days), Professional plan (45 days), Enterprise plan (60-90 days). Factors affecting timeline include data volume, number of integrations, custom requirements, and user training needs. We provide detailed project timelines during the planning phase."
        },
        {
          q: "What happens during the implementation process?",
          a: "Our implementation process includes: 1) Discovery and planning, 2) System configuration and customization, 3) Data migration and validation, 4) Integration setup, 5) User training and testing, 6) Go-live support, and 7) Post-implementation optimization. We follow a proven methodology refined over 500+ implementations."
        },
        {
          q: "Will my business operations be disrupted during implementation?",
          a: "We minimize disruption by implementing systems in parallel with your existing processes. Critical activities continue uninterrupted while we prepare the new system. The actual cutover typically happens over a weekend or during low-activity periods. We provide extensive testing and fallback procedures."
        }
      ]
    },
    {
      title: "Data Migration",
      icon: Settings,
      questions: [
        {
          q: "Can you migrate data from our existing system?",
          a: "Yes, we provide comprehensive data migration services from virtually any source including spreadsheets, legacy CRM systems, databases, and other business applications. We handle data cleaning, validation, mapping, and testing to ensure accuracy and completeness."
        },
        {
          q: "How do you ensure data accuracy during migration?",
          a: "Our data migration process includes multiple validation steps: data profiling and analysis, cleansing and standardization, test migrations with sample data, validation reports and error resolution, and final verification before go-live. We maintain backup copies and provide rollback capabilities."
        },
        {
          q: "What if we have a lot of messy or duplicate data?",
          a: "Data cleansing is part of our migration service. We identify and resolve duplicates, standardize formats, validate contact information, enrich missing data, and establish data quality rules for the future. This ensures your new CRM starts with clean, reliable data."
        }
      ]
    },
    {
      title: "Training & Support",
      icon: Users,
      questions: [
        {
          q: "What training do you provide?",
          a: "We provide comprehensive training including: role-based training sessions, hands-on workshops, video tutorial library, best practices documentation, admin training for power users, and ongoing coaching sessions. Training is customized to your specific configuration and workflows."
        },
        {
          q: "What ongoing support do you offer?",
          a: "Our support options include: email and phone support, priority support queues for paid plans, regular system health checks, optimization recommendations, user adoption monitoring, and access to our knowledge base and training materials. Enterprise clients receive dedicated account management."
        },
        {
          q: "How do you ensure user adoption?",
          a: "We use proven change management strategies: involving key users in the design process, providing role-specific training, creating user champions, implementing gradual rollouts, monitoring usage analytics, providing ongoing coaching, and gathering user feedback for continuous improvement."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: DollarSign,
      questions: [
        {
          q: "What's included in your pricing?",
          a: "Our pricing includes implementation planning, system configuration, data migration, user training, go-live support, and ongoing maintenance. Setup fees cover the initial implementation work, while monthly fees cover platform licensing, hosting, support, and regular updates."
        },
        {
          q: "Are there any hidden costs?",
          a: "No hidden costs. Our pricing is transparent and includes all standard implementation services. Optional add-ons like additional training hours, extra integrations, or priority support are clearly listed separately. We provide detailed quotes upfront."
        },
        {
          q: "Do you offer payment plans or financing?",
          a: "Yes, we offer flexible payment options including monthly payment plans for setup fees, quarterly billing options, and enterprise financing for large implementations. Contact our sales team to discuss payment arrangements that work for your budget."
        }
      ]
    },
    {
      title: "Technical Questions",
      icon: Shield,
      questions: [
        {
          q: "How secure is our data in the CRM?",
          a: "We implement enterprise-grade security including data encryption at rest and in transit, role-based access controls, regular security audits, GDPR compliance measures, SOC 2 Type II certification, and backup and disaster recovery procedures. All platforms we work with maintain industry-leading security standards."
        },
        {
          q: "Can you integrate with our existing tools?",
          a: "Yes, we specialize in integrations with 100+ business tools including email platforms, accounting software, marketing automation, e-commerce platforms, and custom applications. We use both native integrations and API connections to ensure seamless data flow."
        },
        {
          q: "What happens if we want to switch CRM platforms later?",
          a: "We provide data export and migration assistance if you decide to switch platforms. Most modern CRMs offer data export capabilities, and we can help plan and execute migrations to new systems. However, our thorough planning process minimizes the likelihood of needing to switch."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/80">
              Find answers to common questions about our CRM implementation services. 
              Can't find what you're looking for? Our team is here to help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
                  Contact Support <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Search Section */}
      <div className="py-16 bg-gradient-silver">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search frequently asked questions..." 
                className="pl-10 h-12 text-lg shadow-card-custom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Browse by Category
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find answers organized by topic area
            </p>
          </div>
          
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={category.title} className="animate-fade-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="rounded-lg bg-gradient-primary p-2">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`} className={`border border-border rounded-lg px-6 group hover:bg-accent/10 transition-colors duration-200 animate-fade-in-up delay-${index * 100}`}>
                      <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary group-hover:text-primary transition-colors duration-200">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground transition-colors duration-200">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Still Need Help */}
      <div className="py-24 bg-gradient-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Still Need Help?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our CRM experts are standing by to answer your specific questions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto rounded-lg bg-gradient-primary p-3 w-fit mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Live Chat</CardTitle>
                <CardDescription>Get instant answers during business hours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Monday - Friday<br />
                  8:00 AM - 8:00 PM PST
                </p>
                <Button className="w-full bg-gradient-primary hover:opacity-90" asChild>
                  <a href="https://salescentri.com/contact/support-request/live-chat" target="_blank" rel="noopener noreferrer">
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto rounded-lg bg-gradient-primary p-3 w-fit mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Phone Support</CardTitle>
                <CardDescription>Speak directly with our experts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  +1 (775) 555-0123<br />
                  Monday - Friday<br />
                  8:00 AM - 6:00 PM PST
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+17755550123">
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto rounded-lg bg-gradient-primary p-3 w-fit mb-4">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Submit Ticket</CardTitle>
                <CardDescription>Get detailed help with your question</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed response<br />
                  within 24 hours
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/contact/support-request/submit-ticket" target="_blank" rel="noopener noreferrer">
                    Submit Ticket
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Additional Resources
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Explore our comprehensive resource library
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://salescentri.com/docs/user-guide" target="_blank" rel="noopener noreferrer">
                    User Guide
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <Settings className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://salescentri.com/docs/api-reference" target="_blank" rel="noopener noreferrer">
                    API Docs
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                    Watch Videos
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Case Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                    Read Stories
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

export default FAQ;