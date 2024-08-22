import Button from './utils/Button'
import Heading from './utils/Heading'

const BlogData = [
  {
    title: 'How to Be Ahead of Stock Changes',
    author: 'John',
    image: 'https://shorturl.at/DYwYj',
    comment: 5
  },
  {
    title: 'Online Reputation And Management',
    author: 'Amin',
    image: 'https://shorturl.at/esQ9F',
    comment: 10
  },
  {
    title: 'Tips To Move Your Project More Forward',
    author: 'Insider',
    image: 'https://shorturl.at/tRwXB',
    comment: 15
  }
]

const Blog = () => {
  return (
    <div className='container py-2 lg:py-14'>
      <div>
        <Heading title='Our Latest Blog' />
        <p className='font-paprika text-lg text-slate text-center'>
          We provide digital experience services to startups <br /> and small
          businesses.
        </p>
      </div>
      <div className='my-14 lg:grid grid-cols-3 gap-8'>
        {BlogData.map((item, i) => (
          <div key={i} className='rounded-2xl overflow-hidden shadow-lg mb-8'>
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-64 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-2xl font-medium text-dgray mb-2'>
                {item.title}
              </h3>
              <div className='flex justify-start gap-1 mb-2 text-lg'>
                <p className=' text-dgray'>By {item.author} -</p>
                <p className=' text-dgray'>{item.comment} Comments</p>
              </div>
              <Button text='Read More' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
