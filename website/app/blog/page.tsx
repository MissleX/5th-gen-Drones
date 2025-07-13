import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "testing-stealth-shapes",
      title: "Testing Stealth Shapes with 3D Prints",
      date: "April 15, 2024",
      author: "Aerodynamics Team",
      excerpt:
        "Our approach to rapid prototyping different airframe geometries using low-cost 3D printing and testing their radar cross-section.",
      readTime: "8 min read",
      categories: ["Research", "Prototyping", "Stealth Technology"],
    },
    {
      id: "gps-autonomous-flight",
      title: "Our First GPS Autonomous Flight",
      date: "March 22, 2024",
      author: "Navigation Team",
      excerpt:
        "A detailed breakdown of our autonomous navigation system and the results from our first fully autonomous test flight.",
      readTime: "12 min read",
      categories: ["Autonomous Systems", "Flight Testing", "Navigation"],
    },
    {
      id: "minimizing-heat-signature",
      title: "Minimizing Heat Signature: What Works?",
      date: "February 8, 2024",
      author: "Thermal Management Team",
      excerpt:
        "Exploring various techniques for reducing infrared signatures in small drones, from material selection to active cooling.",
      readTime: "10 min read",
      categories: ["Stealth Technology", "Thermal Management", "Materials"],
    },
    {
      id: "swarm-intelligence-algorithms",
      title: "Developing Swarm Intelligence Algorithms",
      date: "January 17, 2024",
      author: "Software Team",
      excerpt:
        "How we're implementing distributed decision-making for coordinated drone operations without centralized control.",
      readTime: "15 min read",
      categories: ["Swarm Technology", "Algorithms", "Software Development"],
    },
    {
      id: "composite-materials-testing",
      title: "Composite Materials for Stealth Applications",
      date: "December 5, 2023",
      author: "Materials Team",
      excerpt:
        "Results from our testing of various composite materials and their effectiveness in reducing radar reflectivity.",
      readTime: "9 min read",
      categories: ["Materials Science", "Stealth Technology", "Research"],
    },
    {
      id: "power-system-optimization",
      title: "Optimizing Power Systems for Extended Flight",
      date: "November 12, 2023",
      author: "Electronics Team",
      excerpt: "How we're maximizing flight time through efficient power management and battery technology selection.",
      readTime: "11 min read",
      categories: ["Electronics", "Power Systems", "Flight Performance"],
    },
    {
      id: "computer-vision-navigation",
      title: "Computer Vision for GPS-Denied Navigation",
      date: "October 3, 2023",
      author: "Navigation Team",
      excerpt:
        "Implementing visual odometry and feature tracking to enable navigation in environments where GPS is unavailable.",
      readTime: "14 min read",
      categories: ["Computer Vision", "Navigation", "Autonomous Systems"],
    },
    {
      id: "first-flight-lessons",
      title: "Lessons from Our First Test Flight",
      date: "September 18, 2023",
      author: "Flight Test Team",
      excerpt:
        "Key takeaways and insights from the maiden flight of our first prototype, including unexpected challenges and solutions.",
      readTime: "7 min read",
      categories: ["Flight Testing", "Prototyping", "Lessons Learned"],
    },
  ]

  const categories = [
    "Stealth Technology",
    "Autonomous Systems",
    "Materials Science",
    "Flight Testing",
    "Computer Vision",
    "Electronics",
    "Swarm Technology",
    "Prototyping",
    "Research",
    "Navigation",
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/4">
          <h1 className="text-4xl font-bold tracking-tighter mb-6">R&D Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            Follow our research and development journey through detailed technical posts about our drone project.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group bg-card rounded-lg border shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="aspect-video md:aspect-square bg-muted flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-16 w-16 text-muted-foreground/30"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.slice(0, 2).map((category, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4 gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto font-medium" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline">Load More Posts</Button>
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="sticky top-20">
            <div className="bg-card rounded-lg border p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="absolute right-0 top-0 h-full rounded-l-none" size="sm">
                  Search
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded-full transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
