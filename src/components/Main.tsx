import { useState, useEffect } from "react"
import Header from "./Header"
import Hero from "./Hero"

export default function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Only one place for sidebarOpen/isMobile logic
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleSidebarToggle = () => {
      const isOpen = localStorage.getItem("sidebarOpen")
      setSidebarOpen(isOpen === null ? true : isOpen === "true")
    }

    checkIfMobile()
    handleSidebarToggle()

    window.addEventListener("resize", checkIfMobile)
    window.addEventListener("sidebarToggle", handleSidebarToggle)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
      window.removeEventListener("sidebarToggle", handleSidebarToggle)
    }
  }, [])

  // Update localStorage and notify on change
  useEffect(() => {
    localStorage.setItem("sidebarOpen", sidebarOpen.toString())
    window.dispatchEvent(new CustomEvent("sidebarToggle"))
  }, [sidebarOpen])

  const mainMarginLeft = !isMobile && sidebarOpen ? "ml-64" : ""
  const mainMarginTop = isMobile && !sidebarOpen ? "mt-16" : ""

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        sidebarOpen={sidebarOpen}
        isMobile={isMobile}
        setSidebarOpen={setSidebarOpen}
      />
      <Hero mainMarginLeft={mainMarginLeft} mainMarginTop={mainMarginTop} />
    </div>
  )
}