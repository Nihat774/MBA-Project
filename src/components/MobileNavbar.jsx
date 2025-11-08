import { useState } from 'react'
import { VscChromeClose, VscListSelection } from 'react-icons/vsc'
import { navLinks } from '../constants/navLinks'

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className='flex md:hidden'>
        <VscListSelection className='text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
      </div>
     
          <div className={`${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col gap-10 w-[75%] transform transition-transform duration-300  h-screen absolute z-20 left-0 top-0 p-10 bg-black text-white`}>
            <div className='flex justify-end'>
              <VscChromeClose className='text-4xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className='flex flex-col gap-5 justify-center  text-3xl '>
              <a
                onClick={() => setIsOpen(!isOpen)}
                href="#"
                className="hover:text-sky-600 transition-colors duration-300"
              >
                Home
              </a>
              {
                navLinks.map((item) => {
                  return (
                    <a onClick={() => setIsOpen(!isOpen)} className='hover:text-sky-600 transition-colors duration-300' href={item.path} key={item.id}>{item.text}</a>
                  )
                })
              }
            </div>
          </div>
      
      {
        isOpen && (
          <div className='inset-0 h-screen fixed z-10 opacity-40 bg-black' onClick={() => setIsOpen(!isOpen)}></div>
        )
      }
    </>
  )
}

export default MobileNavbar