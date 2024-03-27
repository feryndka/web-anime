import prisma from "@/libs/prisma"

export async function POST(req) {
  const { mal_id, user_email, user_name, comment, title } = await req.json()
  const data = { mal_id, user_email, user_name, comment, title }

  const createComment = await prisma.comment.create({ data })

  if (!createComment) return Response.json({ status: 500, isCreate: false })
  else return Response.json({ status: 200, isCreate: true })
}