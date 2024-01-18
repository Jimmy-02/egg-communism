import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import Image from 'next/image'
import Link from 'next/link'
import Auth from './auth'
import ThemeBtn from './them-btn'

const Header: React.FC = () => {
  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarMenuToggle className="md:hidden" />

        <Link href="/" passHref legacyBehavior>
          <NavbarBrand className="cursor-pointer">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={60}
              height={30}
              className="h-auto dark:invert"
              priority
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="center">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/add-post">Add Post</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Auth />
        </NavbarItem>

        <NavbarItem>
          <ThemeBtn />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="md:hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
