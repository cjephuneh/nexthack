'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"
import { toast } from 'react-hot-toast' // Import toast
import { useRouter } from 'next/navigation' // Import useRouter for navigation

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const router = useRouter() // Initialize router

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      console.log("Login successful:", data)
      toast.success("Login successful!") // Show success toast

      // Store the token in localStorage
      if (data.token) { // Assuming the token is returned in the response
        localStorage.setItem('authToken', data.token); // Store the token
      } else {
        throw new Error('Token is missing in the response'); // Handle missing token
      }

      // Check user type and redirect accordingly
      if (data.userType) { // Check if userType exists
        if (data.userType === 'organizer') {
          router.push('/organiser'); // Redirect to organizer dashboard
        } else if (data.userType === 'participant') {
          router.push('/participants'); // Redirect to participant dashboard
        } else {
          throw new Error('Invalid user type: ' + data.userType); // More specific error
        }
      } else {
        throw new Error('User type is missing in the response'); // Handle missing userType
      }
      
    } catch (error) {
      const errorMessage = (error as Error).message; // Type assertion
      console.error("Error during login:", errorMessage)
      toast.error("Error during login: " + errorMessage) // Show error toast
      
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Star className="h-6 w-6 mr-2 text-yellow-400" />
          <span className="font-bold text-xl">HackHub</span>
        </Link>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto space-y-8"
        >
          <Card className="bg-purple-800/50 border-purple-700">
            <CardHeader>
              <CardTitle>Log in to HackHub</CardTitle>
              <CardDescription>Welcome back to the community of innovators</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                  Log In
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Link href="/auth/forgot-password" className="text-sm text-yellow-400 hover:underline">
                Forgot your password?
              </Link>
              <p className="text-sm text-center w-full">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-yellow-400 hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
