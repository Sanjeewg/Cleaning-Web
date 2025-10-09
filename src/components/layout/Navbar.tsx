'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Close } from '@/assets/icons'

interface NavItem {
  name: string
  href: string
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Trigger slide-down animation only after component mounts
    setIsMounted(true)
    setIsVisible(true)
  }, [])

  return (
    <nav className={`floating-nav ${isMounted && isVisible ? 'animate-slide-down' : ''}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="navbar-brand flex items-center">
            <Image
              src="/images/LogoCleaning.png"
              alt="Three Boys Cleaning Services Logo"
              width={60}
              height={60}
              className="navbar-logo me-2"
            />
            <span className="company-name">Three Boys Cleaning Limited</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link px-3 py-2 rounded-full text-black font-medium hover:bg-white/40 hover:text-gray-800 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg bg-white/30 hover:bg-white/50 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <Close size={24} className="text-black" />
            ) : (
              <Menu size={24} className="text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 bg-white/30 backdrop-blur-md rounded-2xl">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link block px-4 py-3 text-center text-black font-medium hover:bg-white/40 rounded-full transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}