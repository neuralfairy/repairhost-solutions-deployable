import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-crm.jpg";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fade-in">
              Transform Your Business with 
              <span className="text-white/90"> Expert CRM Implementation</span>
            </h1>
            <p className="mt-4 text-xl text-white/80 animate-slide-up">
              Repairhost Solutions specializes in CRM implementation and optimization. 
              We help businesses streamline sales processes, improve customer relationships, 
              and drive measurable growth through proven methodologies.
            </p>
          </div>
          
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={heroImage}
                          alt="CRM Implementation Dashboard"
                          className="h-full w-full object-cover object-center shadow-enterprise"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={heroImage}
                          alt="Business Analytics"
                          className="h-full w-full object-cover object-center shadow-enterprise"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={heroImage}
                          alt="Sales Process Optimization"
                          className="h-full w-full object-cover object-center shadow-enterprise"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={heroImage}
                          alt="Team Collaboration"
                          className="h-full w-full object-cover object-center shadow-enterprise"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={heroImage}
                          alt="Data Integration"
                          className="h-full w-full object-cover object-center shadow-enterprise"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={heroImage}
                          alt="Customer Success"
                          className="h-full w-full object-cover object-center shadow-enterprise"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={heroImage}
                          alt="ROI Growth"
                          className="h-full w-full object-cover object-center shadow-enterprise"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-button-custom"
                  asChild
                >
                  <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                    Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-primary hover:bg-white/10"
                  asChild
                >
                  <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-6 text-white/60 text-sm animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
