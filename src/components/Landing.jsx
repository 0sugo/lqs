import React from 'react'
import hero from '../assets/Rectangle.svg';

const Landing = () => {
  return (
    <div>
      <div className='bg-customRed2 md:bg-inherit  md:relative bg-top-80 opacity-93' style={{ borderRadius: ' 10% 0 0 0' }}>
        <img src={hero} className='w-full h-full object-cover md:h-[332px] md:rounded-lg' alt="Hero" />

        <div className='md:absolute md:inset-24 md:rounded-r-3xl md:left-0 md:bg-[#D53E00ED] md:opacity-85 flex md:w-3/5 justify-between p-4 items-center'>
          <div className='text-white md:ml-6'>
            <p className='text-2xl font-normal md:text-4xl'>BEST DEALS</p>
            <span className='md:text-xl'>On Black Labels</span>
          </div>

          <div>
            <span className='uppercase text-[#952900] p-2 md:p-4 rounded-lg bg-white font-medium md:text-lg md:font-medium'>order now</span>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Landing
