import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "https://salescentri.com/company/careers" },
      { name: "Partners", href: "https://salescentri.com/company/partners-affiliates" },
      { name: "Contact", href: "/contact" },
    ],
    solutions: [
      { name: "CRM Implementation", href: "/features" },
      { name: "PSA Suite", href: "https://salescentri.com/solutions/psa-suite" },
      { name: "Lead Generation", href: "https://salescentri.com/platforms/lead-management/lead-generation" },
      { name: "Data Enrichment", href: "https://salescentri.com/services/data-enrichment" },
    ],
    resources: [
      { name: "Case Studies", href: "https://salescentri.com/resources/case-studies" },
      { name: "Whitepapers", href: "https://salescentri.com/resources/whitepapers-ebooks" },
      { name: "Tutorials", href: "https://salescentri.com/resources/tutorials-webinars" },
      { name: "Blog", href: "/blog" },
    ],
    support: [
      { name: "Documentation", href: "https://salescentri.com/docs/user-guide" },
      { name: "API Reference", href: "https://salescentri.com/docs/api-reference" },
      { name: "Submit Ticket", href: "https://salescentri.com/contact/support-request/submit-ticket" },
      { name: "Live Chat", href: "https://salescentri.com/contact/support-request/live-chat" },
    ],
  };

  return (
    <footer className="bg-gradient-silver border-t border-border animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Repairhost Solutions
              </span>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Empowering businesses with expert CRM implementation and optimization services. 
                Transform your sales processes with our proven methodologies.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://salescentri.com/contact" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://salescentri.com/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://salescentri.com/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                       {item.href.startsWith('http') ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-6 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-sm leading-6 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.solutions.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('http') ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.resources.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('http') ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-border/40 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; 2024 Repairhost Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <a 
                href="https://salescentri.com?utm_source=repairhost.com&utm_medium=footer&utm_campaign=partner_network" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-200 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;