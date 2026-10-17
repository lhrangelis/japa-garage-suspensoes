export const site = {
  name: 'Japa Garage Suspensões',
  description:
    'Loja especializada em suspensão a ar, rosca e fixa em Jaú/SP. Kits, instalação e acerto de altura. Revendedor RCS Air Components.',
  phone: {
    display: '(14) 99782-7420',
    tel: 'tel:+5514997827420',
  },
  whatsapp: 'https://wa.me/5514997827420',
  instagram: {
    handle: '@japa_garage.jau',
    url: 'https://instagram.com/japa_garage.jau',
  },
  tiktok: 'https://www.tiktok.com/@japa_garage.jau',
  rcs: {
    handle: '@rcsaircomponents',
    url: 'https://instagram.com/rcsaircomponents',
  },
} as const;

export const navLinks = [
  { href: '#suspensoes', label: 'Suspensões' },
  { href: '#rcs', label: 'RCS Air Components' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
] as const;
