// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { DatePickerWithRange } from "@/components/ui/date-range-picker"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Star, Upload } from "lucide-react"

// // Define the type for hackathon data
// type HackathonData = {
//   title: string;
//   description: string;
//   dateRange: { from: null; to: null; };
//   location: string;
//   maxParticipants: string;
//   requiredSkills: string[]; // Change from never[] to string[]
//   prizes: { place: string; reward: string; }[];
//   sponsorshipPackages: { name: string; amount: number; }[]; // Specify the structure of the objects
//   additionalInfo: string;
//   banner: null;
// };

// // Define a type for the prize
// type Prize = {
//     place: string;
//     reward: string;
// };

// // Define a type for sponsorship packages
// type SponsorshipPackage = {
//     name: string;
//     amount: number;
// };

// interface Package {
//     name: string;
//     amount: number;
//     benefits: string; // Add benefits property
// }

// export default function CreateHackathon() {
//   const [hackathonData, setHackathonData] = useState<HackathonData>({
//     title: '',
//     description: '',
//     dateRange: { from: null, to: null },
//     location: '',
//     maxParticipants: '',
//     requiredSkills: [], // Ensure this is initialized as an empty array
//     prizes: [{ place: '', reward: '' }],
//     sponsorshipPackages: [], // Changed from string to array of objects
//     additionalInfo: '',
//     banner: null,
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setHackathonData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleDateRangeChange = (dateRange) => {
//     setHackathonData(prev => ({ ...prev, dateRange }))
//   }

//   const handleSkillToggle = (skill: string) => { // Specify the type of skill
//     setHackathonData(prev => ({
//       ...prev,
//       requiredSkills: prev.requiredSkills.includes(skill)
//         ? prev.requiredSkills.filter(s => s !== skill)
//         : [...prev.requiredSkills, skill]
//     }))
//   }

//   const handlePrizeChange = (index: number, field: string, value: any) => {
//     const newPrizes: Prize[] = [...hackathonData.prizes];
//     newPrizes[index][field as keyof Prize] = value; // Assert field as a key of Prize
//     setHackathonData(prev => ({ ...prev, prizes: newPrizes }))
//   }

//   const addPrize = () => {
//     setHackathonData(prev => ({
//       ...prev,
//       prizes: [...prev.prizes, { place: '', reward: '' }]
//     }))
//   }

//   const handleSponsorshipChange = (index: number, fieldName: string, value: any) => {
//     const newPackages = [...hackathonData.sponsorshipPackages]
    
//     const field = fieldName as keyof SponsorshipPackage; // Type assertion to ensure correct type
    
//     newPackages[index][field] = value
//     setHackathonData(prev => ({ ...prev, sponsorshipPackages: newPackages }))
//   }

//   const addSponsorshipPackage = () => {
//     setHackathonData(prev => ({
//       ...prev,
//       sponsorshipPackages: [...prev.sponsorshipPackages, { name: '', amount: '', benefits: '' }]
//     }))
//   }

//   const handleBannerUpload = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setHackathonData(prev => ({ ...prev, banner: file }))
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Here you would typically send the hackathonData to your backend
//     console.log("Hackathon data to be submitted:", hackathonData)
//     // Redirect to the organizer dashboard or show a success message
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="/">
//           <Star className="h-6 w-6 mr-2 text-yellow-400" />
//           <span className="font-bold text-xl">HackHub</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/organizer/dashboard">
//             Dashboard
//           </Link>
//           <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/organizer/profile">
//             Profile
//           </Link>
//           <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="/logout">
//             Logout
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1 py-12 px-4 md:px-6">
//         <div className="max-w-4xl mx-auto space-y-8">
//           <h1 className="text-3xl font-bold">Create a New Hackathon</h1>
//           <form onSubmit={handleSubmit} className="space-y-8">
//             <Card className="bg-purple-800/50 border-purple-700">
//               <CardHeader>
//                 <CardTitle>Basic Information</CardTitle>
//                 <CardDescription>Provide the core details of your hackathon</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="title">Hackathon Title</Label>
//                   <Input
//                     id="title"
//                     name="title"
//                     value={hackathonData.title}
//                     onChange={handleInputChange}
//                     className="bg-white/10 border-white/20 text-white"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="description">Description</Label>
//                   <Textarea
//                     id="description"
//                     name="description"
//                     value={hackathonData.description}
//                     onChange={handleInputChange}
//                     className="bg-white/10 border-white/20 text-white"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label>Date Range</Label>
//                   <DatePickerWithRange onDateRangeChange={handleDateRangeChange} />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="location">Location</Label>
//                   <Input
//                     id="location"
//                     name="location"
//                     value={hackathonData.location}
//                     onChange={handleInputChange}
//                     className="bg-white/10 border-white/20 text-white"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="maxParticipants">Maximum Participants</Label>
//                   <Input
//                     id="maxParticipants"
//                     name="maxParticipants"
//                     type="number"
//                     value={hackathonData.maxParticipants}
//                     onChange={handleInputChange}
//                     className="bg-white/10 border-white/20 text-white"
//                     required
//                   />
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-purple-800/50 border-purple-700">
//               <CardHeader>
//                 <CardTitle>Required Skills</CardTitle>
//                 <CardDescription>Select the skills participants should have</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 gap-4">
//                   {['JavaScript', 'Python', 'React', 'Node.js', 'Machine Learning', 'Data Science', 'UI/UX Design', 'Mobile Development'].map((skill) => (
//                     <div key={skill} className="flex items-center space-x-2">
//                       <Checkbox
//                         id={skill}
//                         checked={hackathonData.requiredSkills.includes(skill)}
//                         onCheckedChange={() => handleSkillToggle(skill)}
//                       />
//                       <label
//                         htmlFor={skill}
//                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                       >
//                         {skill}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-purple-800/50 border-purple-700">
//               <CardHeader>
//                 <CardTitle>Prizes</CardTitle>
//                 <CardDescription>Define the prizes for your hackathon</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {hackathonData.prizes.map((prize, index) => (
//                   <div key={index} className="flex space-x-4">
//                     <Input
//                       placeholder="Place (e.g., 1st, 2nd)"
//                       value={prize.place}
//                       onChange={(e) => handlePrizeChange(index, 'place', e.target.value)}
//                       className="bg-white/10 border-white/20 text-white"
//                     />
//                     <Input
//                       placeholder="Reward"
//                       value={prize.reward}
//                       onChange={(e) => handlePrizeChange(index, 'reward', e.target.value)}
//                       className="bg-white/10 border-white/20 text-white"
//                     />
//                   </div>
//                 ))}
//                 <Button type="button" onClick={addPrize} variant="outline">Add Prize</Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-purple-800/50 border-purple-700">
//               <CardHeader>
//                 <CardTitle>Sponsorship Packages</CardTitle>
//                 <CardDescription>Define sponsorship options for companies</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {hackathonData.sponsorshipPackages.map((pkg, index) => (
//                   <div key={index} className="space-y-2">
//                     <Input
//                       placeholder="Package Name"
//                       value={pkg.name}
//                       onChange={(e) => handleSponsorshipChange(index, 'name', e.target.value)}
//                       className="bg-white/10 border-white/20 text-white"
//                     />
//                     <Input
//                       placeholder="Price"
//                       value={pkg.price}
//                       onChange={(e) => handleSponsorshipChange(index, 'price', e.target.value)}
//                       className="bg-white/10 border-white/20 text-white"
//                     />
//                     <Textarea
//                       placeholder="Benefits"
//                       value={pkg.benefits}
//                       onChange={(e) => handleSponsorshipChange(index, 'benefits', e.target.value)}
//                       className="bg-white/10 border-white/20 text-white"
//                     />
//                   </div>
//                 ))}
//                 <Button type="button" onClick={addSponsorshipPackage} variant="outline">Add Package</Button>
//               </CardContent>
//             </Card>

//             <Card className="bg-purple-800/50 border-purple-700">
//               <CardHeader>
//                 <CardTitle>Additional Information</CardTitle>
//                 <CardDescription>Any other details you want to share</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Textarea
//                   name="additionalInfo"
//                   value={hackathonData.additionalInfo}
//                 //   onChange={handleInputChange}
//                   className="bg-white/10 border-white/20 text-white"
//                 />
//               </CardContent>
//             </Card>

//             <Card className="bg-purple-800/50 border-purple-700">
//               <CardHeader>
//                 <CardTitle>Banner Image</CardTitle>
//                 <CardDescription>Upload a banner for your hackathon</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex items-center space-x-4">
//                   <Input
//                     id="banner"
//                     type="file"
//                     accept="image/*"
//                     onChange={handleBannerUpload}
//                     className="bg-white/10 border-white/20 text-white"
//                   />
//                   <Label htmlFor="banner" className="cursor-pointer">
//                     <Upload className="h-6 w-6" />
//                   </Label>
//                 </div>
//                 {hackathonData.banner && (
//                   <p className="mt-2 text-sm text-gray-300">File selected: {hackathonData.banner.name}</p>
//                 )}
//               </CardContent>
//             </Card>

//             <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
//               Create Hackathon
//             </Button>
//           </form>
//         </div>
//       </main>
//     </div>
//   )
// }



import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page