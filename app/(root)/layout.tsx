
import MainHeader from '@/components/layouts/Navbar'
import { LayoutsProps } from '@/types'


const Layout = ({children}:LayoutsProps) => {
  return (
    <>
  <MainHeader/>
    {children}
    </>
  )
}

export default Layout
