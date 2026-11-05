import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = { children: ReactNode; className?: string; delay?: number }

export default function Reveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.fromTo(node, { y: 34, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: 0.85, delay, ease: 'power3.out',
        scrollTrigger: { trigger: node, start: 'top 88%', once: true },
      })
    }, node)
    return () => ctx.revert()
  }, [delay])

  return <div ref={ref} className={className}>{children}</div>
}
