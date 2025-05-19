"use client"

import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface HeaderProps {
  sidebarOpen: boolean
  isMobile: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Header({ sidebarOpen, isMobile, setSidebarOpen }: HeaderProps) {
  const groupedLinks = [
    {
      title: "MindRush Core",
      links: [
        { name: "Latest", href: "#latest" },
        { name: "Feature", href: "#feature" },
        { name: "Projects", href: "#projects" },
        { name: "Publications", href: "#publications" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "MindRush Development",
      links: [
        { name: "AI Development", href: "#contact" },
        { name: "LLM Agents", href: "#categories" },
        { name: "Software Development", href: "#company" },
        { name: "Ecommerce", href: "#stories" },
        { name: "Product Development", href: "#news" },
        { name: "UI UX Trends", href: "#research" },
      ]
    },
    {
      title: "MindRush Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Tutorials", href: "#tutorials" },
        { name: "Guides", href: "#guides" },
        { name: "Templates", href: "#templates" },
        { name: "Checklists", href: "#checklists" },
        { name: "Toolkits", href: "#toolkits" },
        { name: "Whitepapers", href: "#whitepapers" },
        { name: "Research Papers", href: "#researchpapers" },
        { name: "Reports", href: "#reports" },
        { name: "Infographics", href: "#infographics" },
        { name: "Ebooks", href: "#ebooks" },
      ]
    },
    {
      title: "MindRush Community",
      links: [
        { name: "Events", href: "#events" },
        { name: "Webinars", href: "#webinars" },
        { name: "Workshops", href: "#workshops" },
        { name: "Podcasts", href: "#podcasts" },
        { name: "Videos", href: "#videos" },
        { name: "Community", href: "#community" },
        { name: "Careers", href: "#careers" },
        { name: "Support", href: "#support" },
        { name: "FAQ", href: "#faq" },
      ]
    },
    {
      title: "MindRush Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "Sitemap", href: "#sitemap" },
      ]
    },
  ]

  return (
    <>
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

      {!sidebarOpen && !isMobile && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 w-10 h-10 flex items-center justify-center bg-black border border-white/20 rounded-md hover:bg-white/10 transition shadow"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-black text-white transform transition-transform duration-300 ease-in-out flex flex-col ${
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

        <nav className="flex-1 overflow-y-auto scrollbar-none">
          <ul className="py-2 space-y-6 px-2">
            {groupedLinks.map((group) => (
              <li key={group.title}>
                <div className="px-2 text-xs uppercase tracking-wide text-white/50 mb-1">{group.title}</div>
                <div className="space-y-1">
                  {group.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block py-2 px-3 text-sm rounded hover:bg-white/10 transition-colors"
                      onClick={() => isMobile && setSidebarOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="border-t border-white/10 p-4 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Mindrush AI. All rights reserved.</p>
          <p className="mt-1">Privacy | Terms | Contact</p>
        </footer>
      </div>
    </>
  )
}
