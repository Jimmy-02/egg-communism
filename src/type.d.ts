enum Role {
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
}

interface User {
  id: string
  name: string
  email: string
  role: Role
}

interface Post {
  id: string
  title: string
  content: string
  published: boolean
  author: User
  authorId: string
}
