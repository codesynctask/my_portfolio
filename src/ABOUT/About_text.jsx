import React from 'react'

function About_text(props) {
  return (
    <div className='text-wrap w-screen h-fit  flex justify-center flex-col items-center  absolute  z-10 text-[3vw]   font-bold leading-[20vh] flex-shrink'>
        <h1 className='text-red-600'>Hello, I Am</h1>
        <h1 className='text-[18vw] uppercase text-white  '>{props.text_name}</h1>
    </div>
  )
}

export default About_text