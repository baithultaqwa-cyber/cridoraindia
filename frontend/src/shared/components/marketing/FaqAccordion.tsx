import { useId, useState } from 'react'

type Item = { q: string; a: string }

export function FaqAccordion({ items }: { items: Item[] }) {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const id = `${baseId}-${i}`
        const isOpen = open === i
        return (
          <li
            key={item.q}
            className="overflow-hidden rounded-2xl border border-silk/15 bg-navy-silk/70 transition-colors duration-300 hover:border-cridora-gold/20"
          >
            <button
              type="button"
              id={`${id}-btn`}
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-cridora-text transition-colors hover:text-cridora-gold-light"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q}
              <span
                className={`text-cridora-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden
              >
                ▾
              </span>
            </button>
            {isOpen ? (
              <div
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-btn`}
                className="border-t border-silk/10 px-5 pb-4"
              >
                <p className="pt-3 text-sm leading-relaxed text-cridora-muted">{item.a}</p>
              </div>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}
