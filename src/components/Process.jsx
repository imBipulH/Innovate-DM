import Button from './utils/Button'
import Heading from './utils/Heading'

// eslint-disable-next-line react/prop-types
const Card = ({ btnTitle, title, des, color }) => {
  return (
    <div
      className={`bg-[${color}] rounded-3xl p-4 lg:p-8 lg:w-[495px] h-full duration-200 hover:scale-105 hover:mb-5`}
    >
      <Button text={btnTitle} />
      <h3 className='text-2xl lg:text-3xl font-sans font-semibold my-4'>
        {title}
      </h3>
      <p className='font-paprika text-base lg:text-lg text-slate'>{des}</p>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const BlankCard = ({ img }) => {
  return (
    <div className='flex flex-col items-center lg:w-1/2 h-[324px] overflow-hidden bg-slate rounded-3xl'>
      <img src={img} className='w-full h-full' />
    </div>
  )
}

const Process = () => {
  return (
    <div className='container py-2 lg:py-14'>
      <Heading title={'Our Creative Process'} />
      <p className='text-sans text-lg text-slate font-paprika text-center'>
        We provide digital experience services to startups{' '}
        <br className='hidden sm:block' /> and small businesses.
      </p>

      <div className='py-14 mt-8 flex flex-col gap-6'>
        <div className='flex flex-col lg:flex-row gap-4 xl:gap-36 items-center'>
          <Card
            btnTitle='Step 1'
            title='Global SEO Research'
            des='Practical tools and features make it easier to build and manage your site.'
            color='#EBF7E9'
          />

          <BlankCard img='https://shorturl.at/B1AJa' />
        </div>
        <div className='flex flex-col-reverse lg:flex-row gap-4 xl:gap-36 items-center'>
          <BlankCard img='https://picsum.photos/id/13/300/200' />
          <Card
            btnTitle='Step 2'
            title='Social Media Integration'
            des='Practical tools and features make it easier to build and manage your site.'
            color='#D8EAFF'
          />
        </div>
        <div className='flex flex-col lg:flex-row gap-4 xl:gap-36 items-center'>
          <Card
            btnTitle='Step 3'
            title='Launching the Application'
            des='Practical tools and features make it easier to build and manage your site.'
            color='#FBF1EC'
          />

          <BlankCard img='https://picsum.photos/id/20/300/200' />
        </div>
      </div>
    </div>
  )
}

export default Process
