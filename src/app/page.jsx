import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Github, Linkedin, Mail, Twitter, Cpu, Globe, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-white/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="sr-only">Web Developer Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  John Doe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Full-Stack Web Developer passionate about creating innovative and user-friendly web applications.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact">
                  <Button variant="outline" className="bg-white text-black hover:bg-gray-200">Get in Touch</Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">View Projects</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-purple-700 via-blue-500 to-teal-400">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)' }}></div>
          <div
            className="absolute inset-y-0 right-1/2 bg-gradient-to-r from-transparent to-purple-500 blur-3xl"
            style={{ width: '50%', transform: 'translateX(50%) skew(-20deg)' }}
            aria-hidden="true"
          ></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
          <div className="container relative px-4 md:px-6 pb-12">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8 text-white text-center">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-xl text-white leading-relaxed">
                  I'm a passionate full-stack developer with a knack for turning complex problems into elegant solutions. With over 5 years of experience in web development, I've honed my skills in creating scalable, efficient, and user-friendly applications.
                </p>
                <p className="text-xl text-white leading-relaxed">
                  My journey in tech started with a curiosity about how things work, which led me to dive deep into the world of coding. Today, I'm driven by the endless possibilities of technology and its power to make a positive impact on people's lives.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="John Doe"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-white shadow-2xl relative z-10"
                />
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                <Cpu className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tech Enthusiast</h3>
                <p>Always exploring new technologies and frameworks to stay at the cutting edge.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Collaborator</h3>
                <p>Experienced in working with diverse teams across different time zones.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
                <Lightbulb className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovative Problem Solver</h3>
                <p>Approaching challenges with creativity and out-of-the-box thinking.</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image
                    alt={`Project ${project}`}
                    className="object-cover w-full h-64"
                    height="400"
                    src={`/placeholder.svg?height=400&width=600`}
                    width="600"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center p-4">
                      <h3 className="text-xl font-bold text-white mb-2">Project {project}</h3>
                      <p className="text-sm text-gray-300 mb-4">
                        A brief description of Project {project} and its key features.
                      </p>
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">View Project</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"].map((skill) => (
                <div key={skill} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                  <Code className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Get in Touch</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-gray-400 md:text-lg">
                  I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                <Input type="email" placeholder="Your Email" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                <Textarea placeholder="Your Message" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black text-white">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2023 John Doe. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}