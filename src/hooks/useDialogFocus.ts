import { useEffect, useRef } from 'react'

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useDialogFocus() {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const dialog = dialogRef.current
    const getFocusable = () => dialog ? Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector)) : []
    const focusable = getFocusable()
    const preferredFocus = dialog?.querySelector<HTMLElement>('[data-autofocus]')
    ;(preferredFocus || focusable[0])?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      const currentFocusable = getFocusable()
      if (event.key !== 'Tab' || currentFocusable.length === 0) return
      const first = currentFocusable[0]
      const last = currentFocusable[currentFocusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [])

  return dialogRef
}
