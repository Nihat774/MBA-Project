import { useEffect, useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'
import { navLinks } from '../constants/navLinks'
import MobileNavbar from './MobileNavbar'

function Header() {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const sections = navLinks.map(item => document.querySelector(item.path))
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(`#${entry.target.id}`)
        }
      })
    }, { threshold: 0.5 }) // 60% görünəndə aktiv olacaq

    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <header className='bg-slate-100 py-4 z-50 shadow-md text-slate-900 flex items-center justify-between px-10 -mx-10 md:px-20 md:-mx-20 sticky top-0'>
      <NavHashLink smooth to="#" className='font-bold text-2xl'>LOGO</NavHashLink>

      {/* desktop */}
      <nav className='hidden md:flex font-semibold justify-between w-[60%]'>
        {navLinks.map((item) => {
          const isActive = item.path === activeId;
          return (
            <NavHashLink 
              key={item.id} 
              smooth 
              to={item.path} 
              className={` ${isActive ? "text-blue-600" : ""} hover:text-sky-600 duration-300`}
            >
              {item.text}
            </NavHashLink>
          )
        })}
      </nav>

      {/* mobile */}
      <MobileNavbar activeId = {activeId} />
    </header>
  )
}

export default Header
