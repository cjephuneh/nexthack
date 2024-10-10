'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {  MapPin, Users, Search, Star } from "lucide-react"

export default function HackathonsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedHackathon, setSelectedHackathon] = useState<number | null>(null);

  // Mock data for hackathons
  const hackathons = [
    { id: 1, title: "AI Innovation Challenge", date: "June 15-17, 2024", location: "San Francisco, CA", participants: 150, additionalInfoRequired: true },
    { id: 2, title: "Green Tech Hackathon", date: "July 8-10, 2024", location: "New York, NY", participants: 100, additionalInfoRequired: false },
    { id: 3, title: "Blockchain Revolution", date: "August 20-22, 2024", location: "Austin, TX", participants: 120, additionalInfoRequired: true },
    { id: 4, title: "IoT Innovators", date: "September 5-7, 2024", location: "Seattle, WA", participants: 80, additionalInfoRequired: false },
    { id: 5, title: "HealthTech Solutions", date: "October 12-14, 2024", location: "Boston, MA", participants: 200, additionalInfoRequired: true },
    { id: 6, title: "Cybersecurity Challenge", date: "November 18-20, 2024", location: "Washington, D.C.", participants: 100, additionalInfoRequired: false },
  ]

  const filteredHackathons = hackathons.filter(hackathon =>
    hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hackathon.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Star className="h-6 w-6 mr-2 text-yellow-400" />
          <span className="font-bold text-xl">NextHack</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/hackathons">
            Hackathons
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/about">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-8">Discover Hackathons</h1>
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400"
                placeholder="Search hackathons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredHackathons.map((hackathon) => (
              <HackathonCard
                key={hackathon.id}
                hackathon={hackathon}
                onSignUp={() => setSelectedHackathon(hackathon.id)}
              />
            ))}
          </div>
        </div>
      </main>
      <SignUpModal
        hackathon={selectedHackathon}
        onClose={() => setSelectedHackathon(null)}
      />
    </div>
  )
}

function HackathonCard({ hackathon, onSignUp }: { hackathon: any; onSignUp: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex flex-col h-full bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">
            <Link href={`/hackathons/${hackathon.id}`} className="hover:text-yellow-400 transition-colors">
              {hackathon.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-gray-400">{hackathon.date}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
            <MapPin className="h-4 w-4" />
            <span>{hackathon.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Users className="h-4 w-4" />
            <span>{hackathon.participants} participants</span>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={onSignUp}>
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function SignUpModal({ hackathon, onClose }: { hackathon: any; onClose: () => void }) {
  if (!hackathon) return null

  return (
    <Dialog open={!!hackathon} onOpenChange={onClose}>
      <DialogContent className="bg-purple-900 text-white">
        <DialogHeader>
          <DialogTitle>Sign Up for {hackathon.title}</DialogTitle>
          <DialogDescription>
            Please provide the following information to complete your registration.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3 bg-white/10 border-white/20 text-white" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3 bg-white/10 border-white/20 text-white" />
          </div>
          {hackathon.additionalInfoRequired && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="experience" className="text-right">
                Relevant Experience
              </Label>
              <Textarea id="experience" className="col-span-3 bg-white/10 border-white/20 text-white" />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-500">Confirm Registration</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}