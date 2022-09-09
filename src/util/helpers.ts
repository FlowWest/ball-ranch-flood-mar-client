export const dateFormatter = (value: string) => {
  let date = new Date(value)
  let dateString = date.toLocaleDateString()
  return dateString
}

export const toTitleCase = (string: string) => {
  let lowerCaseString = string.toLowerCase()
  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1)
}
