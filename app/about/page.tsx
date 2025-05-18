import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">About Project Nirghosh</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-6">
            Project Nirghosh is Bangladesh's pioneering initiative to develop low-cost stealth drone technology for
            next-generation defense applications.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            We aim to design, develop, and manufacture stealth drone prototypes that combine advanced technology with
            local production capabilities. Our mission is to enhance Bangladesh's technological self-reliance in defense
            and create a foundation for future aerospace innovation.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What Inspired Us</h2>
          <p>
            The rapid advancement of 5th-generation drone technology globally has created both opportunities and
            challenges for developing nations. Project Nirghosh was born from the recognition that Bangladesh needs to
            develop indigenous capabilities in this critical technology area.
          </p>
          <p>
            Inspired by successful drone programs in other countries and the growing importance of unmanned systems in
            modern defense, we set out to create a prototype that would be:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Affordable to produce locally</li>
            <li>Incorporate stealth features to reduce detectability</li>
            <li>Capable of autonomous operation</li>
            <li>Adaptable to various mission profiles</li>
            <li>Serve as a technology demonstrator for future development</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Stealth Capability</h3>
              <p className="text-muted-foreground">
                Develop airframes and materials that minimize radar, infrared, and acoustic signatures.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Autonomous Systems</h3>
              <p className="text-muted-foreground">
                Create reliable navigation and control systems that can operate without constant human input.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Local Production</h3>
              <p className="text-muted-foreground">
                Design with locally available materials and manufacturing capabilities in mind.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Knowledge Transfer</h3>
              <p className="text-muted-foreground">
                Build expertise in aerospace engineering and advanced manufacturing within Bangladesh.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why It Matters for Bangladesh</h2>
          <p>
            Bangladesh's strategic position in South Asia and its growing economy make technological self-reliance in
            defense a national priority. Project Nirghosh contributes to this goal by:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Reducing dependence on imported defense technology</li>
            <li>Creating high-skilled jobs in aerospace and electronics</li>
            <li>Developing dual-use technologies with civilian applications</li>
            <li>Establishing Bangladesh as an innovator in drone technology</li>
            <li>Building a foundation for a broader aerospace industry</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p>
            We follow an iterative, prototype-driven development process that allows us to test concepts quickly and
            learn from each iteration. Our team combines theoretical knowledge with practical engineering to overcome
            challenges and find innovative solutions.
          </p>
          <p>
            By leveraging open-source technologies where appropriate and developing proprietary solutions where
            necessary, we maintain a balance between innovation and practicality.
          </p>

          <div className="bg-muted rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold mb-4">Join Our Mission</h3>
            <p className="mb-4">
              We're always looking for talented individuals and organizations to collaborate with us on this journey.
              Whether you're an engineer, researcher, student, or industry partner, there's a place for you in Project
              Nirghosh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/team">
                  Join Our Team <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
