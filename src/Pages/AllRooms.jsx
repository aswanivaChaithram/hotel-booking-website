import React, { useState } from 'react'
import Title from '../Components/Title'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../Components/StarRating'

const CheckBox = ({label, selected = false, onChange = () => {}}) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="checkbox" checked={selected} onChange={(e) => 
        onChange(e.target.checked, label)} />
        <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const RadioButton = ({label, selected = false, onChange = () => {}}) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input type="radio" checked={selected} onChange={() => onChange(label)} />
        <span className='font-light select-none'>{label}</span>
    </label>
  )
}

const AllRooms = () => {

  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = [
    "Single Bed", "Family Suite", "Double Bed", "Luxury Room",
  ];

  const priceRange = [
    "₹2500 to ₹5000", "₹5000 to ₹8000", "₹8000 to ₹15000",
  ];

    const sortByOptions = [
    "Price Low to High", "Price High to Low", "Newest First",
  ];

  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between
    pt-26 md:pt-35 px-4 md:px-16 lg:px-30'>

        <div>
          <Title title="Hotel Rooms" subtitle="Take advantage of our 
          limited-time offers and special packages to enhance your stay and create 
          unforgettable memories." align="left" />

          {roomsDummyData.map((room) => (
            <div key={room._id} className='flex flex-col md:flex-row items-start
            py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>

              <img src={room.images[0]} alt="hotel-img" title='View Room Details' 
              className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover 
              cursor-pointer' onClick={() => {navigate(`/rooms/${room._id}`); scrollTo(0,0)}} />

              <div className='md:w-1/2 flex flex-col gap-2'>
                <p className='text-gray-500'>{room.hotel.city}</p>
                <p className='text-gray-800 text-3xl font-playfair 
                cursor-pointer' onClick={() => {navigate(`/rooms/${room._id}`); 
                scrollTo(0,0)}}>{room.hotel.name}</p>

                <div className='flex items-center'>
                  <StarRating />
                  <p className='ml-2'>200+ reviews</p>
                </div>

                <div className='flex items-center gap-1 text-gray-500 mt-2
                text-sm'>
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{room.hotel.address}</span>
                </div>
                {/* Room Amenities */}
                <div className='flex items-center gap-2'>
                  {room.amenities.map((item, index) => (
                     <div key={index} className='flex items-center gap-2 
                     bg-gray-100 px-4 py-2 rounded-lg'>
                       <img className='h-3' src={facilityIcons[item]} alt={item} />
                       <p className='text-xs'>{item}</p>
                     </div>
                ))}
                </div>
                {/*Room Price per Night */}
                <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
              </div>
            </div>
          ))}
        </div>

          {/* Filters */}
          <div className='bg-white w-80 border border-gray-300 text-gray-600
          max-lg:mb-8 min-lg:mt-16'>

            <div className={`flex items-center justify-between px-5 py-2.5
              min-lg:border-b border-gray-300 ${openFilters && "border-b"}`}>
              <p className='text-base font-medium text-gray-800'>FILTERS</p>
              <div className='text-xs cursor-pointer'>

                <span onClick={() => setOpenFilters(!openFilters)} className=
                'lg:hidden'>{openFilters ? "HIDE" : "SHOW"}</span>

                <span className='hidden lg:block'>CLEAR</span>
              </div>
            </div>

            <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} 
            overflow-hidden transition-all duration-700`}>
              <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Popular filters</p>
                {roomTypes.map((room, index) => (
                  <CheckBox key={index} label={room} />
                ))}
              </div>

              <div className='px-5 pt-5'>
                <p className='font-medium text-gray-800 pb-2'>Price</p>
                {priceRange.map((price, index) => (
                  <CheckBox key={index} label={price} />
                ))}
              </div>

              <div className='px-5 pt-5 pb-7'>
                <p className='font-medium text-gray-800 pb-2'>Sort By</p>
                {sortByOptions.map((sort, index) => (
                  <RadioButton key={index} label={sort} />
                ))}
              </div>
            </div>
          </div>
    </div>
  )
}

export default AllRooms