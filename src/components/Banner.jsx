export const Banner = () => {
  return (
    <div className='container relative'>
      {/* Banner Outside Container Design */}
      <div className='hidden xl:block absolute -top-32 -left-96'>
        <img src='/assets/BannerImage1.png' />
        <img className='absolute top-40 left-24' src='/3D Images.png' />
        <div className='w-96 aspect-square rounded-full absolute left-10 top-80 -z-20 bg-green-100/60 blur-3xl shadow-[-100px_-100px_100px_0px_#d3f5df]'></div>
      </div>

      {/* Banner Left Side Inside Container Part */}
      <div className='container lg:py-20 my-10 relative'>
        <div
          className='bg-primary/10 blur-3xl rounded-full absolute w-1/2
             h-1/2 top-1/2 -translate-y-1/2 shadow-[100px_100px_1000px_#fccfb1] -z-10'
        ></div>

        <div className='flex flex-col justify-center items-center lg:flex-row lg:items-end'>
          <div className='text-center lg:text-left w-full lg:w-2/3'>
            <img
              src='/assets/BannerLines.png'
              alt='image'
              className='m-auto lg:ml-0'
            />
            <h2 className='text-4xl lg:text-[72px] font-sans font-bold leading-tight my-8'>
              We Are Digital <span className='text-primary'>Marketing</span>{' '}
              Agency
            </h2>

            <p className='text-base lg:text-xl text-slate font-paprika w-full lg:w-3/4'>
              Use customer data to build great and solid product experiences
              that convert. Digital marketing’s development has changed the way
              brands and businesses use technology for marketing.{' '}
            </p>
            <button className='px-8 py-3 my-8 bg-primary text-white text-xl font-sans font-bold rounded-full hover:scale-105 hover:shadow-2xl active:bg-primary/50 '>
              Get Free Quoto
            </button>
          </div>

          {/* Banner Right Side (Images & Icons) */}

          <div className='relative mt-32 lg:mt-0 '>
            <img
              className='absolute animate-wiggle -top-20 lg:-top-28 w-14 lg:left-20'
              src='/assets/FB.png'
            />
            <img
              className='absolute animate-bounce top-24 lg:top-52 -left-20 lg:-left-24 w-14'
              src='/assets/Instagram.png'
            />
            <img
              className='absolute animate-pulse bottom-0 -right-16 lg:-right-44 w-14'
              src='/assets/Whatsapp.png'
            />
            <img
              className='absolute -bottom-2 lg:left-64 -z-30'
              src='/assets/BannerImage2.png'
            />

            <div className='w-[181px] h-[191px] lg:w-[351px] lg:h-[361px] bg-[#c4c4c4] rounded-[40px] border-white border-4 absolute bottom-24 lg:-top-52 left-20 lg:left-52 -z-20 overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src='https://shorturl.at/3tvPs'
              />
            </div>
            <div className='w-[181px] h-[191px] lg:w-[351px] lg:h-[361px] bg-[#c4c4c4] rounded-[40px] border-white border-4 z-20 overflow-hidden'>
              <img
                className='w-fit h-full object-cover'
                src='https://shorturl.at/y72RQ'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
