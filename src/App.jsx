import Hero from './components/Hero'
import DealsBrowser from './components/DealsBrowser'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <DealsBrowser />
      <Features />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
        Built for showcasing a gaming deals aggregator experience.
      </footer>
    </div>
  )
}

export default App
