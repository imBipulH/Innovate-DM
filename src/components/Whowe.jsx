const Whowe = () => {
  const brandzlogo = [
    { logo: '/assets/logo1.png' },
    { logo: '/assets/logo2.png' },
    { logo: '/assets/logo3.png' },
    { logo: '/assets/logo4.png' },
    { logo: '/assets/logo5.png' },
    { logo: '/assets/logo6.png' }
  ]

  return (
    <div className='container py-2 lg:py-14 relative'>
      <div className='w-96 aspect-square rounded-full absolute -left-48 top-64 -z-20 bg-primary/10 blur-3xl shadow-[-300px_-100px_300px_0px_#fccfb1]'></div>

      <div className='grid place-items-center lg:grid-cols-2 gap-14'>
        {/* <img src='/assets/WhoImage1.png' alt='LOGO' className='m-auto' /> */}
        <div className='relative w-full h-full flex justify-end items-start'>
          <img
            className='absolute w-1/2 h-1/2 top-24 left-0 -z-10'
            src='/assets/orange dots.png'
          />
          <div className='w-4/5 h-[250px] sm:w-4/5 sm:h-5/6 mr-8 rounded-xl md:rounded-[36px] bg-slate overflow-hidden'>
            <img
              src='https://shorturl.at/FjFOa'
              alt='Image'
              className='w-full h-full '
            />
            <div className='w-1/2 md:h-3/5 bg-slate border-2 md:border-8 border-white absolute -bottom-8 lg:-bottom-0  left-0 rounded-xl md:rounded-[32px] overflow-hidden'>
              <img src='https://shorturl.at/2eybe' className='w-full h-full' />
            </div>
          </div>
        </div>

        <div className='text-center lg:text-left lg:ml-10'>
          <img src='/assets/BannerLines.png' className='m-auto lg:ml-0' />
          <h2 className='text-4xl mt-4 lg:text-[48px] font-extrabold'>
            Who We Are
          </h2>
          <p className='my-8 lg:w-3/4 text-base lg:text-lg font-paprika text-slate'>
            We are a Dhaka based Digital Communication Agency committed to
            creating an actionable strategy, online marketing & technology
            solution for our partners. As a multidisciplinary company, we
            operate as a unified
          </p>
          <p className='text-sm font-paprika text-slate'>
            Join the 10.000+ Companys Trusting{' '}
          </p>
          {/* <div className='flex justify-around lg:justify-start lg:gap-14 my-10'>
            <img src='/assets/logo1.png' />
            <img src='/assets/logo1.png' />
            <img src='/assets/logo1.png' />
          </div>
          <div className='flex justify-around lg:justify-start lg:gap-14 my-10'>
            <img src='/assets/logo1.png' />
            <img src='/assets/logo1.png' />
            <img src='/assets/logo1.png' />
          </div> */}

          <div className='grid mx-auto lg:ml-0 grid-cols-3 my-8 gap-8 w-3/4'>
            {brandzlogo.map((item, i) => (
              <img key={i} src={item.logo} alt='Logo' className='' />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whowe
