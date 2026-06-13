"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function RandomFact() {
  const [fact, setFact] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchFact = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      const data = await response.json()
      setFact(data.text)
    } catch (error) {
      console.error("Failed to fetch fact:", error)
      setFact("Failed to fetch a fact. Please try again.")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <div className="surface relative flex h-56 w-full flex-col items-center justify-center p-4">
      <p className="text-lg text-center text-muted-foreground mb-4 h-24 overflow-y-auto">
        {loading ? "Loading..." : fact}
      </p>
      <Button onClick={fetchFact} disabled={loading}>
        {loading ? "Fetching..." : "Get Another Fact"}
      </Button>
    </div>
  )
}
