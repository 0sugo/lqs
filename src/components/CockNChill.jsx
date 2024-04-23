import React, { useState } from 'react'
import { FaHouse } from "react-icons/fa6";
import rectangle from '../assets/rectangle.svg';
import tool from '../assets/tool1.png';
import syrup from '../assets/syrup.png';
import syrup2 from '../assets/syrup2.png';
import userVideo from '../assets/userVids.png';
import playIcon from '../assets/icon.png';
import exp from '../assets/Exp.png';
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const CockNChill = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { image: userVideo },
    { image: userVideo },
    { image: userVideo },
  ];

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className='px-4 '>
      <span className='flex text-nowrap text-xs px-3 py-2'><FaHouse /> / LIQUOR STORE / WINES / RED WINES</span>

      <div className='md:hidden'>
        <span className='bg-[#ffffff] p-4 block text-customRed2 rounded-r-[35px] text-3xl md:absolute top-[10%] md:p-10'>Chill Spot Gallery</span>
        <img src={rectangle} className='md:w-full md:text-3xl md:mx-auto' />
      </div>

      <div className='md:relative md:block hidden'>
        <span className='bg-[#ffffff] p-4 block text-customRed2 rounded-r-[35px] text-3xl md:absolute top-[10%] md:p-8'>Chill Spot Gallery</span>
        <div className='md:w-full md:text-3xl md:mx-auto md:bg-cover md:bg-center md:h-[500px] md:rounded-l-[35px]' style={{ backgroundImage: `url(${rectangle})` }}></div>
      </div>

      <span className='text-customRed2 border-b block border-[#907066] md:my-6 text-xl mb-12'>COCKTAIL KITS</span>

      <div className="md:flex md:w-full md:gap-6">
        <div className="relative my-6 md:1/3">
          <div className="relative flex justify-center">
            {/* <video controls width="400" src="https://s3-figma-videos-production-sig.figma.com/video/1303027207115148497/TEAM/3d6d/e0d4/-023b-4ae4-b30e-32d54f286326?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pT2EEKnenwesOt2m63YGfk~sY0jP904rnZdbIRnTDklQvrmkl2YqTcD5dH0SOW74GBy5mw4trwKU1cCRNiJL7AhMssoyl9adoJ1QU-rO0FnoJs~zeLKDR6MFgDzqrMnggklLmTZtAyqaoz7pR9AohnTEymfViIMXQsJJx9MqpxYSnflArF4thcSmG4klx-sNeECY8l9pBr9EoBqI~7O37K5KoTMb31EpM4wv24OE4gSoohhEPQMan~6VfEe9giDp5xDC-9La2aNT9iuS03NmVwkB6zBqtzXXIHaQLNEgwZzdbUfwocztfFGzx4XAwz6bbEm4wFOR8ADTskjTiqzcYw__"></video> */}
            <img src={userVideo} alt="usrvids" />

            <img src={playIcon} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-customRed2 bg-[#1D1B2080] p-4 rounded-full' />
          </div>
        </div>

        <div className='flex flex-col md:gap-3 md:w-2/3 md:max-h-[492px]'>
          <h2>What Do Our Cocktail Kits Come With?</h2>
          <p className='font-medium text-nowrap'>And how can you use them to elevate your taste?</p>
          <p>Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.</p>

          <div className='flex my-2'>
            <div>
              <p className='font-medium'>Tool #1</p>
              <img src={tool} alt='tool' />
            </div>

            <div>
              <p className='font-medium'>Syrup #1</p>
              <img src={syrup} alt='tool' />
            </div>

            <div>
              <p className='font-medium'>Syrup #2</p>
              <img src={syrup2} alt='tool' />
            </div>
          </div>

          <span className='flex items-center justify-center py-2 gap-2 bg-[#FFF1ED] text-center text-customRed rounded-lg'><FaWhatsapp /> ORDER OUR COCKTAIL KITS</span>

        </div>
      </div>

      <span className='text-customRed2 border-b block border-[#907066] md:my-6 text-xl mb-12'>More User Videos</span>

      <div className='relative flex justify-center items-center gap-3 md:hidden'>

        <FaArrowLeft className='cursor-pointer w-6 h-6' onClick={handleLeftArrowClick} />

        <img src={items[currentIndex].image} alt="usrvids" />

        <img src={playIcon} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-customRed2 bg-[#1D1B2080] p-4 rounded-full' />

        <FaArrowRight className='cursor-pointer w-6 h-6' onClick={handleRightArrowClick} />
      </div>

      <div className='hidden relative md:flex justify-center items-center gap-3 md:flex-wrap md:overflow-hidden md:justify-between'>
        <div className="md:flex">
          {items.map((item, index) => (
            <img key={index} src={item.image} alt={`item-${index}`} className='md:w-1/3 md:flex-shrink-0 md:max-w-xs' />
          ))}
        </div>
        <FaArrowLeft className='cursor-pointer w-6 h-6 absolute left-0 md:hidden' onClick={handleLeftArrowClick} />
        <FaArrowRight className='cursor-pointer w-6 h-6 absolute right-0 md:hidden' onClick={handleRightArrowClick} />
      </div>



      <div className='my-4'>
        <h3 className='text-nowrap text-customRed2 border-b block border-customgrey'>FREQUENTLY ASKED QUESTIONS</h3>

        <div className='flex flex-col mt-4 gap-1'>
          <span className='text-[#1D1B20] font-medium'>QUESTION #1</span>
          <span className='text-sm font-light text-[#1D1B20]'>Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.</span>
        </div>

        <div className='flex flex-col mt-4 gap-1'>
          <span className='text-[#1D1B20] font-medium'>QUESTION #2</span>
          <span className='text-sm font-light text-[#1D1B20]'>Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.</span>
        </div>

        <div className='flex flex-col mt-4 gap-1'>
          <span className='text-[#1D1B20] font-medium'>QUESTION #3</span>
          <span className='text-sm font-light text-[#1D1B20]'>Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.</span>
        </div>

      </div>

      <div>
        <h3 className='text-nowrap text-customRed2 border-b block border-customgrey'>CHILL SPOT EXPERIENCES</h3>
        <div className='mt-8'>
          <img src={exp} alt="" />

          <div className='flex flex-col gap-4 mt-4'>
            <span className='font-medium text-base'>I had so much fun!</span>
            <span className='font-light text-sm'>Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.</span>
            <p className='font-medium'>JOHN DOE, LIQOURBOX USER</p>
          </div>
        </div>

      </div>

      <div className='bg-[#B2CCEF] text-[#203A57] flex items-center justify-between  gap-3 px-2 py-4 my-8'>
        <span className='w-8/12 text-xl font-medium'>See What LiquorBox Lovers are Saying</span>
        <div className='flex flex-col w-1/2'>
          <div className='flex text-white '>
            <IoIosStar className='size-5' />
            <IoIosStar className='size-5' />
            <IoIosStar className='size-5' />
            <IoIosStar className='size-5' />
            <IoIosStarHalf className='size-5' />
          </div>
          <span className='text-[#203A57] text-xs'>4.7 star rating</span>
          <span className='text-[#203A57] text-xs'>4556 reviews</span>
        </div>

      </div>




    </div>
  )
}

export default CockNChill
