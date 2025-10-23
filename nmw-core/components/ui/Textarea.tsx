import * as React from 'react'
import { cn } from '../../lib'

/**
 * Textarea - Champ de saisie multiligne avec label, error et helper text
 *
 * Similaire à Input mais pour du texte multiligne.
 * Supporte auto-resize optionnel.
 *
 * @example
 * ```tsx
 * <Textarea
 *   label="Message"
 *   placeholder="Votre message..."
 *   rows={4}
 *   error="Le message est requis"
 *   helperText="Maximum 500 caractères"
 * />
 * ```
 */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label affiché au-dessus du textarea */
  label?: string
  /** Message d'erreur (affiche le textarea en rouge) */
  error?: string
  /** Texte d'aide affiché sous le textarea */
  helperText?: string
  /** Auto-resize en fonction du contenu */
  autoResize?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      autoResize = false,
      className,
      id,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null)
    const inputId = id || React.useId()
    const hasError = !!error

    // Combine les refs (interne + externe)
    React.useImperativeHandle(ref, () => textareaRef.current!)

    // Auto-resize si activé
    React.useEffect(() => {
      if (!autoResize || !textareaRef.current) return

      const textarea = textareaRef.current

      const adjustHeight = () => {
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
      }

      textarea.addEventListener('input', adjustHeight)
      adjustHeight() // Initial adjustment

      return () => {
        textarea.removeEventListener('input', adjustHeight)
      }
    }, [autoResize])

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

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          id={inputId}
          disabled={disabled}
          rows={rows}
          className={cn(
            // Styles de base
            'w-full rounded-lg border bg-background px-3 py-2',
            'text-base text-foreground placeholder:text-muted-foreground',
            'transition-colors duration-200',
            'resize-y', // Permet le resize vertical par défaut

            // Focus
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            hasError
              ? 'border-error focus:ring-error'
              : 'border-border focus:ring-primary',

            // Disabled
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted',

            // Auto-resize désactive le resize manuel
            autoResize && 'resize-none overflow-hidden',

            // Override custom
            className
          )}
          {...props}
        />

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

Textarea.displayName = 'Textarea'
