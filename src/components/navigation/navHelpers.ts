export function getNavHref(item: string) {
  if (item === 'About') return '/#about'
  if (item === 'People') return '/people'
  if (item === 'Careers' || item === 'Contact') return '/#contact'
  return `/#${item.toLowerCase()}`
}
