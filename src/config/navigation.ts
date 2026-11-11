export const NAV_ITEMS = [
  { label: 'Layanan', href: '/layanan' }, { label: 'Karya', href: '/karya' },
  { label: 'Demo', href: '/demo' }, { label: 'Proses', href: '/#proses' },
  { label: 'Harga', href: '/#pricing' }, { label: 'Jurnal', href: '/articles' },
] as const
export type NavItem = (typeof NAV_ITEMS)[number]
