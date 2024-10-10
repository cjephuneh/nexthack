'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Users, Trophy, Star, BarChart2, PlusCircle, Settings } from "lucide-react"

export default function OrganizerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Star className="h-6 w-6 mr-2 text-yellow-400" />
          <span className="font-bold text-xl">HackHub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/organizer/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/organizer/profile">
            Profile
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/logout">
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Organizer Dashboard</h1>
            <Link href="/organizer/create-hackathon">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                <PlusCircle className="mr-2 h-4 w-4" /> Create New Hackathon
              </Button>
            </Link>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-purple-800/50 text-white">
              <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>Overview</TabsTrigger>
              <TabsTrigger value="hackathons" onClick={() => setActiveTab("hackathons")}>Hackathons</TabsTrigger>
              <TabsTrigger value="participants" onClick={() => setActiveTab("participants")}>Participants</TabsTrigger>
              <TabsTrigger value="analytics" onClick={() => setActiveTab("analytics")}>Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <OverviewSection />
            </TabsContent>
            <TabsContent value="hackathons" className="space-y-4">
              <HackathonsSection />
            </TabsContent>
            <TabsContent value="participants" className="space-y-4">
              <ParticipantsSection />
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <AnalyticsSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function OverviewSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-purple-800/50 border-purple-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Hackathons</CardTitle>
          <CalendarDays className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8</div>
          <p className="text-xs text-gray-400">2 ongoing, 6 completed</p>
        </CardContent>
      </Card>
      <Card className="bg-purple-800/50 border-purple-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
          <Users className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-gray-400">+10% from last month</p>
        </CardContent>
      </Card>
      <Card className="bg-purple-800/50 border-purple-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Projects Submitted</CardTitle>
          <Trophy className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">342</div>
          <p className="text-xs text-gray-400">Across all hackathons</p>
        </CardContent>
      </Card>
      <Card className="bg-purple-800/50 border-purple-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Satisfaction</CardTitle>
          <Star className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.8/5</div>
          <p className="text-xs text-gray-400">Based on participant feedback</p>
        </CardContent>
      </Card>
    </div>
  )
}

function HackathonsSection() {
  const hackathons = [
    { id: 1, title: "AI Innovation Challenge", date: "June 15-17, 2024", status: "Upcoming", participants: 150 },
    { id: 2, title: "Green Tech Hackathon", date: "July 8-10, 2024", status: "Open for Registration", participants: 100 },
    { id: 3, title: "Blockchain Revolution", date: "May 1-3, 2024", status: "Completed", participants: 200 },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Hackathons</h2>
      {hackathons.map((hackathon) => (
        <Card key={hackathon.id} className="bg-purple-800/50 border-purple-700">
          <CardHeader>
            <CardTitle>{hackathon.title}</CardTitle>
            <CardDescription>{hackathon.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">Status: {hackathon.status}</p>
            <p className="text-sm text-gray-400">{hackathon.participants} participants</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">View Details</Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              {hackathon.status === "Completed" ? "View Results" : "Manage"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function ParticipantsSection() {
  const participants = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", hackathons: 3 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", hackathons: 2 },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", hackathons: 4 },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Recent Participants</h2>
      <Card className="bg-purple-800/50 border-purple-700">
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-700">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Hackathons</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant) => (
                <tr key={participant.id} className="border-b border-purple-700 last:border-b-0">
                  <td className="p-4">{participant.name}</td>
                  <td className="p-4">{participant.email}</td>
                  <td className="p-4">{participant.hackathons}</td>
                  <td className="p-4">
                    <Button variant="outline" size="sm">View Profile</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
        <CardFooter>
          <Button className="w-full">View All Participants</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function AnalyticsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Analytics</h2>
      <Card className="bg-purple-800/50 border-purple-700">
        <CardHeader>
          <CardTitle>Participant Growth</CardTitle>
          <CardDescription>Last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center">
            <BarChart2 className="h-full w-full text-yellow-400" />
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-purple-800/50 border-purple-700">
          <CardHeader>
            <CardTitle>Popular Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>React</span>
                <span>35%</span>
              </div>
              <div className="flex justify-between">
                <span>Python</span>
                <span>28%</span>
              </div>
              <div className="flex justify-between">
                <span>Node.js</span>
                <span>20%</span>
              </div>
              <div className="flex justify-between">
                <span>TensorFlow</span>
                <span>17%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-purple-800/50 border-purple-700">
          <CardHeader>
            <CardTitle>Participant Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Students</span>
                <span>60%</span>
              </div>
              <div className="flex justify-between">
                <span>Professionals</span>
                <span>30%</span>
              </div>
              <div className="flex justify-between">
                <span>Others</span>
                <span>10%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}