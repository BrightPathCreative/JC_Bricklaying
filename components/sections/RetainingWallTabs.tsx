'use client'

import { useState } from 'react'

const TABS = [
  {
    id: 'structural',
    label: 'Structural Walls',
    title: 'Structural Retaining Walls',
    body: 'Full-height structural block retaining walls with concrete core fill and steel reinforcement. Built to last and compliant with Australian standards.',
  },
  {
    id: 'dividing',
    label: 'Dividing Walls',
    title: 'Dividing Walls',
    body: 'Block dividing walls for residential and commercial properties. Clean finish, solid construction, full supply and install.',
  },
  {
    id: 'fire-rated',
    label: 'Fire-Rated',
    title: 'Fire-Rated Walls',
    body: 'Fire-rated block wall construction for properties where required by council or building regulations. Jamie builds to spec and ensures compliance.',
  },
] as const

export function RetainingWallTabs() {
  const [active, setActive] = useState<(typeof TABS)[number]['id']>('structural')
  const current = TABS.find((t) => t.id === active) ?? TABS[0]

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Retaining wall service types"
      >
        {TABS.map((tab) => {
          const selected = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`retaining-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls="retaining-tabpanel"
              onClick={() => setActive(tab.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                selected
                  ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/15'
                  : 'bg-white text-brand-grey shadow-sm ring-1 ring-brand-grey/15 hover:text-brand-dark hover:ring-brand-orange/30'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>
      <div
        id="retaining-tabpanel"
        role="tabpanel"
        aria-labelledby={`retaining-tab-${active}`}
        className="mt-8"
      >
        <h4 className="text-xl font-semibold text-brand-dark">{current.title}</h4>
        <p className="mt-3 leading-relaxed text-brand-grey">{current.body}</p>
      </div>
    </div>
  )
}
