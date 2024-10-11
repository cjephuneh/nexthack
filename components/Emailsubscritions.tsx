'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"


export default function EmailSubscriptionCTA() {
    const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/subscriptions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast({
          title: "Subscribed!",
          description: "You'll now receive updates about upcoming hackathons.",
        })
        setEmail('')
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Stay Updated on Upcoming Hackathons
        </h2>
        <p className="mt-4 text-lg">
          Subscribe to our newsletter and never miss an opportunity to innovate and collaborate.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-5 py-3 border-white focus:ring-offset-purple-900"
          />
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button type="submit" disabled={isLoading} className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-500">
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}