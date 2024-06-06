import React from 'react'

const Slider = () => {
  return (
    <div className='w-auto h-auto relative '>
        <img src="/src/assets/triplehrock.jpg" alt="" className=' inset-0  w-full h-[88vh] object-cover' style={{ objectPosition: '110% 0%' }} />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-100"></div>
        <div className=' absolute text-9xl font-black ml-36 top-56 text-white '>
            WWE
        </div>
        <div className=' absolute text-xl font-bold ml-40 top-96 max-w-[550px] text-gray-400 '>
            Watch the latest action from WWE as 'The Final Boss' The Rock tries to end 'The American Nightmare' Cody Rhodes' story!
        </div>
    </div>
    
  )
}

export default Slider