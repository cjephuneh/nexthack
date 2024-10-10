'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Users, Search, Star, Trophy, Clock, Mail } from "lucide-react"

interface HackathonCardProps {
  title: string
  date: string
  location: string
  participants: string
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-purple-900 text-white ">
      <header className=" lg:px-6 h-14 flex items-center ">
        <Link className="flex items-center justify-center" href="#">
          <Star className="h-6 w-6 mr-2 text-yellow-400" />
          <span className="font-bold text-xl">NextHack</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/hackathons">
            Find Events
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            Organize
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <HeroSection mounted={mounted} />
        <StatsSection />
        <UpcomingHackathonsSection />
        <PastHackathonsSection />
        <FeaturedProjectsSection />
        <TestimonialsSection />
        <EmailSignupSection />
        <SponsorsSection />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10">
        <p className="text-xs text-gray-400">© 2024 NextHack. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function HeroSection({ mounted }: { mounted: boolean }) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden ">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
              Discover Your Next Hackathon Adventure
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
              Find local hackathons, showcase your skills, and connect with like-minded innovators.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-sm space-y-2"
          >
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400" placeholder="Search hackathons..." type="search" />
              <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-500">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      {mounted && (
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900/50 backdrop-blur-lg ">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatCard number="500+" label="Hackathons" icon={<Trophy className="h-6 w-6 mb-2 mx-auto text-yellow-400" />} />
          <StatCard number="50,000+" label="Participants" icon={<Users className="h-6 w-6 mb-2 mx-auto text-yellow-400" />} />
          <StatCard number="10,000+" label="Projects" icon={<Star />} />
          <StatCard number="1M+" label="Lines of Code" icon={<Code />} />
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="text-3xl font-bold">{number}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  )
}

function UpcomingHackathonsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-lg ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-400">Upcoming Hackathons</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <HackathonCard
            title="AI Innovation Challenge"
            date="June 15-17, 2024"
            location="San Francisco, CA"
            participants="150"
          />
          <HackathonCard
            title="Green Tech Hackathon"
            date="July 8-10, 2024"
            location="New York, NY"
            participants="100"
          />
          <HackathonCard
            title="Blockchain Revolution"
            date="August 20-22, 2024"
            location="Austin, TX"
            participants="120"
          />
        </div>
        <div className="text-center mt-8">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">View All Upcoming Hackathons</Button>
        </div>
      </div>
    </section>
  )
}

function PastHackathonsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900/30 backdrop-blur-lg ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Past Hackathons</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PastHackathonCard
            title="Web3 Innovators Hackathon"
            date="March 1-3, 2024"
            participants={200}
            projects={["45"]}
          />
          <PastHackathonCard
            title="HealthTech Solutions"
            date="April 5-7, 2024"
            participants={180}
            projects={["38"]}
          />
          <PastHackathonCard
            title="Sustainable Cities Hack"
            date="May 10-12, 2024"
            participants={160}
            projects={["42"]}
          />
        </div>
        <div className="text-center mt-8">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">Explore Past Hackathons</Button>
        </div>
      </div>
    </section>
  )
}

function FeaturedProjectsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-lg ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="EcoTrack"
            description="A mobile app that helps users reduce their carbon footprint through daily challenges and tips."
            team="Green Coders"
            hackathon="Sustainable Cities Hack"
          />
          <ProjectCard
            title="MedConnect"
            description="An AI-powered platform connecting patients with suitable clinical trials based on their medical history."
            team="Health Innovators"
            hackathon="HealthTech Solutions"
          />
          <ProjectCard
            title="CryptoVote"
            description="A blockchain-based voting system ensuring transparency and security in elections."
            team="Blockchain Builders"
            hackathon="Web3 Innovators Hackathon"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900/30 backdrop-blur-lg ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">What Participants Say</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="NextHack helped me find my dream hackathon and launch my startup!"
            author="Sarah L."
            role="Founder, TechStart"
          />
          <TestimonialCard
            quote="The connections I made at NextHack events have been invaluable to my career."
            author="Michael R."
            role="Senior Developer, Google"
          />
          <TestimonialCard
            quote="Organizing a hackathon was a breeze with NextHack's tools and support."
            author="Emily T."
            role="Event Organizer, TechCon"
          />
        </div>
      </div>
    </section>
  )
}

function EmailSignupSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black/50 backdrop-blur-lg ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">Stay Updated</h2>
          <p className="max-w-[600px] text-gray-300 md:text-xl">Get notified about new hackathons and exciting opportunities. Join our community today!</p>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400" placeholder="Enter your email" type="email" />
              <Button type="submit" className="bg-green-500 text-black hover:bg-green-600">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function SponsorsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900/30 backdrop-blur-lg">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-purple-400">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <SponsorLogo name="TechCorp" />
          <SponsorLogo name="InnovateCo" />
          <SponsorLogo name="FutureTech" />
          <SponsorLogo  name="CodeMasters" />
          <SponsorLogo name="DevWorld" />
        </div>
      </div>
    </section>
  )
}

function HackathonCard({ title, date, location, participants } : HackathonCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex flex-col h-full bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription className="text-gray-400">{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Users className="h-4 w-4" />
            <span>{participants} participants</span>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function PastHackathonCard({ title, date, participants, projects }: { 
  title: string; 
  date: string; 
  participants: number; 
  projects: string[]; 
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex flex-col h-full bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription className="text-gray-400">{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
            <Users className="h-4 w-4" />
            <span>{participants} participants</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Star className="h-4 w-4" />
            <span>{projects.length} projects submitted</span>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">View Results</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function ProjectCard({ title, description, team, hackathon }: { title: string; description: string; team: string; hackathon: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="flex flex-col h-full bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription className="text-gray-400">by {team}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">{description}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="w-full text-sm text-gray-400">
            <Trophy className="h-4 w-4 inline mr-2" />
            Winner at {hackathon}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <Card className="flex flex-col h-full bg-white/5 border-white/10 backdrop-blur-sm">
      <CardContent className="pt-6">
        <blockquote className="text-lg text-gray-300 italic">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="mt-auto">
        <div>
          <p className="font-semibold text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}

function SponsorLogo({ name }: { name: string }) {
  return (
    <div className="bg-white/10 p-4 rounded-lg">
      <span className="text-2xl font-bold text-gray-300">{name}</span>
    </div>
  )
}

function Code(props: { /* define your prop types here */ }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}