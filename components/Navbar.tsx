"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JobPortal
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/jobs" className="text-gray-600 hover:text-gray-900">
            Find Jobs
          </Link>
          <Link href="/companies" className="text-gray-600 hover:text-gray-900">
            Companies
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
        </nav>

        {/* Action Links */}
        <div className="flex items-center space-x-4">
          <Link href="/post-job" className="text-gray-600 hover:text-gray-900 px-4 py-2 rounded-md transition-colors">
            Post a Job
          </Link>
          <Link
            href="/login"
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors"
          >
            Login / Register
          </Link>
        </div>
      </div>
    </header>
  )
}

