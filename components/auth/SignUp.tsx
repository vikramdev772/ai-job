"use client"

import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

const SignUp = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null) // Reset error state

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
      consultantId: formData.get("consultantId"),
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })

        const result = await response.json()

        if (response.ok) {
          alert("Signup successful!")
          router.push("/login")
        } else {
          setError(result.error || "Something went wrong")
        }
      } catch (err) {
        setError("Something went wrong, please try again.")
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input id="name" name="name" type="text" required className="w-full px-3 py-2 border rounded-md shadow-sm" />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address <span className="text-red-500">*</span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 border rounded-md shadow-sm" />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input id="phone" name="phone" type="tel" pattern="[0-9]{10}" required className="w-full px-3 py-2 border rounded-md shadow-sm" placeholder="1234567890" />
            </div>

            {/* Password Field */}
            <div>
  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    Password <span className="text-red-500">*</span>
  </label>
  <input
    id="password"
    name="password"
    type="password"
    autoComplete="new-password"
    minLength={6} // Ensures at least 6 characters
    required
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  />
</div>

            {/* Consultant ID Field */}
            <div>
              <label htmlFor="consultantId" className="block text-sm font-medium text-gray-700">
                Consultant ID (optional)
              </label>
              <input id="consultantId" name="consultantId" type="text" className="w-full px-3 py-2 border rounded-md shadow-sm" />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Sign Up Button */}
            <button type="submit" disabled={isPending} className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
              {isPending ? "Signing up..." : "Sign Up"}
            </button>

            {/* Login Link */}
            <div className="text-center text-sm">
              <span className="text-gray-600">Already have an account? </span>
              <button type="button" onClick={() => router.push("/login")} className="font-medium text-blue-600 hover:text-blue-500">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
