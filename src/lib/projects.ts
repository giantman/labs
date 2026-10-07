export const EXIT_TRANSITION_MS = 300

/** Projects whose case study pages are linked from the project cards. Everything else shows "Coming soon". */
const ENABLED_PROJECT_IDS: string[] = []

export function isProjectEnabled(id: string) {
  return ENABLED_PROJECT_IDS.includes(id)
}
