"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="white" strokeWidth="0.1" />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="white" strokeWidth="0.1" />
            ))}
          </svg>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container px-4 md:px-6 pt-16 pb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-green-700 rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
              <path d="M0,0 L100,100" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
              <path d="M100,0 L0,100" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Linkletter Engineering</h2>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest agricultural engineering insights and company updates.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-green-700 hover:bg-gray-100 px-6">Subscribe</Button>
              </form>
              <p className="text-white/60 text-sm mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
                <Image
                  src="/images/logo-white.png"
                  alt="Linkletter Engineering Inc. Logo"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Linkletter Engineering</span>
                <span className="text-sm text-gray-400">Agricultural Solutions</span>
              </div>
            </Link>
            <p className="text-gray-400">
              Professional engineering company specializing in providing the agricultural industry in Prince Edward
              Island with innovative solutions.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com/LinkletterEngineeringInc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/services" label="Services" />
              <FooterLink href="/projects" label="Projects" />
              <FooterLink href="/contact" label="Contact" />
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">Services</h3>
            <nav className="flex flex-col space-y-3">
              <FooterLink href="/services#dairy" label="Dairy Farm Design" />
              <FooterLink href="/services#beef" label="Beef Farm Design" />
              <FooterLink href="/services#swine" label="Swine Farm Design" />
              <FooterLink href="/services#poultry" label="Poultry Farm Design" />
              <FooterLink href="/services#potato" label="Potato Storage Design" />
              <FooterLink href="/services#systems" label="Production Systems" />
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                <span className="text-gray-300">40 Hurry Rd, Charlottetown, PE, C1E 3C6</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                <span className="text-gray-300">(902) 368-3393</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                <span className="text-gray-300">glinkletter@gmail.com</span>
              </div>
              <div className="text-gray-300">
                <p className="font-medium text-white">Business Hours:</p>
                <p>Monday - Friday: 9:00 am - 4:00 pm</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white group"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-gray-800 mt-16 pt-8 text-sm text-center"
        >
          <p>&copy; {new Date().getFullYear()} Linkletter Engineering Inc. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

interface FooterLinkProps {
  href: string
  label: string
}

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link href={href} className="text-gray-400 hover:text-white transition-colors flex items-center group">
      <div className="w-1 h-1 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {label}
    </Link>
  )
}
