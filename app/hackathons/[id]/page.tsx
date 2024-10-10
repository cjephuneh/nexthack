'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {  Clock, Target, Star } from "lucide-react"

export default function HackathonPage({ params }: { params: { id: string } }) {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)

  // Mock data for a single hackathon
  const hackathon = {
    id: params.id,
    title: "AI Innovation Challenge",
    date: "June 15-17, 2024",
    location: "San Francisco, CA",
    participants: 150,
    description: "Join us for an exciting 48-hour hackathon focused on pushing the boundaries of AI innovation. Collaborate with talented individuals, learn from industry experts, and create cutting-edge AI solutions.",
    schedule: [
      { time: "Day 1, 9:00 AM", event: "Opening Ceremony" },
      { time: "Day 1, 10:00 AM", event: "Hacking Begins" },
      { time: "Day 2, 2:00 PM", event: "Mid-point Check-in" },
      { time: "Day 3, 3:00 PM", event: "Project Submissions" },
      { time: "Day 3, 5:00 PM", event: "Closing Ceremony and Awards" },
    ],
    prizes: [
      { place: "1st Place", reward: "$10,000 and mentorship opportunity" },
      { place: "2nd Place", reward: "$5,000 and software licenses" },
      { place: "3rd Place", reward: "$2,500 and hardware kits" },
    ],
    sponsors: ["TechCorp", "AI Innovations Inc.", "Future Labs"],
    additionalInfoRequired: true
  }

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
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{hackathon.title}</h1>
            <p className="text-xl text-gray-300">{hackathon.date} | {hackathon.location}</p>
          </div>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>About This Hackathon</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{hackathon.description}</p>
            </CardContent>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {hackathon.schedule.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Clock className="h-5 w-5 text-yellow-400 mt-0.5" />
                      <div>
                        <span className="font-semibold">{item.time}</span>
                        <span className="block text-sm text-gray-300">{item.event}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Prizes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {hackathon.prizes.map((prize, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Target className="h-5 w-5 text-yellow-400 mt-0.5" />
                      <div>
                        <span className="font-semibold">{prize.place}</span>
                        <span className="block text-sm text-gray-300">{prize.reward}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Sponsors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {hackathon.sponsors.map((sponsor, index) => (
                  <div key={index} className="bg-purple-800/50 px-3 py-1 rounded-full text-sm">
                    {sponsor}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <div className="text-center">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-2" 
                    onClick={() => setIsSignUpModalOpen(true)}>
              Sign Up Now
            </Button>
          </div>
        </div>
      </main>
      <SignUpModal
        hackathon={hackathon}
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
    </div>
  )
}

function SignUpModal({ hackathon, isOpen, onClose }: { hackathon: any; isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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