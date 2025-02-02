"use client"

import Link from "next/link"
import { Search } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Search from millions of jobs, salary information, company reviews, and more.
          </p>

          {/* Search Form */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Job title, skills, or company"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="City, state, or zip"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Job Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={`/jobs/${category.title.toLowerCase()}`}
                className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.jobs} jobs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const categories = [
  { title: "Technology", jobs: "1000+" },
  { title: "Healthcare", jobs: "1000+" },
  { title: "Finance", jobs: "1000+" },
  { title: "Education", jobs: "1000+" },
  { title: "Marketing", jobs: "1000+" },
  { title: "Sales", jobs: "1000+" },
  { title: "Engineering", jobs: "1000+" },
  { title: "Customer Service", jobs: "1000+" },
]

