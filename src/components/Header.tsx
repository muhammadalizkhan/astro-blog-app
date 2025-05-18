"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const mainLinks = [
    { name: "Latest", href: "#latest" },
    { name: "Feature", href: "#feature" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Categories", href: "#categories" },
    { name: "Company", href: "#company" },
    { name: "Stories", href: "#stories" },
    { name: "News", href: "#news" },
  ]

  return (
    <div className="fixed inset-y-0 left-0 z-50 flex flex-col w-full md:w-64 bg-black text-white">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 md:hidden border-b border-white/10">
        <h1 className="text-xl font-bold">MindRush AI | Research</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-1">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Logo Section */}
      <div className="hidden md:flex items-center p-6 border-b border-white/10">
        <h1 className="text-xl font-bold">MindRush AI</h1>
      </div>

      {/* Navigation */}
      <nav className={`flex-1 overflow-y-auto ${isOpen ? "block" : "hidden md:block"}`}>
        <ul className="py-6 px-4 space-y-4">
          {mainLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="block py-2 hover:text-purple-400 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="hidden md:block p-4 border-t border-white/10">
        <button className="w-full py-2 text-center hover:bg-white/10 rounded transition-colors">Toggle Theme</button>
      </div>
    </div>
  )
}
