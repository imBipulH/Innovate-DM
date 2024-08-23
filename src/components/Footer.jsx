const FooterData = [
  {
    title: 'Features',
    links: ['Home', 'About', 'Benefit', 'Pricing', 'Blog']
  },
  {
    title: 'Products',
    links: [
      'Marketing Strategy',
      'Social Marketing',
      'Content Marketing',
      'SEO',
      'Digital Marketing'
    ]
  },
  {
    title: 'Support',
    links: ['FAQ', 'Help Center', 'Contact Us']
  }
]

const Footer = () => {
  return (
    <div className='container py-4 md:py-14'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
        <div className='md:w-5/12 text-center md:text-left'>
          <img src='/assets/Logo.png' alt='Logo' className='m-auto md:ml-0' />
          <p className='text-slate font-sans text-lg my-8'>
            Install any demo or template with a single click. You can mix and
            match all the demos & templates. Every demo can be turned into one
            or multi-page.
          </p>
        </div>
        <div className='md:w-7/12'>
          <div className='flex flex-wrap justify-around items-start gap-8'>
            {FooterData.map((item, i) => (
              <div key={i} className='mb-8'>
                <h3 className='text-lg md:text-2xl font-sans font-semibold text-center md:text-left text-dgray mb-4'>
                  {item.title}
                </h3>
                <p className='flex flex-col items-center md:items-start gap-3 text-slate text-base md:text-xl font-semibold '>
                  {item.links.map((link, j) => (
                    <a
                      key={j}
                      href=''
                      className='hover:text-dgray duration-200'
                    >
                      {link}
                    </a>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center text-slate font-sans text-base md:text-lg mt-8 md:mt-20'>
        <p className='w-1/2'>
          @2024 <span className='text-primary'>Bipul Hajong</span>. <br className="block md:hidden"/>All rights
          reserved.
        </p>
        <div className='flex flex-col md:flex-row justify-end md:gap-8'>
          <p className='hover:text-dgray cursor-pointer'>Privacy Policy</p>
          <p className='hover:text-dgray cursor-pointer'>Terms & Condition</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
