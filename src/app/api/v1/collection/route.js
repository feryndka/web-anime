import prisma from "@/libs/prisma"

export async function POST(req) {
  const { mal_id, user_email, image, title } = await req.json()
  const data = { mal_id, user_email, image, title }

  const createCollection = await prisma.collection.create({data})

  if (!createCollection) return Response.json({ status: 500, isCreate: false })
  else return Response.json({ status: 200, isCreate: true })
}