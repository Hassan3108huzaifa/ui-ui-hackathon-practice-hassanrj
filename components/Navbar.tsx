"use client"

import Link from "next/link"
import { Heart, Search, ShoppingCart, Menu, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const route = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.mobile-menu') && !target.closest('.menu-trigger')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="w-full bg-white relative z-50">
      {/* Top Banner */}
      <div className="w-full bg-black text-white py-3 px-4 flex justify-between items-center text-sm">
        <p className="text-center flex-1 font-medium">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="/shop" className="ml-2 underline">
            ShopNow
          </Link>
        </p>
        <select className="bg-black text-white border-none outline-none cursor-pointer font-medium">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
      
      {/* Main Navigation */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tight">
              Exclusive
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-600",
                  pathname === "/" && "text-black font-semibold"
                )}
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-600",
                  pathname === "/contact" && "text-black font-semibold"
                )}
              >
                Contact
              </Link>
              <Link 
                href="/about" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-600",
                  pathname === "/about" && "text-black font-semibold"
                )}
              >
                About
              </Link>
              <Link 
                href="/sign-up" 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-600",
                  pathname === "/sign-up" && "text-black font-semibold"
                )}
              >
                Sign Up
              </Link>
            </div>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center max-w-xs w-full relative">
                <Input
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-full pr-8 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                />
                <Search className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Button onClick={() => route.push('/wishlist')} variant="ghost" size="icon" className="hidden md:flex hover:bg-gray-100">
                <Heart className="w-5 h-5" />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button onClick={() => route.push('/cart')} variant="ghost" size="icon" className="hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5" />
                <span className="sr-only">Cart</span>
              </Button>
            </div>

            {/* Mobile Search Button */}
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slides from top */}
      <div 
        className={cn(
          "absolute top-0 left-0 right-0 bg-white border-b shadow-lg transform transition-transform duration-300 ease-in-out mobile-menu md:hidden",
          isOpen ? "translate-y-[calc(80%_+_1px)]" : "-translate-y-full"
        )}
      >
        <nav className="px-4 py-6 space-y-4">
          <Link 
            href="/" 
            className={cn(
              "block text-lg font-medium hover:text-gray-600",
              pathname === "/" && "text-black font-semibold"
            )}
          >
            Home
          </Link>
          <Link 
            href="/contact" 
            className={cn(
              "block text-lg font-medium hover:text-gray-600",
              pathname === "/contact" && "text-black font-semibold"
            )}
          >
            Contact
          </Link>
          <Link 
            href="/about" 
            className={cn(
              "block text-lg font-medium hover:text-gray-600",
              pathname === "/about" && "text-black font-semibold"
            )}
          >
            About
          </Link>
          <Link 
            href="/sign-up" 
            className={cn(
              "block text-lg font-medium hover:text-gray-600",
              pathname === "/sign-up" && "text-black font-semibold"
            )}
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  )
}

