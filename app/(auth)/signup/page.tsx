'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Star } from "lucide-react"
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast' // Import toast

export default function Signup() {
  const [userType, setUserType] = useState('participant')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: userType, // Use userType for role
      }),
    })

    if (response.ok) {
      const data = await response.json()
      console.log("User registered successfully:", data)
      toast.success("Registration successful!"); // Show success toast

      // Store the token in localStorage
      if (data.token) { // Assuming the token is returned in the response
        localStorage.setItem('authToken', data.token); // Store the token
      } else {
        console.error("Token is missing in the response"); // Handle missing token
        toast.error("Registration failed: Token is missing in the response"); // Show error toast
        return;
      }

      // Redirect based on user type
      if (userType === 'organizer') {
        router.push('/organiser'); // Redirect to organizer dashboard
      } else {
        router.push('/participants'); // Redirect to participant dashboard
      }
    } else {
      console.error("Registration failed:", response.statusText)
      toast.error("Registration failed: " + response.statusText); // Show error toast
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
              <CardTitle>Sign Up for NextHack</CardTitle>
              <CardDescription>Join the community of innovators and creators</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
              {/* <form  className="space-y-4"> */}

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white"
                    required
                  />
                </div>
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
                <div className="space-y-2">
                  <Label>I am a:</Label>
                  <RadioGroup defaultValue="participant" onValueChange={setUserType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="participant" id="participant" />
                      <Label htmlFor="participant">Participant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="organizer" id="organizer" />
                      <Label htmlFor="organizer">Organizer</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                  Sign Up
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-center w-full">
                Already have an account?{" "}
                <Link href="/signin" className="text-yellow-400 hover:underline">
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
