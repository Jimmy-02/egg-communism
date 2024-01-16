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

import { Button } from '@/components/ui/button'
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
          <NavbarBrand>
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={50}
              height={50}
              className="dark:invert"
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
        <NavbarItem className="hidden lg:flex">
          <Button color="primary" variant="ghost" asChild>
            <Link href="#">Login</Link>
          </Button>
        </NavbarItem>

        <ThemeBtn />
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
