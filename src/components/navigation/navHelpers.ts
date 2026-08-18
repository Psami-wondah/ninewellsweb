export function getNavHref(item: string) {
  if (item === 'About') return '/about'
  if (item === 'Expertise') return '/#expertise'
  if (item === 'People') return '/people'
  if (item === 'Contact') return '/contact'
  return `/#${item.toLowerCase()}`
}
