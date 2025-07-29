export const getResourceId = (resourceURI: string) => {
  const parts = resourceURI.split('/')

  return parts[parts.length - 1]
}
