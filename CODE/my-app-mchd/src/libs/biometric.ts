export default function getBiometric(code: string) {
  switch (code) {
    case 'F':
      return 'Físico'
    case 'V':
      return 'Virtual'
    case 'H':
      return 'Híbrido'
    default:
      return ''
  }
}
