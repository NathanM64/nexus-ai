/**
 * Breakpoints (matching Tailwind defaults)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Max widths for Container component
 */
export const MAX_WIDTHS = {
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px',
} as const;

/**
 * Transition durations (in milliseconds)
 */
export const TRANSITION_DURATION = {
  fast: 150,
  base: 300,
  slow: 500,
  slower: 700,
} as const;

/**
 * Animation easings
 */
export const EASINGS = {
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;
