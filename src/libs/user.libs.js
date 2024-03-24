import { getServerSession } from "next-auth"; //untuk keperluan server
import { authOption } from "@/app/api/auth/[...nextauth]/route";

// untuk mengambil data user
export const authUserSession = async() => {
  const session = await getServerSession(authOption)
  return session?.user
}