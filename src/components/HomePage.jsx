import Landing from "./Landing";
import NewArrivals from "./NewArrivals";
import Reviews from "./home_components/Reviews";
import About from "./home_components/About";
import Contact from "./home_components/Contact";
import chvalac from '../assets/CHValac.png';
import barter from '../assets/barterhse.svg';
import monkey from '../assets/monkey47.svg';

const HomePage = () => {

  const BestSellingWinesitems = [
    { name: 'CH Valac Dry Red 750ml - Spain1', price: '4,500 KSH', category: 'Wine', image: chvalac },
    { name: 'CH Valac Dry Red 750ml - Spain2', price: '200 KSH', category: 'Wine', image: monkey },
    { name: 'CH Valac Dry Red 750ml - Spain3', price: '300 KSH', category: 'Wine', image: barter },
    { name: 'CH Valac Dry Red 750ml - Spain4', price: '300 KSH', category: 'Wine', image: chvalac },
    { name: 'CH Valac Dry Red 750ml - Spain5', price: '300 KSH', category: 'Wine', image: monkey },
    { name: 'CH Valac Dry Red 750ml - Spain6', price: '300 KSH', category: 'Wine', image: barter },
  ];

  const NewArrivalitems = [
    { name: 'CH Valac Dry Red 750ml - Spain1', price: '4,500 KSH', category: 'Wine', image: chvalac },
    { name: 'CH Valac Dry Red 750ml - Spain2', price: '200 KSH', category: 'Wine', image: monkey },
    { name: 'CH Valac Dry Red 750ml - Spain3', price: '300 KSH', category: 'Wine', image: barter },
    { name: 'CH Valac Dry Red 750ml - Spain4', price: '300 KSH', category: 'Wine', image: chvalac },
    { name: 'CH Valac Dry Red 750ml - Spain5', price: '300 KSH', category: 'Wine', image: monkey },
    { name: 'CH Valac Dry Red 750ml - Spain6', price: '300 KSH', category: 'Wine', image: barter },
  ];

  const Trendingitems = [
    { name: 'CH Valac Dry Red 750ml - Spain1', price: '4,500 KSH', category: 'Wine', image: chvalac },
    { name: 'CH Valac Dry Red 750ml - Spain2', price: '200 KSH', category: 'Wine', image: monkey },
    { name: 'CH Valac Dry Red 750ml - Spain3', price: '300 KSH', category: 'Wine', image: barter },
    { name: 'CH Valac Dry Red 750ml - Spain4', price: '300 KSH', category: 'Wine', image: chvalac },
    { name: 'CH Valac Dry Red 750ml - Spain5', price: '300 KSH', category: 'Wine', image: monkey },
    { name: 'CH Valac Dry Red 750ml - Spain6', price: '300 KSH', category: 'Wine', image: barter },
  ];

  return (
    <div className="px-4 mb-16 md:px-0">
      <div className=" md:w-[80%] mx-auto">

        <Landing />

        <span className='text-customRed2 text-xl uppercase block border-b font-medium border-customgrey mt-8'>New Arrivals</span>
        <NewArrivals items={NewArrivalitems} />
        <span className='text-customRed2 text-xl uppercase block border-b font-medium border-customgrey mt-8'>Trending Deals</span>
        <NewArrivals items={Trendingitems} />
        <span className='text-customRed2 text-xl uppercase block border-b font-medium border-customgrey mt-8'>Best Selling Wines</span>
        <NewArrivals items={BestSellingWinesitems} />
        <span className='bg-[#D53E00] hidden md:flex items-end justify-center text-white p-4 rounded-lg'>VISIT THE STORE</span>
      </div>

      <Reviews />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
