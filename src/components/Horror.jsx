import React from 'react'

const Horror = () => {
  return (
    <div className=' text-white text-2xl ml-5 mt-5 mr-5 h-auto   ' >
        <div></div>
        <h1>Horror</h1>
        <div className='flex flex-col ' >
        <div className=' grid  rounded-lg grid-cols-4  ' >
            <div className='border rounded-xl h-[150px] w-[300px]  mt-3 mr-8  border-[#413c3c] hover:scale-[102%] duration-200 ' >
                <img src="/incantation.png" className=' h-full w-full object-cover rounded-xl shadow-2xl drop-shadow-sm shadow-[#5e5757] ' alt="" />
            </div>
            <div className='border rounded-xl h-[150px] w-[300px]  mt-3 mr-8 border-[#413c3c] hover:scale-[102%] duration-200 ' >
                <img src="/conjuring2.png" className='h-full w-full object-cover rounded-xl shadow-2xl drop-shadow-sm shadow-[#5e5757] ' alt="" />
            </div>
            <div className='border rounded-xl h-[150px] w-[300px]  mt-3 mr-8 border-[#413c3c] hover:scale-[102%] duration-200 ' >
                <img src="/hereditary.png" className=' h-full w-full object-cover rounded-xl shadow-2xl drop-shadow-sm shadow-[#5e5757] ' alt="" />
            </div>
            <div className='border rounded-xl h-[150px] w-[300px] mt-3 mr-8 border-[#413c3c]  hover:scale-[102%] duration-200' >
                <img src="/annabelle.png" className=' h-full w-full object-cover rounded-xl shadow-2xl drop-shadow-sm shadow-[#5e5757] ' alt="" />
            </div>


        </div>
        <div className=' absolute bottom-[-200px] p-2  '>
            helloo
        </div>
        </div>
        </div>
  )
}

export default Horror;