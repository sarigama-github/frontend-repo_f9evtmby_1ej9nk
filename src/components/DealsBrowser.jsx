import { useEffect, useMemo, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function DealsBrowser() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const [error, setError] = useState('')

  const url = useMemo(() => {
    const u = new URL('/api/deals', BACKEND)
    if (query) u.searchParams.set('title', query)
    u.searchParams.set('page_size', '20')
    u.searchParams.set('sort_by', 'DealRating')
    return u.toString()
  }, [query])

  useEffect(() => {
    let active = true
    setLoading(true)
    fetch(url)
      .then(r => r.json())
      .then(data => {
        if (!active) return
        setItems(data.items || [])
        setError('')
      })
      .catch(e => setError(String(e)))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [url])

  return (
    <section id="demo" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-semibold text-white">Live deals</h2>
        <div className="flex w-full max-w-md items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search games…"
            className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none"
          />
          <button onClick={() => setQuery('')} className="rounded-lg bg-white/10 px-3 py-2 text-xs text-white hover:bg-white/20">Clear</button>
        </div>
      </div>

      {loading && <p className="text-slate-300">Loading deals…</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((d) => {
          const thumb = d.thumb || d.gameID ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${d.steamAppID || ''}/capsule_231x87.jpg` : undefined
          return (
            <article key={d.dealID} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-900">
                {thumb ? (
                  <img src={thumb} alt={d.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-500">No image</div>
                )}
              </div>
              <h3 className="line-clamp-2 text-base font-semibold text-white">{d.title}</h3>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                <span>${d.salePrice}</span>
                {d.normalPrice && (
                  <span className="text-slate-400 line-through">${d.normalPrice}</span>
                )}
              </div>
              {d.savings && (
                <div className="mt-1 text-xs text-emerald-400">Save {Math.round(d.savings)}%</div>
              )}
              {d.dealID && (
                <a
                  className="mt-3 inline-block rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-400"
                  href={`https://www.cheapshark.com/redirect?dealID=${d.dealID}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View deal
                </a>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
