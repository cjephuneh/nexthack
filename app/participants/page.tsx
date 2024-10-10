'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Users, Trophy, Star, Code, Rocket } from "lucide-react"

export default function ParticipantDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Star className="h-6 w-6 mr-2 text-yellow-400" />
          <span className="font-bold text-xl">HackHub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/participant/dashboard">
            Dashboard
          </Link> */}
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/participants/profile">
            Profile
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/hackathons">
            Find Hackathons
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/logout">
            Logout
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Participant Dashboard</h1>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-purple-800/50 text-white">
              <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>Overview</TabsTrigger>
              <TabsTrigger value="upcoming" onClick={() => setActiveTab("upcoming")}>Upcoming Hackathons</TabsTrigger>
              <TabsTrigger value="past" onClick={() => setActiveTab("past")}>Past Hackathons</TabsTrigger>
              <TabsTrigger value="achievements" onClick={() => setActiveTab("achievements")}>Achievements</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <OverviewSection />
            </TabsContent>
            <TabsContent value="upcoming" className="space-y-4">
              <UpcomingHackathonsSection />
            </TabsContent>
            <TabsContent value="past" className="space-y-4">
              <PastHackathonsSection />
            </TabsContent>
            <TabsContent value="achievements" className="space-y-4">
              <AchievementsSection />
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
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-gray-400">Participated in 12 hackathons</p>
        </CardContent>
      </Card>
      <Card className="bg-purple-800/50 border-purple-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Team Collaborations</CardTitle>
          <Users className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">48</div>
          <p className="text-xs text-gray-400">Collaborated with 48 participants</p>
        </CardContent>
      </Card>
      <Card className="bg-purple-800/50 border-purple-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Achievements</CardTitle>
          <Trophy className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-gray-400">Earned 5 achievements</p>
        </CardContent>
      </Card>
      <Card className="bg-purple-800/50 border-purple-700">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Upcoming Event</CardTitle>
          <Rocket className="h-4 w-4 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">AI Innovation Challenge</div>
          <p className="text-xs text-gray-400">Starts in 3 days</p>
        </CardContent>
      </Card>
    </div>
  )
}

function UpcomingHackathonsSection() {
  const upcomingHackathons = [
    { id: 1, title: "AI Innovation Challenge", date: "June 15-17, 2024", status: "Registered" },
    { id: 2, title: "Green Tech Hackathon", date: "July 8-10, 2024", status: "Open for Registration" },
    { id: 3, title: "Blockchain Revolution", date: "August 20-22, 2024", status: "Interested" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Upcoming Hackathons</h2>
      {upcomingHackathons.map((hackathon) => (
        <Card key={hackathon.id} className="bg-purple-800/50 border-purple-700">
          <CardHeader>
            <CardTitle>{hackathon.title}</CardTitle>
            <CardDescription>{hackathon.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">Status: {hackathon.status}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
              {hackathon.status === "Open for Registration" ? "Register Now" : "View Details"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function PastHackathonsSection() {
  const pastHackathons = [
    { id: 1, title: "Web3 Innovators Hackathon", date: "March 1-3, 2024", result: "2nd Place" },
    { id: 2, title: "HealthTech Solutions", date: "April 5-7, 2024", result: "Participation" },
    { id: 3, title: "Sustainable Cities Hack", date: "May 10-12, 2024", result: "1st Place" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Past Hackathons</h2>
      {pastHackathons.map((hackathon) => (
        <Card key={hackathon.id} className="bg-purple-800/50 border-purple-700">
          <CardHeader>
            <CardTitle>{hackathon.title}</CardTitle>
            <CardDescription>{hackathon.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-semibold">Result: {hackathon.result}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">View Project</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

function AchievementsSection() {
  const achievements = [
    { id: 1, title: "First Hackathon", description: "Participated in your first hackathon", icon: <Rocket className="h-8 w-8 text-yellow-400" /> },
    { id: 2, title: "Team Player", description: "Collaborated with 10 different teammates", icon: <Users className="h-8 w-8 text-yellow-400" /> },
    { id: 3, title: "Code Warrior", description: "Submitted 5 projects", icon: <Code className="h-8 w-8 text-yellow-400" /> },
    { id: 4, title: "Innovation Master", description: "Won first place in a hackathon", icon: <Trophy className="h-8 w-8 text-yellow-400" /> },
    { id: 5, title: "Hackathon Veteran", description: "Participated in 10 hackathons", icon: <Star className="h-8 w-8 text-yellow-400" /> },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Achievements</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="bg-purple-800/50 border-purple-700">
            <CardHeader>
              <div className="flex items-center space-x-4">
                {achievement.icon}
                <CardTitle>{achievement.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}