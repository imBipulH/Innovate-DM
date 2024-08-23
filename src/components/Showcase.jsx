import Heading from './utils/Heading'

const showcaseData = [
  'All',
  'Digital Mkt',
  'Branding',
  'Content Mkt',
  'Social Media Mkt'
]

const Showcase = () => {
  return (
    <div className='container py-2 lg:py-20'>
      <Heading title={'Work Showcase'} />
      <div className='flex justify-center lg:justify-start flex-wrap mt-10 gap-8'>
        {showcaseData.map((item, i) => (
          <p
            key={i}
            className={` text-lg lg:text-2xl font-sans font-semibold leading-3 lg:leading-tight hover:text-primary  duration-200 cursor-pointer ${
              i === 0 ? 'text-primary' : 'text-slate'
            }`}
          >
            {item}
          </p>
        ))}
      </div>
      {/* Add your showcase images here */}
      <div className='mt-14 flex flex-wrap lg:flex-nowrap gap-6'>
        <div className='h-[344px] size-full w-full max-w-fit lg:w-1/4 bg-gray rounded-2xl overflow-hidden hover:scale-105 duration-200'>
          <img
            src='https://shorturl.at/mGLe7'
            className='w-full h-full'
          />
        </div>
        <div className='h-[344px] md:w-2/4 bg-gray rounded-2xl overflow-hidden hover:scale-105 duration-200'>
          <img
            src='https://shorturl.at/JuQDl'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='h-[344px] w-fit lg:w-1/4 bg-gray rounded-2xl overflow-hidden hover:scale-105 duration-200'>
          <img
            src='https://picsum.photos/id/5/300/300'
            className='w-full h-full'
          />
        </div>
      </div>
      <div className='my-6 flex flex-wrap lg:flex-nowrap gap-6'>
        <div className='h-[432px] lg:w-[37%] bg-gray rounded-2xl overflow-hidden hover:scale-105 duration-200'>
          <img
            src='/assets/colorfulnotebook.avif'
            className='w-full h-full'
          />
        </div>
        <div className='h-[432px] lg:w-[29%] bg-gray rounded-2xl overflow-hidden hover:scale-105 duration-200'>
          <img
            src='https://shorturl.at/Nd85l'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='h-[432px] lg:w-[33%] bg-gray rounded-2xl overflow-hidden hover:scale-105 duration-200'>
          <img
            src='https://picsum.photos/id/26/300/300'
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Showcase
