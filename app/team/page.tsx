import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      role: "Project Lead",
      expertise: "Aerospace Engineering & Project Management",
      bio: "With over 8 years of experience in aerospace design and project management, our lead brings expertise from both academic research and industry projects in unmanned aerial systems.",
      skills: ["Aerodynamics", "Systems Engineering", "Project Management", "Defense Technology"],
    },
    {
      role: "Electronics Lead",
      expertise: "Embedded Systems & Sensor Integration",
      bio: "Specializing in low-power embedded systems and sensor fusion, our electronics lead has developed custom hardware solutions for various autonomous platforms.",
      skills: ["PCB Design", "Sensor Fusion", "Power Systems", "Communication Systems"],
    },
    {
      role: "Software Lead",
      expertise: "Autonomous Systems & Computer Vision",
      bio: "With a background in robotics and computer vision, our software lead develops the algorithms that enable autonomous navigation and mission execution.",
      skills: ["Computer Vision", "Machine Learning", "Flight Control", "ROS"],
    },
    {
      role: "Mechanical Engineer",
      expertise: "Structural Design & Materials",
      bio: "Expert in lightweight composite structures and manufacturing techniques, focusing on creating durable yet lightweight airframes optimized for stealth.",
      skills: ["Composite Materials", "Structural Analysis", "CAD/CAM", "Prototyping"],
    },
    {
      role: "Systems Engineer",
      expertise: "Integration & Testing",
      bio: "Responsible for ensuring all subsystems work together seamlessly, with expertise in test protocols and performance validation.",
      skills: ["Systems Integration", "Test Design", "Requirements Analysis", "Quality Assurance"],
    },
    {
      role: "Research Scientist",
      expertise: "Stealth Technology & Electromagnetics",
      bio: "Specializing in radar cross-section reduction and electromagnetic properties of materials, our research scientist leads the stealth aspects of the project.",
      skills: ["Electromagnetics", "Material Science", "Radar Technology", "Signature Reduction"],
    },
  ]

  const openPositions = [
    {
      title: "Avionics Engineer",
      type: "Full-time",
      requirements: [
        "Bachelor's degree in Electrical Engineering or related field",
        "Experience with flight control systems",
        "Knowledge of aviation standards and protocols",
        "Programming skills in C/C++",
      ],
    },
    {
      title: "Computer Vision Specialist",
      type: "Full-time/Part-time",
      requirements: [
        "Experience with OpenCV and image processing",
        "Machine learning background, particularly in object detection",
        "Python and C++ programming skills",
        "Understanding of SLAM algorithms",
      ],
    },
    {
      title: "Aerodynamics Engineer",
      type: "Full-time",
      requirements: [
        "Background in aerospace engineering",
        "Experience with CFD simulation",
        "Knowledge of low-observable aircraft design",
        "Familiarity with composite materials",
      ],
    },
    {
      title: "Embedded Systems Developer",
      type: "Full-time/Part-time",
      requirements: [
        "Experience with microcontrollers and RTOS",
        "PCB design and prototyping skills",
        "Sensor integration experience",
        "Low-power system optimization",
      ],
    },
  ]

  const collaborators = [
    {
      name: "Department of Aerospace Engineering, BUET",
      type: "Academic Partner",
      contribution: "Technical consultation and testing facilities",
    },
    {
      name: "Bangladesh Electronics Research Institute",
      type: "Research Partner",
      contribution: "Electronics development and testing",
    },
    {
      name: "National Defense College",
      type: "Strategic Partner",
      contribution: "Defense applications and requirements analysis",
    },
    {
      name: "Local Composites Manufacturer",
      type: "Industry Partner",
      contribution: "Materials supply and manufacturing support",
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tighter mb-6">Our Team</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        Meet the innovative minds behind Project Nirghosh - a diverse team of engineers, researchers, and technologists
        working to build Bangladesh's first stealth drone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <div className="aspect-square bg-muted flex items-center justify-center">
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
                className="h-24 w-24 text-muted-foreground/30"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.role}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold tracking-tighter mb-6">Open Positions</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8">
        We're looking for talented individuals to join our team and help push the boundaries of drone technology in
        Bangladesh.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {openPositions.map((position, index) => (
          <div key={index} className="bg-card rounded-lg border p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{position.title}</h3>
                <p className="text-sm text-muted-foreground">{position.type}</p>
              </div>
              <Button variant="outline" size="sm">
                Apply
              </Button>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Requirements:</h4>
              <ul className="space-y-1">
                {position.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Collaborators</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8">
        Project Nirghosh is made possible through collaboration with these academic, research, and industry partners.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="bg-card rounded-lg border p-6 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ExternalLink className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{collaborator.name}</h3>
              <p className="text-sm text-primary mb-1">{collaborator.type}</p>
              <p className="text-muted-foreground">{collaborator.contribution}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Don't see a position that matches your skills? We're always interested in connecting with talented individuals
          passionate about aerospace, electronics, software development, and defense technology.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Contact Us <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
