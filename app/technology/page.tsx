import { ChevronRight } from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tighter mb-6">Technology Stack</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mb-12">
        Our drones leverage a combination of cutting-edge hardware and software technologies to achieve their
        capabilities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">Hardware</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-medium mb-2">Control Systems</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Arduino & Raspberry Pi Controllers</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom PCB designs for specialized functions</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>ARM Cortex-M series microcontrollers</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">Sensors</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>GPS Modules & IMU Sensors</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>LIDAR for obstacle detection</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Camera arrays for computer vision</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Thermal imaging sensors</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">Propulsion</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Brushless Motors & ESCs</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom propeller designs for noise reduction</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>High-efficiency battery systems</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">Communications</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Encrypted radio links</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Mesh networking capabilities</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Low-probability-of-intercept transmission</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">Software</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-medium mb-2">Operating Systems</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>ROS (Robot Operating System)</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Real-time Linux variants</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>FreeRTOS for microcontrollers</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Python for high-level control</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>C++ for performance-critical components</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>CUDA for GPU acceleration</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">Computer Vision</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>OpenCV for image processing</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>TensorFlow for object recognition</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom SLAM implementations</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">Simulation</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Unity for swarm simulation</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gazebo for physics simulation</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom flight dynamics models</span>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-6">Design Tools</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-medium mb-2">3D Modeling</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Fusion 360 for primary design</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>FreeCAD for open-source collaboration</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Blender for visualization</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">Simulation</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>ANSYS for structural analysis</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>OpenFOAM for fluid dynamics</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>openEMS for electromagnetic simulation</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">PCB Design</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>KiCad for circuit design</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Altium Designer for complex boards</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>LTspice for circuit simulation</span>
                </p>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-medium mb-2">Manufacturing</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cura for 3D printing slicing</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>CAMWorks for CNC machining</span>
                </p>
                <p className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom toolpath generators</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold tracking-tighter mb-6">Stealth Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Radar Cross-Section Reduction</h3>
          <p className="text-muted-foreground mb-4">
            Our drones employ several techniques to minimize their radar signature:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Geometric shaping to redirect radar waves away from the receiver</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Radar-absorbing materials (RAM) applied to key surfaces</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Edge treatment to reduce diffraction effects</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Internal component arrangement to minimize reflections</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Infrared Signature Management</h3>
          <p className="text-muted-foreground mb-4">
            Thermal emissions are managed through several innovative approaches:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Heat-dissipating materials to spread thermal energy</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Active cooling for high-heat components</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Exhaust channeling and cooling</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Surface treatments to equalize temperature distribution</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Acoustic Signature Reduction</h3>
          <p className="text-muted-foreground mb-4">
            Minimizing the sound produced by our drones is critical for stealth operations:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Custom propeller designs with noise-reducing features</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Vibration dampening materials throughout the airframe</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Optimized motor control algorithms for quieter operation</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Acoustic baffling for internal components</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Visual Signature Management</h3>
          <p className="text-muted-foreground mb-4">Reducing visual detectability through various techniques:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Adaptive camouflage materials for different environments</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Low-reflectivity coatings to reduce glint</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Minimal use of high-contrast markings</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Biomimetic design elements to blend with natural shapes</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold tracking-tighter mb-6">Autonomous Systems</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <p className="text-muted-foreground mb-4">
            Our drones can navigate without relying on GPS or external signals:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Visual-inertial odometry for position tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Terrain recognition and matching</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Celestial navigation capabilities</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Magnetic anomaly mapping</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Mission Planning</h3>
          <p className="text-muted-foreground mb-4">Sophisticated algorithms enable independent mission execution:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Dynamic path planning around obstacles</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Threat avoidance algorithms</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Energy-optimal route calculation</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Mission abort and return protocols</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Swarm Intelligence</h3>
          <p className="text-muted-foreground mb-4">
            Multiple drones can coordinate their actions without central control:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Distributed decision-making algorithms</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Formation flight capabilities</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Task allocation optimization</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Resilience to individual drone failures</span>
            </li>
          </ul>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h3 className="text-xl font-semibold mb-4">Perception</h3>
          <p className="text-muted-foreground mb-4">
            Advanced sensing capabilities allow drones to understand their environment:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Object detection and classification</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Semantic mapping of environments</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Anomaly detection in sensor data</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Multi-sensor fusion for robust perception</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
