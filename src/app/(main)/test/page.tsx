import { authOptions } from '@/lib/auth'
import { NextPage } from 'next'
import { getServerSession } from 'next-auth'

const Page: NextPage = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)

  return (
    <div>
      hello world
      {JSON.stringify(session)}
    </div>
  )
}

export default Page
