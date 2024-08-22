import Button from "./utils/Button"

const ServiceData = [
  {
    icon: '/src/assets/State.png',
    title: 'Marketing Strategy',
    des: 'Social Media has changed the way we interact & do business while creating'
  },
  {
    icon: '/src/assets/Social.png',
    title: 'Social Marketing',
    des: 'Social Media has changed the way we interact & do business while creating'
  },
  {
    icon: '/src/assets/Content.png',
    title: 'Content Marketing',
    des: 'Social Media has changed the way we interact & do business while creating'
  }
]

const Services = () => {
  return (
    <div className='container'>
      <div className='flex flex-col items-center mt-20'>
        <img src='/src/assets/BannerLines.png' className='w-28' />
        <h2 className='text-[48px] font-extrabold'>Our Services</h2>
        <p className='text-center text-lg font-paprika text-slate my-4'>
          We have been providing great <br /> flooring solutions service.
        </p>
      </div>

      <div className='grid lg:grid-cols-3 gap-8 my-8 before:absolute relative before:w-3/4 before:h-20 before:bg-[#DADADC] before:-z-20 before:top-8'>
        {ServiceData.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center py-10 rounded-[20px] px-2 md:px-10 ${
              i == 0 && 'bg-[#EBF7E9]'
            }  ${i == 1 && 'bg-[#D8EAFF]'}  ${i == 2 && 'bg-[#FBF1EC]'}  `}
          >
            <img src={item.icon} alt='state' className='w-14 mt-4' />
            <h3 className='text-3xl my-6 font-semibold font-sans text-center'>
              {item.title}
            </h3>
            <p className='mb-4 text-lg text-slate text-center font-paprika '>
              {item.des}
            </p>
         <Button text="Read More"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
