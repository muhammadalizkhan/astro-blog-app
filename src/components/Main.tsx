import Header from "./Header"

export default function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Header />
      <div className="md:ml-64 p-6">
        <div className="max-w-4xl mx-auto pt-16 md:pt-8">
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
