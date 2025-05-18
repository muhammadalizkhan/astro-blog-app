"use client"

import { useState, useEffect } from "react"
import Header from "./Header"

export default function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Listen for sidebar state changes
  useEffect(() => {
    const handleStorageChange = () => {
      const isOpen = localStorage.getItem("sidebarOpen") === "true"
      setSidebarOpen(isOpen)
    }

    // Check initial state
    const initialState = localStorage.getItem("sidebarOpen")
    if (initialState !== null) {
      setSidebarOpen(initialState === "true")
    }

    window.addEventListener("sidebarToggle", handleStorageChange)
    return () => window.removeEventListener("sidebarToggle", handleStorageChange)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Header />

      {/* Main Content */}
      <div
        className="transition-all duration-300 ease-in-out p-6"
        style={{
          marginLeft: sidebarOpen ? "16rem" : "4rem",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome to MindRush AI Research</h1>

          <div className="grid gap-8">
            <section id="latest" className="bg-zinc-900/50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Latest Research</h2>
              <p className="text-zinc-300">Explore our most recent findings and breakthroughs in AI technology.</p>
            </section>

            <section id="feature" className="bg-zinc-900/50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
              <p className="text-zinc-300">Discover our highlighted research projects and innovations.</p>
            </section>

            <section id="about" className="bg-zinc-900/50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">About Our Research</h2>
              <p className="text-zinc-300">Learn about our mission, methodology, and research focus areas.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
