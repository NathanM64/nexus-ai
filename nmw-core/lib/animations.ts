/**
 * Animation presets for CSS and Motion One
 */

/**
 * Fade in animation
 */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

/**
 * Slide up animation
 */
export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Slide down animation
 */
export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Slide in from left
 */
export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Slide in from right
 */
export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/**
 * Scale in animation
 */
export const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
  transition: { duration: 0.2, ease: 'easeOut' },
};

/**
 * Stagger children animations
 */
export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Stagger with faster delay
 */
export const staggerChildrenFast = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
