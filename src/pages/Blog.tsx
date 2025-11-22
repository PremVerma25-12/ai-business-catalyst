import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "How AI is Transforming Business Operations in 2024",
      excerpt: "Discover the latest trends in business AI automation and how companies are leveraging artificial intelligence to streamline operations, reduce costs, and accelerate growth.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI Trends",
      image: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      title: "The Future of Automation: What to Expect",
      excerpt: "Explore upcoming innovations in automation technology, from hyper-automation to intelligent process automation, and what it means for your business strategy.",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Automation",
      image: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
    {
      title: "AI for Small Businesses: A Practical Guide",
      excerpt: "Learn how small and medium-sized businesses can leverage AI tools without breaking the bank. Practical tips, real examples, and implementation strategies included.",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Small Business",
      image: "bg-gradient-to-br from-green-500 to-green-700",
    },
    {
      title: "Understanding Predictive Analytics and Its Impact",
      excerpt: "Deep dive into predictive analytics: how it works, why it matters, and real-world applications that are delivering measurable ROI for businesses worldwide.",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Analytics",
      image: "bg-gradient-to-br from-orange-500 to-orange-700",
    },
  ];

  const categories = ["All Posts", "AI Trends", "Automation", "Small Business", "Analytics", "Case Studies"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">AI Insights & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and best practices in AI and business automation
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden hover:shadow-elegant transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`${posts[0].image} h-64 md:h-auto`} />
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary font-semibold text-sm mb-2">
                  Featured Post
                </span>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{posts[0].date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{posts[0].readTime}</span>
                </div>
                <Button className="w-fit">
                  Read Full Article <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-shadow hover:-translate-y-1 transition-transform duration-300">
                <div className={`${post.image} h-48`} />
                <CardHeader>
                  <span className="text-primary font-semibold text-sm">
                    {post.category}
                  </span>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock size={14} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" className="w-full">
                    Read More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for AI insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="outline" className="bg-white text-foreground hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
