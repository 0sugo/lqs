import { useState } from 'react';
import chvalac from '../assets/CHValac.png';
import jd from '../assets/JD.png';
import jameson from '../assets/Jameson.png';
import { FaHouse } from "react-icons/fa6";
import { FaWhatsapp } from 'react-icons/fa';

const WhiskeyPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { name: 'CH Valac Dry Red 750ml - Spain', price: '4,500 KSH', category: 'Wine', image: chvalac },
    { name: 'Jack Daniels 750ml', price: '4200 KSH', category: 'Wine', image: jd },
    { name: 'Jameson 750ml', price: '3500 KSH', category: 'Wine', image: jameson },
  ];

  return (
    <div>
      <div>
        <span className='flex text-nowrap text-xs px-3 py-2'><FaHouse /> / LIQUOR STORE / WINES / RED WINES</span>
        <div className='uppercase'>
          <span>spirits</span>
          <span>wines</span>
          <span>beers, infusions, and sake</span>
        </div>

        <div className=' flex flex-col'>
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
    </div>
  )
}

export default WhiskeyPage;
