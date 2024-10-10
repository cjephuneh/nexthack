'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, User, Mail, Globe, Github, Linkedin } from "lucide-react"

export default function ParticipantProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Passionate developer with a keen interest in AI and blockchain technologies. Always excited to learn and collaborate on innovative projects.",
    skills: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
    website: "https://janedoe.dev",
    github: "janedoe",
    linkedin: "jane-doe"
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }))
  }

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value.split(',').map(skill => skill.trim())
    setProfile(prevProfile => ({
      ...prevProfile,
      skills
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the updated profile to your backend
    console.log("Updated profile:", profile)
    setIsEditing(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Star className="h-6 w-6 mr-2 text-yellow-400" />
          <span className="font-bold text-xl">HackHub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/participant/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/participant/profile">
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
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Your Profile</h1>
          <Card className="bg-purple-800/50 border-purple-700">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Manage your personal details and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="col-span-3 bg-white/10 border-white/20 text-white"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid  grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      className="col-span-3 bg-white/10 border-white/20 text-white"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="bio" className="text-right">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={profile.bio}
                    //   onChange={handleInputChange}
                      className="col-span-3 bg-white/10 border-white/20 text-white"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="skills" className="text-right">
                      Skills
                    </Label>
                    <Input
                      id="skills"
                      name="skills"
                      value={profile.skills.join(', ')}
                      onChange={handleSkillsChange}
                      className="col-span-3 bg-white/10 border-white/20 text-white"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="website" className="text-right">
                      Website
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      value={profile.website}
                      onChange={handleInputChange}
                      className="col-span-3 bg-white/10 border-white/20 text-white"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="github" className="text-right">
                      GitHub
                    </Label>
                    <Input
                      id="github"
                      name="github"
                      value={profile.github}
                      onChange={handleInputChange}
                      className="col-span-3 bg-white/10 border-white/20 text-white"
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="linkedin" className="text-right">
                      LinkedIn
                    </Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={profile.linkedin}
                      onChange={handleInputChange}
                      className="col-span-3 bg-white/10 border-white/20 text-white"
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                {isEditing && (
                  <div className="mt-6 flex justify-end space-x-4">
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-500">
                      Save Changes
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
            {!isEditing && (
              <CardFooter>
                <Button onClick={() => setIsEditing(true)} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Edit Profile
                </Button>
              </CardFooter>
            )}
          </Card>
          <Card className="bg-purple-800/50 border-purple-700">
            <CardHeader>
              <CardTitle>Public Profile</CardTitle>
              <CardDescription>This is how others will see your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <User className="h-6 w-6 text-yellow-400" />
                  <span>{profile.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="h-6 w-6 text-yellow-400 mt-1" />
                  <p>{profile.bio}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span key={index} className="bg-purple-700 px-2 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <Globe className="h-6 w-6 text-yellow-400" />
                  <a href={profile.website} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                    {profile.website}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-6 w-6 text-yellow-400" />
                  <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                    {profile.github}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-yellow-400" />
                  <a href={`https://www.linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                    {profile.linkedin}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}