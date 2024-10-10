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

export default function Signup() {
  const [userType, setUserType] = useState('participant')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form data to be submitted:", { ...formData, userType })
    // Redirect to the appropriate dashboard or show a success message
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
              <CardTitle>Sign Up for HackHub</CardTitle>
              <CardDescription>Join the community of innovators and creators</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
              <form  className="space-y-4">

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
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
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
                <Link href="/auth/login" className="text-yellow-400 hover:underline">
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