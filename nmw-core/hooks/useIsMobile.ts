import { useMediaQuery } from './useMediaQuery'
import { BREAKPOINTS } from '../lib/constants'

/**
 * useIsMobile - Hook pour détecter si l'appareil est mobile
 *
 * Détecte si l'écran est plus petit que le breakpoint 'md' (768px).
 * Utilise les breakpoints Tailwind par défaut.
 *
 * @returns true si l'écran est mobile (< 768px)
 *
 * @example
 * ```tsx
 * const isMobile = useIsMobile()
 *
 * return (
 *   <div>
 *     {isMobile ? <MobileMenu /> : <DesktopMenu />}
 *   </div>
 * )
 * ```
 */
export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.md - 1}px)`)
}
