'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiMusic, FiUpload, FiCpu, FiDollarSign, FiCode } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navLinks = [
    { href: '/', label: 'Home', icon: <FiMusic /> },
    { href: '/upload', label: 'Upload', icon: <FiUpload /> },
    { href: '/models', label: 'Models', icon: <FiCpu /> },
    { href: '/pricing', label: 'Pricing', icon: <FiDollarSign /> },
    { href: '/api', label: 'API', icon: <FiCode /> }
  ]
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="inline-block p-2 bg-primary-600 rounded-lg mr-2">
              <FiMusic className="h-6 w-6 text-white" />
            </span>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
              AudioSeparator
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <Link 
                key={i}
                href={link.href} 
                className="px-4 py-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors flex items-center"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/upload" 
              className="ml-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 border-t mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <Link 
                    key={i}
                    href={link.href} 
                    className="flex items-center px-4 py-3 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t">
                  <Link 
                    href="/upload" 
                    className="block w-full text-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}