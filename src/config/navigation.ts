export const NAV_ITEMS = [
  { label: 'Home', href: '/#hero' },
  { label: 'Demo', href: '/#demo' },
  { label: 'Keunggulan', href: '/#advantages' },
  { label: 'Harga', href: '/#pricing' },
  { label: 'Artikel', href: '/articles' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Order', href: '/#order' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
