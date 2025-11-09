import { NavHashLink } from 'react-router-hash-link'
import { navLinks } from '../constants/navLinks'
import MobileNavbar from './MobileNavbar'

function Header() {
 
  return (
    <header className='bg-slate-100 py-4 z-50 shadow-md text-slate-900 flex items-center justify-between px-10 -mx-10 md:px-20 md:-mx-20 sticky top-0'>
      <NavHashLink smooth to="#" className='font-bold tetx-2xl'>
       LOGO
      </NavHashLink>
      {/* desktop */}
      <nav className='hidden md:flex  font-semibold justify-between w-[60%]'>
        {
          navLinks.map((item) => {
            return (
              <NavHashLink key={item.id} smooth to={item.path} className='hover:text-sky-600 duration-300'>{item.text}</NavHashLink>
            )
          })
        }
      </nav>

      {/* mobile */}
     <MobileNavbar />

    </header>
  )
}

export default Header