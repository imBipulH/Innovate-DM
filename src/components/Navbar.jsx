const NavbarData = ['Home', 'About', 'Service', 'Portfolio', 'Price', 'Blog']

const Navbar = () => {
  return (
    <div className='container py-4'>
      <div className='flex items-center justify-between'>
        <img src='/src/assets/Logo.png' alt='Logo' />
        <div className='lg:flex hidden gap-8'>
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
              </span>{' '}
            </div>
          ))}
        </div>
        <img src="/vite.svg"/>
        <img src="/vite.svg"/>
        <button className='px-5 py-3 text-lg font-sans bg-primary font-semibold text-white rounded-full'>
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Navbar
