import { useEffect, useState } from 'react'

const NavbarData = ['Home', 'About', 'Service', 'Portfolio', 'Price', 'Blog']

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  )
  const handleResize = () => {
    setIsLandscape(window.innerWidth > window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='container py-4'>
      <div className='flex items-center justify-between'>
        <img src='/assets/Logo.png' alt='Logo' className='z-40' />

        {/* Navbar for Mobile Device Start*/}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className='material-symbols-outlined text-primary text-5xl md:hidden z-40'
        >
          {showMenu ? 'close' : 'menu_open'}
        </span>

        {/* Navbar Card for Mobile Device */}
        <div
          className={`bg-white h-full w-full ${
            showMenu
              ? 'translate-y-0 top-24 sm:top-10 opacity-100'
              : '-translate-y-full top-0 opacity-0'
          } duration-500 absolute  left-0 z-20`}
        >
          <div
            className={`flex ${
              isLandscape ? 'flex-wrap px-14 mt-10 gap-6' : 'flex-col'
            } justify-around items-center py-4`}
          >
            {NavbarData.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-1 text-xl my-4 font-sans cursor-pointer font-semibold hover:text-primary duration-200 ${
                  i == 0 && 'text-primary'
                } `}
              >
                {item}
                <span className='material-symbols-outlined'>
                  keyboard_arrow_down
                </span>
              </div>
            ))}
            <div className='flex justify-center'>
              <button className='my-8 px-5 py-3 text-lg font-sans bg-primary font-semibold text-white rounded-full hover:scale-105 hover:shadow-2xl active:bg-primary/50 '>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Navbar For PC */}
        <div className='md:flex hidden md:gap-4 lg:gap-8'>
          {NavbarData.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-1 text-lg font-sans cursor-pointer font-semibold hover:text-primary duration-200 ${
                i == 0 && 'text-primary'
              } `}
            >
              {item}
              <span className='material-symbols-outlined'>
                keyboard_arrow_down
              </span>
            </div>
          ))}
        </div>
        <button className='hidden md:block px-5 py-3 text-lg font-sans bg-primary font-semibold text-white rounded-full hover:scale-105 hover:shadow-2xl active:bg-primary/50 '>
          Contact Us
        </button>

        {/* For Mobile Device */}
      </div>
    </div>
  )
}

export default Navbar
