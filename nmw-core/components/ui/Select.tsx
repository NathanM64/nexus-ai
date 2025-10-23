import * as React from 'react'
import { cn } from '../../lib'

/**
 * Select - Menu déroulant stylé avec label, error et helper text
 *
 * Select natif HTML stylé de manière cohérente avec Input et Textarea.
 * Pour des selects plus avancés (multi-select, recherche), utiliser une lib externe.
 *
 * @example
 * ```tsx
 * <Select
 *   label="Pays"
 *   error={errors.country}
 *   helperText="Sélectionnez votre pays"
 * >
 *   <option value="">Choisir...</option>
 *   <option value="fr">France</option>
 *   <option value="be">Belgique</option>
 * </Select>
 * ```
 */

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label affiché au-dessus du select */
  label?: string
  /** Message d'erreur (affiche le select en rouge) */
  error?: string
  /** Texte d'aide affiché sous le select */
  helperText?: string
  /** Afficher une icône de chevron custom */
  showChevron?: boolean
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      showChevron = true,
      className,
      id,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || React.useId()
    const hasError = !!error

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'block text-sm font-medium mb-1.5',
              hasError ? 'text-error' : 'text-foreground',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {label}
          </label>
        )}

        {/* Select wrapper (pour l'icône chevron custom) */}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={cn(
              // Styles de base
              'w-full rounded-lg border bg-background px-3 py-2',
              'text-base text-foreground',
              'transition-colors duration-200',
              'appearance-none', // Retire le chevron natif

              // Focus
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              hasError
                ? 'border-error focus:ring-error'
                : 'border-border focus:ring-primary',

              // Disabled
              'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted',

              // Padding pour le chevron
              showChevron && 'pr-10',

              // Override custom
              className
            )}
            {...props}
          >
            {children}
          </select>

          {/* Chevron custom */}
          {showChevron && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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

Select.displayName = 'Select'
