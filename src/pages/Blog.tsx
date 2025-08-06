import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  TrendingUp,
  Users,
  Settings,
  Target,
  BookOpen,
  Clock
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "Complete Guide to CRM Implementation in 2024",
    excerpt: "Everything you need to know about implementing a CRM system successfully, from planning to go-live and beyond.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Implementation Guide",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: true
  };

  const blogPosts = [
    {
      title: "5 Common CRM Implementation Mistakes to Avoid",
      excerpt: "Learn from common pitfalls that businesses encounter during CRM implementation and how to avoid them.",
      author: "Michael Chen",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "ROI Calculation: Measuring CRM Implementation Success",
      excerpt: "Discover how to calculate and track the return on investment of your CRM implementation project.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "ROI Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Salesforce vs HubSpot: Which CRM is Right for You?",
      excerpt: "A comprehensive comparison of two leading CRM platforms to help you make the right choice.",
      author: "David Thompson",
      date: "November 28, 2024",
      readTime: "15 min read",
      category: "Platform Comparison",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "Data Migration Best Practices for CRM Implementation",
      excerpt: "Essential strategies for clean, accurate data migration during your CRM implementation project.",
      author: "Sarah Johnson",
      date: "November 20, 2024",
      readTime: "12 min read",
      category: "Data Migration",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "User Adoption Strategies for CRM Success",
      excerpt: "Proven techniques to ensure your team embraces and effectively uses your new CRM system.",
      author: "Emily Rodriguez",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "User Adoption",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "CRM Integration: Connecting Your Business Tools",
      excerpt: "How to seamlessly integrate your CRM with existing business tools for maximum efficiency.",
      author: "Michael Chen",
      date: "November 10, 2024",
      readTime: "11 min read",
      category: "Integration",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    { name: "Implementation Guide", icon: Settings, count: 8 },
    { name: "Best Practices", icon: Target, count: 12 },
    { name: "ROI Analysis", icon: TrendingUp, count: 6 },
    { name: "Platform Comparison", icon: Users, count: 5 },
    { name: "Data Migration", icon: Settings, count: 4 },
    { name: "User Adoption", icon: Users, count: 7 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              CRM Implementation Insights
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/80">
              Expert advice, best practices, and industry insights to help you succeed with your CRM implementation and optimization projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                  Download Resources <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Webinars
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="py-16 bg-gradient-silver">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Search */}
            <div className="lg:col-span-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 h-12 text-lg"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={category.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2">
                      <category.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
              Featured Article
            </h2>
            
            <Card className="shadow-enterprise hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="lg:order-2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="lg:order-1 p-8">
                  <Badge className="bg-gradient-primary text-white mb-4">
                    Featured Article
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="bg-gradient-primary hover:opacity-90 shadow-button-custom" asChild>
                    <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
              Latest Articles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={post.title} className="shadow-card-custom hover:shadow-enterprise transition-all duration-300 animate-fade-in overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-24 bg-gradient-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stay Updated with CRM Insights
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Subscribe to our newsletter for the latest CRM implementation tips, industry trends, and exclusive resources.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="bg-gradient-primary hover:opacity-90 shadow-button-custom" asChild>
                <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                  Subscribe
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No spam. Unsubscribe at any time.
            </p>
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
              Explore our comprehensive library of CRM implementation resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto rounded-lg bg-gradient-primary p-3 w-fit mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Whitepapers & eBooks</CardTitle>
                <CardDescription>In-depth guides and research reports</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                    Browse Library
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto rounded-lg bg-gradient-primary p-3 w-fit mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Case Studies</CardTitle>
                <CardDescription>Real success stories from our clients</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                    View Cases
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card-custom hover:shadow-enterprise transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="mx-auto rounded-lg bg-gradient-primary p-3 w-fit mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Webinars & Tutorials</CardTitle>
                <CardDescription>Live and recorded training sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                    Watch Now
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

export default Blog;