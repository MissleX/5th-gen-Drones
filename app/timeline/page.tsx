import { ChevronRight } from "lucide-react"

export default function TimelinePage() {
  const timelineEvents = [
    {
      date: "January 2023",
      title: "Project Inception",
      description:
        "Initial concept development and feasibility studies completed. The team formed and began research into stealth drone technologies and their potential applications for Bangladesh.",
      milestones: [
        "Team formation",
        "Initial research completed",
        "Concept paper drafted",
        "Preliminary budget established",
      ],
    },
    {
      date: "March 2023",
      title: "First Design Iteration",
      description:
        "Completed CAD models and simulations for the stealth airframe. Initial electromagnetic simulations showed promising results for radar cross-section reduction.",
      milestones: [
        "Airframe design finalized",
        "Radar cross-section simulations completed",
        "Materials research conducted",
        "Control system architecture defined",
      ],
    },
    {
      date: "June 2023",
      title: "Prototype Construction",
      description:
        "Built first physical prototype and conducted initial ground tests. The prototype validated our design concepts and manufacturing approach.",
      milestones: [
        "Materials sourced locally",
        "3D printing of components",
        "Electronics assembly",
        "Ground control station setup",
      ],
    },
    {
      date: "September 2023",
      title: "First Test Flight",
      description:
        "Successful maiden flight with basic manual controls. This milestone validated our airframe design and propulsion system in real-world conditions.",
      milestones: [
        "Flight control software tested",
        "Safety protocols established",
        "Manual flight testing completed",
        "Flight data analysis performed",
      ],
    },
    {
      date: "December 2023",
      title: "Autonomous Navigation",
      description:
        "Implemented and tested basic autonomous flight capabilities. The drone successfully followed pre-programmed waypoints without human intervention.",
      milestones: [
        "GPS navigation implemented",
        "Autonomous takeoff and landing",
        "Waypoint following tested",
        "Fail-safe systems validated",
      ],
    },
    {
      date: "March 2024",
      title: "Stealth Testing",
      description:
        "Conducted radar cross-section measurements and optimizations. Testing confirmed significant reduction in radar signature compared to conventional designs.",
      milestones: [
        "RCS testing facility partnership",
        "Material improvements implemented",
        "Geometry optimizations applied",
        "Comparative analysis with baseline",
      ],
    },
    {
      date: "Present",
      title: "Swarm Development",
      description:
        "Currently working on multi-drone coordination algorithms. Simulation environment has been established and initial algorithms are being tested.",
      milestones: [
        "Swarm simulation environment created",
        "Communication protocols defined",
        "Formation flight algorithms developed",
        "Distributed decision-making testing",
      ],
    },
  ]

  const futureRoadmap = [
    {
      timeframe: "Q3 2024",
      milestone: "Advanced Stealth Features",
      description:
        "Implement next-generation stealth technologies including acoustic signature reduction and advanced thermal management.",
    },
    {
      timeframe: "Q4 2024",
      milestone: "Medium-Altitude Prototype",
      description:
        "Scale up to 3m wingspan medium-altitude drone capable of extended mission durations and higher payload capacity.",
    },
    {
      timeframe: "Q1 2025",
      milestone: "Secure Communications",
      description:
        "Develop and implement military-grade secure communication protocols resistant to jamming and interception.",
    },
    {
      timeframe: "Q2 2025",
      milestone: "Production Partnership",
      description:
        "Partner with local aerospace manufacturers to establish production capabilities for small-scale manufacturing.",
    },
    {
      timeframe: "Q3-Q4 2025",
      milestone: "Field Testing",
      description:
        "Conduct comprehensive field testing in various environments and conditions to validate operational capabilities.",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tighter mb-6">Project Timeline</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        Track our journey from concept to prototype and beyond, as we develop Bangladesh's first stealth drone
        technology.
      </p>

      <div className="relative mb-20">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
        <div className="space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 ml-auto"}`}>
                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <div className="text-sm font-medium text-primary mb-1">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {event.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-bold tracking-tighter mb-6">Future Roadmap</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8">
        Our planned development trajectory for the coming years focuses on scaling up capabilities, enhancing stealth
        features, and moving toward production.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {futureRoadmap.map((item, index) => (
          <div key={index} className="bg-card rounded-lg p-6 shadow-sm border">
            <div className="flex items-start gap-4">
              <div className="w-24 flex-shrink-0 bg-primary/10 rounded-md p-2 text-center">
                <span className="text-sm font-semibold text-primary">{item.timeframe}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.milestone}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4">Long-Term Vision</h3>
        <p className="text-muted-foreground mb-6">
          Beyond our immediate roadmap, Project Nirghosh aims to establish Bangladesh as a regional leader in drone
          technology with these long-term goals:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h4 className="text-lg font-semibold mb-3">Technology Transfer</h4>
            <p className="text-muted-foreground">
              Create a knowledge base and training program to develop local expertise in advanced aerospace
              technologies.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h4 className="text-lg font-semibold mb-3">Industrial Ecosystem</h4>
            <p className="text-muted-foreground">
              Foster a network of local suppliers, manufacturers, and research institutions to support drone
              development.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h4 className="text-lg font-semibold mb-3">Export Potential</h4>
            <p className="text-muted-foreground">
              Develop export-ready drone systems that can compete in international markets and generate foreign
              exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
