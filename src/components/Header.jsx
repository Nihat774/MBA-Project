import { navLinks } from '../constants/navLinks'
import MobileNavbar from './MobileNavbar'

function Header() {
 
  return (
    <header className='bg-slate-100 z-50 shadow-md text-slate-900 flex justify-between items-center px-10 -mx-10 md:px-20 md:-mx-20 sticky top-0'>
      <a href="#" className='size-[100px]'>
        <img src="/icon.png" alt="" className='object-cover' />
      </a>
      {/* desktop */}
      <nav className='hidden md:flex  font-semibold justify-between w-[60%]'>
        {
          navLinks.map((item) => {
            return (
              <a key={item.id} href={item.path} className='hover:text-sky-600 duration-300'>{item.text}</a>
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