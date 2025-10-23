import { useState, useEffect } from 'react'

/**
 * useDebounce - Hook pour debouncer une valeur
 *
 * Retarde la mise à jour d'une valeur jusqu'à ce qu'un certain délai
 * se soit écoulé sans changement. Utile pour les champs de recherche.
 *
 * @param value - Valeur à debouncer
 * @param delay - Délai en millisecondes (défaut: 500ms)
 * @returns Valeur debouncée
 *
 * @example
 * ```tsx
 * const [searchTerm, setSearchTerm] = useState('')
 * const debouncedSearchTerm = useDebounce(searchTerm, 500)
 *
 * useEffect(() => {
 *   // Appel API uniquement quand l'utilisateur arrête de taper
 *   if (debouncedSearchTerm) {
 *     searchAPI(debouncedSearchTerm)
 *   }
 * }, [debouncedSearchTerm])
 *
 * return <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
 * ```
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Set un timeout pour mettre à jour la valeur après le délai
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup : annule le timeout si value change avant la fin du délai
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
