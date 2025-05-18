"use client"

import { ChevronLeft, ChevronRight, Menu } from "lucide-react"

interface HeaderProps {
  sidebarOpen: boolean
  isMobile: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Header({ sidebarOpen, isMobile, setSidebarOpen }: HeaderProps) {
  const mainLinks = [
    { name: "Latest", href: "#latest" },
    { name: "Feature", href: "#feature" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Categories", href: "#categories" },
    { name: "Company", href: "#company" },
    { name: "Stories", href: "#stories" },
    { name: "News", href: "#news" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Resources", href: "#resources" },
  ]

  return (
    <>
      {/* Topbar (for mobile when sidebar is closed) */}
      {!sidebarOpen && isMobile && (
        <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-black text-white h-16 px-4 shadow-md border-b border-white/10">
          <h1 className="text-xl font-light">@mindrushai</h1>
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Desktop Open Sidebar Button */}
      {!sidebarOpen && !isMobile && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 w-10 h-10 flex items-center justify-center bg-black border border-white/20 rounded-md hover:bg-white/10 transition shadow"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 h-16 border-b border-white/10">
          <h1 className="text-xl font-light">@mindrushai</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-sm hover:bg-white/10 transition"
            aria-label="Close menu"
          >
            <ChevronLeft size={16} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto no-scrollbar">
          <ul className="py-4">
            {mainLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 px-4 hover:bg-white/10 transition-colors"
                  onClick={() => isMobile && setSidebarOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}