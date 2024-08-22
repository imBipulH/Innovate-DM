// eslint-disable-next-line react/prop-types
const Heading = ({ title }) => {
  return (
    <div className='flex flex-col items-center my-6'>
      <img src='/assets/BannerLines.png' className='w-28 my-4' />
      <h2 className='text-4xl lg:text-[48px] font-extrabold text-center leading-tight'>{title}</h2>
    </div>
  )
}

export default Heading
