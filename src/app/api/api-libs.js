export const GetAnime = async (resource, query) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  const data = res.json()
  return data
}

export const GetNestedAnime = async (resource) => {
  const res = await GetAnime(resource)
  return res.data.flatMap(item => item.entry)
}