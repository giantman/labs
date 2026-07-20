export interface CaseStudy {
  id: string
  title: string
  shortDescription: string
  description: string[]
  metadata: Record<string, string>
  tags: string[]
  year: number
  thumbnail?: string
  images?: string[]
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
  {
    id: 'aeg',
    title: 'AEG',
    shortDescription: 'Brand and digital design for Alleron Expert Group.',
    description: [],
    metadata: { 'Role': 'Brand / Product Design' },
    tags: ['Brand', 'Product Design'],
    year: 2022,
  },
  {
    id: 'feedback-intelligence',
    title: 'FI',
    shortDescription: 'Product design for Feedback Intelligence.',
    description: [],
    metadata: { 'Role': 'Product Design', 'Client': 'Feedback Intelligence' },
    tags: ['Product Design', 'AI'],
    year: 2022,
  },
  {
    id: 'cardshoplive',
    title: 'CardShopLive',
    shortDescription: 'Live commerce platform for trading card collectors.',
    description: [],
    metadata: { 'Role': 'Product Design' },
    tags: ['Product Design', 'E-commerce'],
    year: 2021,
  },
  {
    id: 'zest-ai',
    title: 'Zest AI',
    shortDescription: 'AI-powered credit underwriting platform design.',
    description: [],
    metadata: { 'Role': 'Product Design' },
    tags: ['Product Design', 'AI', 'FinTech'],
    year: 2021,
  },
  {
    id: 'stick-ai',
    title: 'Stick AI',
    shortDescription: 'Product design for Stick AI.',
    description: [],
    metadata: { 'Role': 'Product Design' },
    tags: ['Product Design', 'AI'],
    year: 2022,
  },
  {
    id: 'tradesy',
    title: 'Tradesy',
    shortDescription: 'Fashion resale marketplace design.',
    description: [],
    metadata: { 'Role': 'Product Design' },
    tags: ['Product Design', 'Marketplace'],
    year: 2020,
    thumbnail: '/projects/web-tradesy/tradesy-web-cover_bmtjeo_c_scale,w_2000.jpg',
    images: [
      '/projects/web-tradesy/trd-home_f2cawg_c_scale,w_2000.jpg',
      '/projects/web-tradesy/trd-collection_mu5sme_c_scale,w_2000.jpg',
      '/projects/web-tradesy/trd-product-page_jm3jjx_c_scale,w_2000.jpg',
      '/projects/web-tradesy/trd-search_hjgaa7_c_scale,w_2000.jpg',
      '/projects/web-tradesy/trd-dropdown_j9n7ya_c_scale,w_2000.jpg',
      '/projects/web-tradesy/trd-checkout-payment_szttlu_c_scale,w_2000.jpg',
      '/projects/web-tradesy/trd-checkout-shipping_m9uoc1_c_scale,w_2000.jpg',
      '/projects/web-tradesy/trd-checkout-review-misc-comps_yeghmv_c_scale,w_2000.jpg',
      '/projects/web-tradesy/trd-mobile-web-01_q5iuhg_c_scale,w_2000.png',
      '/projects/ios-tradesy/01-ios-ui-guide-01_qm9r8d_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/02-ios-ui-guide-02_v2yw2q_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/03-ios-home_vchrns_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/04-ios-collection_rcrlbv_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/05-ios-collection-compact-filters_k07vrc_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/06-ios-collection-filter_jj6h1s_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/07-ios-product_amtfyn_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/08-ios-bag-checkout_gazwg4_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/ios-sell-01_ofgtc3_c_scale,w_2000.jpg',
      '/projects/ios-tradesy/ios-sell-02_oyipeq_c_scale,w_2000.jpg',
      '/projects/android-tradesy/android-checkout_f4puo9_c_scale,w_2000.jpg',
      '/projects/android-tradesy/android-closet_tn5gs8_c_scale,w_2000.jpg',
      '/projects/android-tradesy/android-mao_gposcq_c_scale,w_2000.jpg',
      '/projects/android-tradesy/android-stickersheet_ldigou_c_scale,w_2000.jpg',
      '/projects/tradesy-listing/tradesy-01.png',
      '/projects/tradesy-listing/tradesy-02.png',
      '/projects/tradesy-listing/tradesy-03.png',
      '/projects/tradesy-listing/tradesy-04.png',
      '/projects/tradesy-listing/tradesy-05.png',
      '/projects/tradesy-listing/tradesy-06.png',
      '/projects/tradesy-listing/tradesy-07.jpg',
      '/projects/tradesy-listing/tradesy-08.png',
      '/projects/tradesy-listing/tradesy-09.jpg',
      '/projects/tradesy-listing/tradesy-10.png',
      '/projects/tradesy-listing/tradesy-11.jpg',
    ],
  },
  {
    id: 'cordwain',
    title: 'Cordwain',
    shortDescription: 'Brand and digital design for Cordwain.',
    description: [],
    metadata: { 'Role': 'Brand / Product Design' },
    tags: ['Brand', 'Product Design'],
    year: 2021,
    thumbnail: '/projects/cordwain/cordwain-01_ws7rfb_c_scale,w_2000.png',
    images: [
      '/projects/cordwain/cordwain-01_ws7rfb_c_scale,w_2000.png',
      '/projects/cordwain/cordwain-02_yqyoqe_c_scale,w_2000.png',
      '/projects/cordwain/cordwain-03_fb4hhd_c_scale,w_2000.png',
      '/projects/cordwain/cordwain-04_ksqcs5_c_scale,w_2000.png',
      '/projects/cordwain/cordwain-05_hdeg5j_c_scale,w_2000.png',
      '/projects/cordwain/cordwain-06_lj97xn_c_scale,w_2000.png',
      '/projects/cordwain/cordwain-07_l4bt5i_c_scale,w_2000.png',
      '/projects/cordwain/cordwain-08_yyhzdf_c_scale,w_2000.png',
    ],
  },
  {
    id: 'crexi',
    title: 'Crexi',
    shortDescription: 'Commercial real estate platform design.',
    description: [],
    metadata: { 'Role': 'Product Design' },
    tags: ['Product Design', 'Real Estate'],
    year: 2020,
    thumbnail: '/projects/crexi/desktop-search.png',
    images: [
      '/projects/crexi/desktop-search.png',
      '/projects/crexi/mobile-search.png',
      '/projects/crexi/cmi-landing-page.png',
      '/projects/crexi/broker-plans.png',
      '/projects/crexi/crexi-mobile.png',
      '/projects/crexi/renovate.png',
      '/projects/crexi/cmi-01.jpg',
      '/projects/crexi/cmi-02.jpg',
      '/projects/crexi/cmi-03.jpg',
      '/projects/crexi/cmi-04.jpg',
      '/projects/crexi/cmi-sketches-01.jpg',
      '/projects/crexi/cmi-sketches-02.jpg',
    ],
  },
  {
    id: 'icelink',
    title: 'IceLink',
    shortDescription: 'Brand and digital design for IceLink.',
    description: [],
    metadata: { 'Role': 'Brand / Product Design' },
    tags: ['Brand', 'Product Design'],
    year: 2019,
  },
  {
    id: 'juice-served-here',
    title: 'Juice Served Here',
    shortDescription: 'Brand identity and digital design for Juice Served Here.',
    description: [],
    metadata: { 'Role': 'Brand / Product Design' },
    tags: ['Brand', 'Product Design'],
    year: 2018,
    thumbnail: '/projects/juice/jsh-web-home-device_cvvccc_c_scale,w_2000.jpg',
    images: [
      '/projects/juice/jsh-web-home-device_cvvccc_c_scale,w_2000.jpg',
      '/projects/juice/jsh-web-cleanse_gjypqv_c_scale,w_2000.jpg',
      '/projects/juice/jsh-web-carton_gm4uba_c_scale,w_2000.jpg',
      '/projects/juice/jsh-web-checkout_ar1f75_c_scale,w_2000.png',
      '/projects/juice/jsh-mobile-carton_aoukbr_c_scale,w_2000.jpg',
      '/projects/juice/jsh-mobile-cleanse_on3gjf_c_scale,w_2000.jpg',
    ],
  },
  {
    id: 'motoclub',
    title: 'MotoClub',
    shortDescription: 'Product design for MotoClub.',
    description: [],
    metadata: { 'Role': 'Product Design' },
    tags: ['Product Design'],
    year: 2020,
  },
  {
    id: 'platefit',
    title: 'Platefit',
    shortDescription: 'Brand and digital design for Platefit fitness.',
    description: [],
    metadata: { 'Role': 'Brand / Product Design' },
    tags: ['Brand', 'Product Design', 'Health'],
    year: 2019,
  },
  {
    id: 'priv',
    title: 'Priv',
    shortDescription: 'On-demand beauty services marketplace design.',
    description: [],
    metadata: { 'Role': 'Product Design' },
    tags: ['Product Design', 'Marketplace'],
    year: 2018,
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
