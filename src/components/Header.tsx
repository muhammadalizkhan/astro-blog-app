"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(true)

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
    <div className="fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-black text-white">
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <h1 className="text-xl font-light">@mindrushai</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-6 h-6 rounded-sm border border-white/20"
        >
          {isOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
      </div>
      <nav
        className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="py-6 space-y-1">
          {mainLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="block py-2 px-6 hover:bg-white/5 transition-colors relative group">
                {link.name}
                <span className="absolute bottom-0 left-6 right-6 h-[1px] bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
