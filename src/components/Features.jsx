export default function Features(){
  const features = [
    {
      title: 'Cross-platform browser',
      desc: 'Search and filter titles from Steam, Epic, GOG, PlayStation, Xbox, and Nintendo.'
    },
    {
      title: 'Epic free games',
      desc: 'Automatically fetch weekly free titles and never miss a giveaway.'
    },
    {
      title: 'Wishlist + alerts',
      desc: 'Track price drops and receive notifications when your games go on sale.'
    },
    {
      title: 'Best price comparison',
      desc: 'See the lowest price across platforms with savings highlighted.'
    }
  ]
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">Features</h2>
        <p className="mt-2 max-w-2xl text-slate-300">A clean, modern UI with smooth interactions and support for light and dark themes.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
