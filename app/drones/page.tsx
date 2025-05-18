import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function DronesPage() {
  const drones = [
    {
      id: "stealth-airframe",
      name: "Stealth Airframe",
      description:
        "Our primary stealth drone prototype featuring radar-absorbing materials and optimized geometry for minimal radar cross-section.",
      specs: [
        { label: "Wingspan", value: "1.2 meters" },
        { label: "Weight", value: "2.3 kg" },
        { label: "Flight Time", value: "45 minutes" },
        { label: "Range", value: "10 km" },
        { label: "Max Speed", value: "120 km/h" },
      ],
      features: [
        "Radar-absorbing composite materials",
        "Optimized geometry for minimal radar cross-section",
        "Low acoustic signature propulsion",
        "Thermal signature management",
        "Modular payload bay",
      ],
      status: "Active Development",
    },
    {
      id: "autonomous-navigation",
      name: "Autonomous Navigation Testbed",
      description:
        "A specialized drone platform for testing advanced navigation systems that can operate in GPS-denied environments using computer vision and sensor fusion.",
      specs: [
        { label: "Wingspan", value: "0.8 meters" },
        { label: "Weight", value: "1.5 kg" },
        { label: "Flight Time", value: "35 minutes" },
        { label: 'Range  value: "1.5 kg' },
        { label: "Flight Time", value: "35 minutes" },
        { label: "Range", value: "15 km" },
        { label: "Max Speed", value: "100 km/h" },
      ],
      features: [
        "Computer vision-based navigation",
        "Sensor fusion algorithms",
        "Obstacle avoidance capabilities",
        "Real-time mapping",
        "Autonomous mission planning",
      ],
      status: "Testing Phase",
    },
    {
      id: "ir-signature",
      name: "IR Signature Testbed",
      description:
        "A specialized platform for testing and developing thermal signature reduction technologies for stealth applications.",
      specs: [
        { label: "Wingspan", value: "0.9 meters" },
        { label: "Weight", value: "1.8 kg" },
        { label: "Operating Temp", value: "-10°C to 50°C" },
        { label: "Flight Time", value: "30 minutes" },
        { label: "Sensors", value: "Multiple thermal arrays" },
      ],
      features: [
        "Active cooling systems",
        "Heat-dissipating materials",
        "Exhaust masking technology",
        "Thermal imaging cameras",
        "Real-time signature analysis",
      ],
      status: "Active Development",
    },
    {
      id: "swarm-simulation",
      name: "Swarm Simulation Platform",
      description:
        "A virtual environment for testing multi-drone coordination algorithms before implementing them on physical drones.",
      specs: [
        { label: "Simulation Capacity", value: "Up to 50 drones" },
        { label: "Physics Engine", value: "Custom high-fidelity" },
        { label: "Environments", value: "Urban, Rural, Maritime" },
        { label: "Sensor Simulation", value: "Radar, IR, Visual" },
        { label: "Communication", value: "Realistic bandwidth constraints" },
      ],
      features: [
        "Distributed decision making",
        "Formation flight algorithms",
        "Mission planning optimization",
        "Fault tolerance testing",
        "Adversarial scenarios",
      ],
      status: "Operational",
    },
    {
      id: "micro-recon",
      name: "Micro Reconnaissance Drone",
      description: "Ultra-small drone designed for close-range surveillance missions with minimal detection risk.",
      specs: [
        { label: "Size", value: "15 cm wingspan" },
        { label: "Weight", value: "100 grams" },
        { label: "Flight Time", value: "20 minutes" },
        { label: "Range", value: "2 km" },
        { label: "Camera", value: "HD with low-light capability" },
      ],
      features: [
        "Near-silent operation",
        "Biomimetic design options",
        "Encrypted communications",
        "Autonomous return-to-base",
        "Indoor navigation capability",
      ],
      status: "Prototype Testing",
    },
    {
      id: "long-endurance",
      name: "Long Endurance Platform",
      description: "Extended flight time drone designed for border surveillance and long-duration missions.",
      specs: [
        { label: "Wingspan", value: "2.5 meters" },
        { label: "Weight", value: "4.2 kg" },
        { label: "Flight Time", value: "4 hours" },
        { label: "Range", value: "30 km" },
        { label: "Payload Capacity", value: "800 grams" },
      ],
      features: [
        "Efficient power management",
        "Solar panel integration",
        "Multiple communication relays",
        "Modular sensor packages",
        "Weather-resistant design",
      ],
      status: "Early Development",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tighter mb-6">Our Drone Prototypes</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        Explore our current prototype models and their capabilities, from stealth airframes to autonomous navigation
        systems.
      </p>

      <div className="grid grid-cols-1 gap-12">
        {drones.map((drone) => (
          <div key={drone.id} className="border rounded-lg overflow-hidden bg-card">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="aspect-video bg-muted flex items-center justify-center p-6">
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
                  className="h-24 w-24 text-muted-foreground/40"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="md:col-span-2 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{drone.name}</h2>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mt-2 md:mt-0">
                    {drone.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{drone.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                    <ul className="space-y-2">
                      {drone.specs.map((spec, index) => (
                        <li key={index} className="flex justify-between">
                          <span className="text-muted-foreground">{spec.label}:</span>
                          <span className="font-medium">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {drone.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="outline" asChild>
                  <Link href={`/drones/${drone.id}`}>
                    View Details <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
