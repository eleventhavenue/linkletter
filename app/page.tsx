"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 })
  const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.2 })
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity, y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/farm-building.jpg')" }}
          />
        </motion.div>

        <div className="container relative z-20 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              Engineering the Future of <span className="text-green-400">PEI Agriculture</span>
            </h1>
            <p className="text-xl text-white/90 max-w-[700px]">
              Innovative farm building design and agricultural production systems since 1997.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 group">
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <p className="text-white mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            >
              <ChevronRight className="h-8 w-8 text-white rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section with Staggered Animation */}
      <section ref={servicesRef} className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50 rounded-bl-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-50 rounded-tr-full opacity-50" />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 mb-16"
          >
            <div className="inline-block bg-green-100 px-4 py-1 rounded-full text-green-800 text-sm font-medium mb-2">
              Our Expertise
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">
              Agricultural Engineering Solutions
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              Specialized solutions designed for Prince Edward Island's unique agricultural landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center mt-4 text-green-700 hover:text-green-800 font-medium group"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Diagonal Layout */}
      <section ref={aboutRef} className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white -skew-y-3 transform origin-top-right z-0" />

        <div className="container px-4 md:px-6 relative z-10 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="inline-block bg-green-100 px-4 py-1 rounded-full text-green-800 text-sm font-medium mb-2">
                Our Story
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                <span className="block">Decades of</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">
                  Agricultural Excellence
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                Led by Graeme Linkletter, M. Sc. Agr. Eng. from McGill University, our team brings over 37 years of
                experience from the Provincial Department of Agriculture and 25+ years with Linkletter Engineering.
              </p>
              <p className="text-gray-600">
                We understand the unique challenges of PEI's agricultural sector and are committed to providing
                innovative, structurally sound, and labor-efficient solutions.
              </p>
              <Button asChild variant="outline" className="mt-4 group">
                <Link href="/about" className="flex items-center">
                  About Our Company
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-image.jpg"
                  alt="Linkletter Engineering team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-green-800 font-semibold">Since 1997</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Providing innovative agricultural engineering solutions to Prince Edward Island's farming community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Overlapping Cards */}
      <section ref={projectsRef} className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 mb-16"
          >
            <div className="inline-block bg-green-100 px-4 py-1 rounded-full text-green-800 text-sm font-medium mb-2">
              Our Work
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Featured{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">
                Projects
              </span>
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              Explore our portfolio of innovative agricultural engineering solutions across Prince Edward Island.
            </p>
          </motion.div>

          <div className="relative mt-20">
            {/* Featured Project - Red Isle Produce */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-20 bg-white rounded-2xl shadow-xl overflow-hidden mb-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block bg-green-100 px-4 py-1 rounded-full text-green-800 text-sm font-medium mb-4">
                    Featured Project
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Red Isle Produce Facility</h3>
                  <p className="text-gray-600 mb-6">
                    State-of-the-art potato storage and processing facility with advanced climate control systems and
                    water management infrastructure.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Custom-designed potato storage facilities</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Advanced temperature and humidity control</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Water retention and management infrastructure</span>
                    </li>
                  </ul>
                  <Button asChild className="self-start group">
                    <Link href="/projects" className="flex items-center">
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                <div className="relative h-[400px] lg:h-auto">
                  <Image
                    src="/images/water-retention.jpg"
                    alt="Red Isle Produce water retention pond"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-l" />
                  <div className="absolute bottom-6 left-6 lg:hidden">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="font-medium text-green-800">Red Isle Produce</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Grid with Staggered Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <div className="relative h-[350px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold group-hover:text-green-300 transition-colors">{project.title}</h3>
                    <p className="text-white/80 mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="group">
                <Link href="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-700">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
              <path d="M0,0 L100,100" stroke="white" strokeWidth="0.5"></path>
              <path d="M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
              {Array.from({ length: 10 }).map((_, i) => (
                <path key={i} d={`M${i * 10},0 L${i * 10},100`} stroke="white" strokeWidth="0.5" />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <path key={i} d={`M0,${i * 10} L100,${i * 10}`} stroke="white" strokeWidth="0.5" />
              ))}
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.8 }}
          className="container relative z-10 px-4 md:px-6"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to Discuss Your Project?</h2>
            <p className="text-gray-600 md:text-xl/relaxed mb-8 max-w-[700px] mx-auto">
              Contact us today to schedule a consultation and discover how our agricultural engineering expertise can
              benefit your farm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-700 hover:bg-green-800 group">
                <Link href="/contact" className="flex items-center">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Preview with Animated Cards */}
      <section ref={contactRef} className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 mb-16"
          >
            <div className="inline-block bg-green-100 px-4 py-1 rounded-full text-green-800 text-sm font-medium mb-2">
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Contact{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-green-500">
                Information
              </span>
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              We're here to answer your questions and discuss your agricultural engineering needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isContactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.0088673559!2d-63.1389!3d46.2389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52d8e8755555%3A0x829c93d110a5fb6b!2s40%20Hurry%20Rd%2C%20Charlottetown%2C%20PE%20C1E%203C6%2C%20Canada!5e0!3m2!1sen!2sus!4v1715187189!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Linkletter Engineering location"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">Visit Our Office</h3>
                    <p className="text-gray-600">40 Hurry Rd, Charlottetown, PE, C1E 3C6</p>
                  </div>
                  <Button asChild className="group">
                    <Link href="/contact" className="flex items-center">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Dairy Farm Building Design",
    description:
      "Specialized designs for dairy operations focusing on animal comfort, traffic flow, and labor efficiency.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Beef Farm Building Design",
    description:
      "Custom solutions for beef cattle operations with emphasis on structural integrity and operational efficiency.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Swine Farm Building Design",
    description:
      "Innovative building designs for swine operations that prioritize animal welfare and production efficiency.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    title: "Poultry Farm Building Design",
    description: "Advanced poultry housing solutions designed for optimal climate control and bird comfort.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-700"
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
    ),
  },
  {
    title: "Potato Storage Design",
    description:
      "Specialized storage facilities for PEI's potato industry with focus on temperature control and ventilation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-700"
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
    ),
  },
  {
    title: "Agricultural Production Systems",
    description: "Innovative solutions for improving efficiency and productivity in agricultural production systems.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const projects = [
  {
    title: "Modern Dairy Barn",
    description: "Labor-efficient dairy operation with advanced animal comfort features",
    image: "/images/dairy-barn.jpg",
    tags: ["Dairy", "Animal Comfort", "Automation"],
  },
  {
    title: "Poultry Housing Complex",
    description: "Multi-building poultry operation with integrated climate control",
    image: "/images/poultry-complex.jpg",
    tags: ["Poultry", "Climate Control", "Biosecurity"],
  },
  {
    title: "Swine Production Facility",
    description: "Modern swine facility designed for optimal animal welfare",
    image: "/images/swine-facility.jpg",
    tags: ["Swine", "Animal Welfare", "Efficiency"],
  },
]

const contactInfo = [
  {
    title: "Address",
    content: "40 Hurry Rd, Charlottetown, PE, C1E 3C6",
    icon: <MapPin className="h-6 w-6 text-green-700" />,
  },
  {
    title: "Phone",
    content: "(902) 368-3393",
    icon: <Phone className="h-6 w-6 text-green-700" />,
  },
  {
    title: "Email",
    content: "glinkletter@gmail.com",
    icon: <Mail className="h-6 w-6 text-green-700" />,
  },
  {
    title: "Business Hours",
    content: "Monday - Friday, 9:00 am - 4:00 pm",
    icon: <Clock className="h-6 w-6 text-green-700" />,
  },
]
