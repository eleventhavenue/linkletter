"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 relative z-10">
          <div
            className={`relative h-10 w-10 overflow-hidden rounded-full transition-all duration-300 ${
              scrolled ? "bg-green-600" : "bg-white/90"
            }`}
          >
            <Image
              src={scrolled ? "/images/logo-white.png" : "/images/logo.png"}
              alt="Linkletter Engineering Inc. Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-lg font-bold transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Linkletter Engineering
            </span>
            <span className={`text-xs transition-colors duration-300 ${scrolled ? "text-gray-500" : "text-white/80"}`}>
              Agricultural Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink href="/" label="Home" scrolled={scrolled} />

          <div className="relative group">
            <button
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-green-700 hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => toggleDropdown("about")}
              onMouseEnter={() => setActiveDropdown("about")}
            >
              About Us
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            <AnimatePresence>
              {(activeDropdown === "about" || activeDropdown === null) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: activeDropdown === "about" ? 1 : 0, y: activeDropdown === "about" ? 0 : 10 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50 ${
                    activeDropdown === "about" ? "block" : "hidden"
                  }`}
                  onMouseLeave={closeDropdown}
                >
                  <div className="py-1">
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Company Overview
                    </Link>
                    <Link
                      href="/about#leadership"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Leadership
                    </Link>
                    <Link
                      href="/about#approach"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Our Approach
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative group">
            <button
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-green-700 hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => toggleDropdown("services")}
              onMouseEnter={() => setActiveDropdown("services")}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            <AnimatePresence>
              {(activeDropdown === "services" || activeDropdown === null) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: activeDropdown === "services" ? 1 : 0,
                    y: activeDropdown === "services" ? 0 : 10,
                  }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50 ${
                    activeDropdown === "services" ? "block" : "hidden"
                  }`}
                  onMouseLeave={closeDropdown}
                >
                  <div className="py-1">
                    <Link
                      href="/services#dairy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Dairy Farm Building Design
                    </Link>
                    <Link
                      href="/services#beef"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Beef Farm Building Design
                    </Link>
                    <Link
                      href="/services#swine"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Swine Farm Building Design
                    </Link>
                    <Link
                      href="/services#poultry"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Poultry Farm Building Design
                    </Link>
                    <Link
                      href="/services#potato"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={closeDropdown}
                    >
                      Potato Storage Design
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/projects" label="Projects" scrolled={scrolled} />
          <NavLink href="/contact" label="Contact" scrolled={scrolled} />
        </nav>

        <div className="hidden lg:flex">
          <Button asChild className={scrolled ? "" : "bg-white text-green-700 hover:bg-white/90"}>
            <Link href="/contact">Get a Consultation</Link>
          </Button>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 lg:hidden relative z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
          )}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container px-4 py-4">
              <nav className="flex flex-col space-y-1">
                <MobileNavLink href="/" label="Home" onClick={() => setIsMenuOpen(false)} />

                <div className="border-b border-gray-100 py-2">
                  <div className="font-medium text-sm text-gray-500 px-4 py-2">About Us</div>
                  <div className="pl-4">
                    <MobileNavLink href="/about" label="Company Overview" onClick={() => setIsMenuOpen(false)} />
                    <MobileNavLink href="/about#leadership" label="Leadership" onClick={() => setIsMenuOpen(false)} />
                    <MobileNavLink href="/about#approach" label="Our Approach" onClick={() => setIsMenuOpen(false)} />
                  </div>
                </div>

                <div className="border-b border-gray-100 py-2">
                  <div className="font-medium text-sm text-gray-500 px-4 py-2">Services</div>
                  <div className="pl-4">
                    <MobileNavLink
                      href="/services#dairy"
                      label="Dairy Farm Design"
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <MobileNavLink
                      href="/services#beef"
                      label="Beef Farm Design"
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <MobileNavLink
                      href="/services#swine"
                      label="Swine Farm Design"
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <MobileNavLink
                      href="/services#poultry"
                      label="Poultry Farm Design"
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <MobileNavLink
                      href="/services#potato"
                      label="Potato Storage Design"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                </div>

                <MobileNavLink href="/projects" label="Projects" onClick={() => setIsMenuOpen(false)} />
                <MobileNavLink href="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />

                <Button asChild className="w-full mt-4">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get a Consultation
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

interface NavLinkProps {
  href: string
  label: string
  scrolled: boolean
}

function NavLink({ href, label, scrolled }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        scrolled
          ? "text-gray-700 hover:text-green-700 hover:bg-gray-100"
          : "text-white/90 hover:text-white hover:bg-white/10"
      }`}
    >
      {label}
    </Link>
  )
}

interface MobileNavLinkProps {
  href: string
  label: string
  onClick: () => void
}

function MobileNavLink({ href, label, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}
