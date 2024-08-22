// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return (
    <button className='py-3 px-6 z-10 bg-transparent rounded-full text-black font-bold my-4 relative before:absolute before:bg-primary before:w-12 before:h-full before:top-0 before:left-0 before:rounded-full before:-z-10 hover:before:w-full before:duration-200'>
      {text}
    </button>
  )
}

export default Button
