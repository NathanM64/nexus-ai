import * as React from 'react'
import { cn } from '../../lib'

/**
 * Input - Champ de saisie avec label, error et helper text
 *
 * Supporte tous les types HTML input (text, email, password, etc.)
 * et affiche automatiquement label, message d'erreur et texte d'aide.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="you@example.com"
 *   error="Email invalide"
 *   helperText="Nous ne partagerons jamais votre email"
 * />
 * ```
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label affiché au-dessus de l'input */
  label?: string
  /** Message d'erreur (affiche l'input en rouge) */
  error?: string
  /** Texte d'aide affiché sous l'input */
  helperText?: string
  /** Icône à gauche de l'input */
  leftIcon?: React.ReactNode
  /** Icône à droite de l'input */
  rightIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    // Génère un ID unique si non fourni (pour associer label et input)
    const inputId = id || React.useId()
    const hasError = !!error

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-1.5',
              hasError ? 'text-error' : 'text-foreground',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {label}
          </label>
        )}

        {/* Input wrapper (pour les icônes) */}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              // Styles de base
              'w-full rounded-lg border bg-background px-3 py-2',
              'text-base text-foreground placeholder:text-muted-foreground',
              'transition-colors duration-200',

              // Focus
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              hasError
                ? 'border-error focus:ring-error'
                : 'border-border focus:ring-primary',

              // Disabled
              'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted',

              // Avec icônes
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',

              // Override custom
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Message d'erreur */}
        {error && (
          <p className="mt-1.5 text-sm text-error" role="alert">
            {error}
          </p>
        )}

        {/* Helper text (seulement si pas d'erreur) */}
        {!error && helperText && (
          <p className="mt-1.5 text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
