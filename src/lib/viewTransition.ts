import { flushSync } from 'react-dom'

export function projectRowTransitionName(id: string) {
  return `project-row-${id}`
}

export function supportsViewTransitions() {
  return typeof document !== 'undefined' && 'startViewTransition' in document
}

export function navigateWithViewTransition(navigate: () => void) {
  if (supportsViewTransitions()) {
    document.startViewTransition(() => flushSync(navigate))
  } else {
    navigate()
  }
}
