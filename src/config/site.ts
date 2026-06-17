export const SITE = {
  name: 'Carisite',
  tagline: 'Website Profesional untuk UMKM',
  whatsapp: '628xxxxxxxxxx', // owner fills this in (format: 628...)
  whatsappMessage: 'Halo, saya ingin konsultasi pembuatan website',
  email: 'hello@carisite.id',
  domain: 'carisite.id',
  url: 'https://carisite.id',
} as const

/** Build a wa.me link with a pre-filled, URL-encoded message. */
export function waLink(message: string = SITE.whatsappMessage): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}
