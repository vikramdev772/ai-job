import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Job Seekers Column */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Job Seekers</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/search-jobs" className="text-gray-600 hover:text-gray-900">
                  Search Jobs
                </Link>
              </li>
              <li>
                <Link href="/create-resume" className="text-gray-600 hover:text-gray-900">
                  Create Resume
                </Link>
              </li>
              <li>
                <Link href="/job-alert" className="text-gray-600 hover:text-gray-900">
                  Job Alert
                </Link>
              </li>
              <li>
                <Link href="/career-advice" className="text-gray-600 hover:text-gray-900">
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers Column */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Employers</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/post-job" className="text-gray-600 hover:text-gray-900">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/search-resumes" className="text-gray-600 hover:text-gray-900">
                  Search Resumes
                </Link>
              </li>
              <li>
                <Link href="/hiring-solutions" className="text-gray-600 hover:text-gray-900">
                  Hiring Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* JobPortal Column */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">JobPortal</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect with Us Column */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Connect with Us</h2>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-500">
          <p>© 2023 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

