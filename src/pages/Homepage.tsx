import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { 
  Star, 
  Quote, 
  ArrowRight, 
  Target,
  Users,
  TrendingUp,
  Shield
} from "lucide-react";
import testimonialsImage from "@/assets/testimonials.jpg";

const Homepage = () => {
  const [roiValue, setRoiValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoiValue(prev => {
        if (prev < 285) return prev + 5;
        return 285;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      content: "Repairhost Solutions transformed our sales process completely. We saw a 40% increase in conversion rates within the first quarter.",
      author: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      rating: 5
    },
    {
      content: "The CRM implementation was seamless. Their team understood our needs and delivered beyond expectations.",
      author: "Michael Chen",
      role: "Operations Director, GrowthCo",
      rating: 5
    },
    {
      content: "Outstanding support throughout the entire process. Our team adopted the new system quickly thanks to their training.",
      author: "Emily Rodriguez",
      role: "Sales Manager, InnovateLLC",
      rating: 5
    }
  ];

  const stats = [
    { label: "Businesses Transformed", value: "500+", icon: Target },
    { label: "Team Members Trained", value: "2,000+", icon: Users },
    { label: "Average ROI Increase", value: "285%", icon: TrendingUp },
    { label: "Security Compliance", value: "100%", icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Stats Section */}
      <div className="py-16 bg-gradient-silver">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {stat.label === "Average ROI Increase" ? `${roiValue}%` : stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FeaturesSection />

      {/* ROI Calculator Section */}
      <div className="py-24 bg-gradient-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Calculate Your CRM ROI
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See how much your business could save and earn with our CRM implementation services.
            </p>
          </div>
          
          <div className="mt-16 bg-background rounded-2xl shadow-enterprise p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Investment</h3>
                <div className="space-y-4">
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Implementation Cost</div>
                    <div className="text-2xl font-bold text-foreground">$15,000</div>
                  </div>
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Monthly Subscription</div>
                    <div className="text-2xl font-bold text-foreground">$299/month</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Returns</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-sm text-green-600">Annual Revenue Increase</div>
                    <div className="text-2xl font-bold text-green-700">$127,500</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-sm text-blue-600">Annual Cost Savings</div>
                    <div className="text-2xl font-bold text-blue-700">$48,000</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">285% ROI</div>
              <p className="text-muted-foreground mb-6">Average return on investment in first year</p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                  Get Custom ROI Calculation <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Don't just take our word for it. Here's what business leaders are saying about our CRM implementation services.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="mb-8">
              <img
                src={testimonialsImage}
                alt="Happy Clients"
                className="mx-auto h-48 w-full max-w-md object-cover rounded-lg shadow-card-custom"
              />
            </div>
            <Button size="lg" variant="outline" asChild>
              <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                View All Case Studies
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Join hundreds of businesses that have accelerated their growth with our expert CRM implementation services.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                  Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-white/60 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-white">
                No Setup Fees
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                30-Day Guarantee
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Expert Support
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;