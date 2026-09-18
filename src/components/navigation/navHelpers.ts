export function getNavHref(item: string) {
  if (item === 'About') return '/about'
  if (item === 'Technology') return '/technology'
  if (item === 'Expertise') return '/#expertise'
  if (item === 'People') return '/people'
  if (item === 'Intelligence') return '/intelligence'
  if (item === 'Contact') return '/contact'
  return `/#${item.toLowerCase()}`
}
