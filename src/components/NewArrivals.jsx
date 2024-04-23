import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import chvalac from '../assets/CHValac.png';

const NewArrivals = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const handleLeftArrowClick2 = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex === 0 ? items.length - 3 : prevStartIndex - 1));
  };

  const handleRightArrowClick2 = () => {
    setStartIndex((prevStartIndex) => (prevStartIndex === items.length - 3 ? 0 : prevStartIndex + 1));
  };

  const visibleItems = items.slice(startIndex, startIndex + 3);

  return (
    <div className=''>

      <div className='flex justify-center my-8 overflow-x-auto md:overflow-hidden md:hidden'>
        <FaArrowLeft className='cursor-pointer w-6 h-6 mt-[50%]' onClick={handleLeftArrowClick} />
        <div className='max-w-md rounded overflow-hidden mx-4'>
          <div className='relative'>
            <img className='w-full' src={items[currentIndex].image} alt={items[currentIndex].name} />
            <span className='absolute bottom-6 right-0 bg-customRed2 py-1 px-4 rounded-l-lg uppercase text-white text-sm'>
              hot and trending
            </span>
          </div>

          <div className=''>
            <div className='flex justify-start py-2'>
              {items[currentIndex] && (
                <span className='inline-block bg-customblue rounded-full px-3 py-1 text-sm font-semibold text-[#203A57] mr-2 mb-2 min-h-8'>{items[currentIndex].category}</span>
              )}
            </div>
            <div className='flex flex-col'>
              <div className='font-normal text-2xl text-customBrown min-h-[100px] overflow-hidden'>
                {items[currentIndex].name}
              </div>

              <div className='flex justify-between'>
                {items[currentIndex] && (
                  <span className='text-[#7B5736]'>{items[currentIndex].price}</span>
                )}
                <span className='text-customRed'>learn More</span>
              </div>
              <div className='flex flex-nowrap items-center px-4 py-2 uppercase rounded-lg bg-[#FFF1ED] text-customBrown shadow-lg my-2' style={{ boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.26)' }}>
                <span className='flex items-center gap-1 mx-auto text-customRed'>
                  <FaWhatsapp />Order via WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>
        <FaArrowRight className='cursor-pointer w-6 h-6 mt-[50%]' onClick={handleRightArrowClick} />
      </div>

      <div className='hidden md:flex justify-center my-8 overflow-x-auto md:overflow-hidden items-center'>
        <FaArrowLeft className='cursor-pointer w-6 h-6' onClick={handleLeftArrowClick2} />
        {visibleItems.map((item, index) => (
          <div key={index} className='max-w-md rounded overflow-hidden mx-4'>
            <div className='relative'>
              <img className='w-full' src={item.image} alt={item.name} />
              <span className='absolute bottom-6 right-0 bg-customRed2 py-1 px-4 rounded-l-lg uppercase text-white text-sm'>
                hot and trending
              </span>
            </div>

            <div className=''>
              <div className='flex justify-start py-2'>
                <span className='inline-block bg-customblue rounded-full px-3 py-1 text-sm font-semibold text-[#203A57] mr-2 mb-2 min-h-8'>{item.category}</span>
              </div>
              <div className='flex flex-col'>
                <div className='font-normal text-2xl text-customBrown min-h-[100px] overflow-hidden'>
                  {item.name}
                </div>

                <div className='flex justify-between'>
                  <span className='text-[#7B5736]'>{item.price}</span>
                  <span className='text-customRed'>learn More</span>
                </div>
                <div className='flex flex-nowrap items-center px-4 py-2 uppercase rounded-lg bg-[#FFF1ED] text-customBrown shadow-lg my-2' style={{ boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.26)' }}>
                  <span className='flex items-center gap-1 mx-auto text-customRed'>
                    <FaWhatsapp />Order via WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <FaArrowRight className='cursor-pointer w-6 h-6' onClick={handleRightArrowClick2} />
      </div>

    </div>



  );
};

export default NewArrivals;
