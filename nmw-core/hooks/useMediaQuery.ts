import { useState, useEffect } from 'react'

/**
 * useMediaQuery - Hook pour détecter une media query
 *
 * Détecte si une media query CSS correspond à l'écran actuel.
 * SSR-safe : retourne false côté serveur.
 *
 * @param query - Media query CSS (ex: "(min-width: 768px)")
 * @returns true si la media query correspond
 *
 * @example
 * ```tsx
 * const isDesktop = useMediaQuery('(min-width: 1024px)')
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    // SSR check
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Create event listener
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handler)
      return () => mediaQuery.removeListener(handler)
    }
  }, [query])

  return matches
}
