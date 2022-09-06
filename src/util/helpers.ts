export const dateFormatter = (value: string, idx: number) => {
  const monthDictionary = {
    '1': 'Jan',
    '2': 'Feb',
    '3': 'Mar',
    '4': 'Apr',
    '5': 'May',
    '6': 'Jun',
    '7': 'Jul',
    '8': 'Aug',
    '9': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  }

  let date = new Date(value)
  let dateString = date.toLocaleDateString()
  const bindex = -4
  const eindex = -2
  dateString = dateString.slice(0, bindex) + dateString.slice(eindex)
  return dateString
}
