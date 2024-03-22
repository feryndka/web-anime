export const GetAnime = async (resource, query) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
  const data = res.json()
  return data
}

export const GetNestedAnime = async (resource, objectProperty) => {
  const res = await GetAnime(resource)
  return res.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1) // ~~ seperti Math.floor
  const last = first + gap;

  const result = {
    data: data.slice(first, last)
  }

  return result;
}