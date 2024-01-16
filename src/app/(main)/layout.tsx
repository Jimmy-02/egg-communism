import Header from '@/components/header'
import { Toaster } from '@/components/ui/sonner'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="container my-4 max-w-screen-lg">{children}</main>
    <Toaster />
  </>
)

export default MainLayout
