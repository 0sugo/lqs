import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import ellipse from '../../assets/Ellipse.svg'
import pinacle from '../../assets/pinacle.svg'

const Reviews = () => {
  return (
    <div className='flex gap-4 items-center'>
      <div className='hidden md:flex w-[50%] relative'>
        <img src={ellipse} alt="reviews" style={{ width: '100%', height: 'auto' }} />
        <img src={pinacle} alt="reviews" className='absolute top-0 right-0 ' />
      </div>

      <div className='text-[#1D1B20] md:w-[50%] flex flex-col gap-3 md:text-right'>

        <h2 className='md:border-b md:[#D53E00]'>LiquorBox Reviews</h2>
        <span className='text-lg'>What do Liquorbox Users have to say?</span>
        <span className='text-sm'>Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.</span>
        <span className='text-base font-medium md:mt-[6%]'>JOHN DOE,LIQUORBOX USER</span>

        <div className='bg-[#B2CCEF] text-[#203A57] flex items-center md:justify-center md:rounded-l-[35px] justify-between gap-2 px-2 py-4 md:mt-[10%]'>
          <span className='w-8/12 text-xl  font-medium'>See What LiquorBox <br /> Lovers are Saying</span>
          <div className='flex flex-col'>
            <div className='flex text-white '>
              <IoIosStar className='size-5' />
              <IoIosStar className='size-5' />
              <IoIosStar className='size-5' />
              <IoIosStar className='size-5' />
              <IoIosStarHalf className='size-5' />
            </div>
            <div className='flex flex-col md:flex-col-reverse'>
              <span className='text-[#203A57] text-xs'>4.7 star rating</span>
              <span className='text-[#203A57] text-xs'>4556 reviews</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reviews
