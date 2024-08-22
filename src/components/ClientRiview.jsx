const ReviewData = [
  {
    msg: 'Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient.',
    name: 'John Doe',
    title: 'Fasion Designer',
    img: 'https://picsum.photos/id/64/200'
  },
  {
    msg: 'Social Media has changed the way we interact & do business while creating.',
    name: 'Jane Smith',
    title: 'Creative Director',
    img: 'https://picsum.photos/id/65/200'
  }
]
const ClientRiview = () => {
  return (
    <div className='container py-2 lg:py-14'>
      <div className='grid lg:grid-cols-3 gap-10'>
        <div className="w-full text-center lg:text-left">
          <img src='/src/assets/BannerLines.png' className='w-28 m-auto lg:ml-0' />
          <h2 className='text-4xl lg:text-[48px] font-extrabold'>Client Review</h2>
          <p className='font-paprika text-base lg:text-lg text-slate my-4'>
            people use digital devices instead of visiting physical shops,
            digital marketing campaigns are becoming more prevalent and
            efficient.
          </p>
        </div>
        <div className='lg:flex gap-8 lg:col-span-2'>
          {ReviewData.map((item, i) => (
            <div
              key={i}
              className={` w-full lg:w-1/2 & shadow-md py-10 px-10 mb-8 flex flex-col justify-between rounded-2xl ${
                i === 0 ? 'bg-[#D8EAFF]' : 'bg-[#FFFFFF]'
              }`}
            >
              <p className='text-lg font-paprika text-slate'>{item.msg}</p>
              <div className='flex justify-end items-center mt-8 gap-6'>
                <div className='relative'>
                  <img
                    src={item.img}
                    className='w-20 aspect-square rounded-full'
                  />
                  <img
                    src='/src/assets/ReviewerLogo.png'
                    className='absolute left-14 -bottom-1'
                  />
                </div>
                <div>
                  <h3 className='text-2xl font-sans font-semibold'>
                    {item.name}
                  </h3>
                  <p className='text-lg font-sans '>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientRiview
