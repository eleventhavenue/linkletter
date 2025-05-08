"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.2 })
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.2 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-700 -skew-y-6 transform origin-top-left -translate-y-36 z-0" />

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-4">
              Our Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">
              Innovative <span className="text-green-300">Agricultural</span> Engineering Projects
            </h1>
            <p className="text-xl text-white/90 max-w-[700px] mb-8">
              Explore our portfolio of custom-designed agricultural facilities and systems across Prince Edward Island.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-white/90 group">
                <a href="#featured" className="flex items-center">
                  View Featured Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project - Red Isle Produce */}
      <section id="featured" ref={featuredRef} className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 mb-16"
          >
            <div className="inline-block bg-green-100 px-4 py-1 rounded-full text-green-800 text-sm font-medium mb-2">
              Featured Project
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Red Isle Produce Facility</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              A comprehensive agricultural engineering project showcasing our expertise in designing state-of-the-art
              facilities for PEI's potato industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  The Red Isle Produce project showcases our expertise in designing state-of-the-art agricultural
                  facilities for PEI's potato industry.
                </p>
                <p>
                  This comprehensive project included the design of specialized potato storage facilities with advanced
                  climate control systems, processing areas, and water management infrastructure.
                </p>
                <p>
                  Our engineering solutions focused on maximizing storage efficiency, maintaining optimal conditions for
                  long-term potato preservation, and implementing environmentally sustainable practices.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Highlights:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          />
                        </svg>
                      </div>
                      <h4 className="font-medium">Custom Storage Facilities</h4>
                      <p className="text-sm text-gray-500">Specialized design for optimal potato preservation</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-medium">Climate Control</h4>
                      <p className="text-sm text-gray-500">Advanced temperature and humidity management</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                      <h4 className="font-medium">Water Management</h4>
                      <p className="text-sm text-gray-500">Sustainable water retention and usage systems</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-medium">Environmental Compliance</h4>
                      <p className="text-sm text-gray-500">Meeting all PEI environmental regulations</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button asChild className="group mt-4">
                <Link href="/contact" className="flex items-center">
                  Discuss a Similar Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/water-retention.jpg"
                  alt="Red Isle Produce water retention pond"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <p className="text-green-800 font-semibold mb-1">Water Retention System</p>
                <p className="text-gray-600 text-sm">
                  Custom-designed water management infrastructure for sustainable agricultural operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Grid with Animation */}
      <section ref={projectsRef} className="py-24 bg-gray-50 relative">
        <div
          className="absolute top-0 left-0 w-full h-24 bg-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
        ></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 mb-16"
          >
            <div className="inline-block bg-green-100 px-4 py-1 rounded-full text-green-800 text-sm font-medium mb-2">
              Our Portfolio
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Agricultural Engineering Projects</h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              A selection of our recent agricultural engineering projects across Prince Edward Island.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="h-5 w-5 text-green-700" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-green-700 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-600">
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {Array.from({ length: 10 }).map((_, i) => (
                <circle
                  key={i}
                  cx={Math.random() * 100}
                  cy={Math.random() * 100}
                  r={Math.random() * 5 + 1}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container relative z-10 px-4 md:px-6"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 md:text-xl/relaxed mb-8 max-w-[700px] mx-auto">
              Contact us today to discuss how our agricultural engineering expertise can help bring your project to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-white/90 group">
                <Link href="/contact" className="flex items-center">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

const projects = [
  {
    title: "Modern Dairy Barn",
    description: "Labor-efficient dairy operation with advanced animal comfort features and automated systems.",
    image: "/images/dairy-barn.jpg",
    tags: ["Dairy", "Animal Comfort", "Automation"],
  },
  {
    title: "Poultry Housing Complex",
    description: "Multi-building poultry operation with integrated climate control and biosecurity features.",
    image: "/images/poultry-complex.jpg",
    tags: ["Poultry", "Climate Control", "Biosecurity"],
  },
  {
    title: "Swine Production Facility",
    description: "Modern swine facility designed for optimal animal welfare and production efficiency.",
    image: "/images/swine-facility.jpg",
    tags: ["Swine", "Animal Welfare", "Efficiency"],
  },
  {
    title: "Beef Cattle Operation",
    description: "Comprehensive beef cattle facility with specialized handling areas and feeding systems.",
    image: "/images/beef-operation.jpg",
    tags: ["Beef", "Handling Systems", "Feeding"],
  },
  {
    title: "Agricultural Storage Building",
    description: "Multi-purpose agricultural storage building designed for equipment and supply storage.",
    image: "/images/storage-building.jpg",
    tags: ["Storage", "Multi-purpose", "Equipment"],
  },
  {
    title: "Potato Processing Facility",
    description: "Advanced potato processing facility with integrated storage and handling systems.",
    image: "/images/potato-storage.jpg",
    tags: ["Potato", "Processing", "Storage"],
  },
]
