export interface CaseStudy {
  id: string
  title: string
  shortDescription: string
  description: string[]
  metadata: Record<string, string>
  tags: string[]
  year: number
}

export interface Experiment {
  id: string
  title: string
  shortDescription: string
  metadata: Record<string, string>
  tags: string[]
  year: number
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'hazel',
    title: 'Hazel',
    shortDescription: 'Designing the AI-powered workflow layer for independent financial advisors.',
    description: [
      'Hazel set out to do more than notetaking — the product needed to feel like a trusted co-pilot woven into an advisor\'s day. The design challenge was making complex AI capabilities legible and trustworthy to a user base that values precision above all. Work centered on the daily digest experience: surfacing the right client signals at the right time without overwhelming or misinforming.',
      'The meeting workflow — pre-meeting briefs, live transcription, AI-generated summaries, and auto-drafted follow-ups — required careful attention to where automation ends and advisor judgment begins. Designed the document intelligence interface for searching across tax returns and estate plans, balancing speed of retrieval with confidence in accuracy.',
    ],
    metadata: {
      'Year': '2024',
      'Role': 'Product Design',
      'Client': 'Hazel / Altruist',
    },
    tags: ['Product Design', 'AI', 'FinTech'],
    year: 2024,
  },
  {
    id: 'altruist',
    title: 'Altruist',
    shortDescription: 'Unifying custody, trading, and reporting into one platform for independent advisors.',
    description: [
      'Altruist consolidates what was previously a patchwork of vendors — account opening, portfolio management, trading, fee billing, and reporting — into a single cohesive platform. The design work focused on reducing friction across the full advisor workflow, from onboarding a new client to executing trades and managing billing, without sacrificing the precision that compliance-heavy environments demand.',
      'A core focus was information architecture: how to present dense financial data and operational controls in ways that let advisors move quickly with confidence. Work spanned the trading interface, portfolio reporting views, model marketplace, and the onboarding flow — balancing power-user density with clarity for advisors at every stage of practice growth.',
    ],
    metadata: {
      'Year': '2023',
      'Role': 'Product Design',
      'Client': 'Altruist',
    },
    tags: ['Product Design', 'FinTech'],
    year: 2023,
  },
]

export const experiments: Experiment[] = [
  {
    id: 'example-experiment',
    title: 'Example Experiment',
    shortDescription: 'A placeholder for your first visual experiment.',
    metadata: {
      'Type': 'WebGL',
      'Year': '2024',
    },
    tags: ['WebGL', 'Canvas'],
    year: 2024,
  },
]
