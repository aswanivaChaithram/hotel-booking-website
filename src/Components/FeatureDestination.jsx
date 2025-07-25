import React from 'react'
import Hotelcard from './Hotelcard'
import { roomsDummyData } from '../assets/assets'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeatureDestination = () => {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 
    py-20 bg-slate-20'>

        <Title title="Featured Hotels" subtitle="Discover our handpicked 
        selection of exceptional properties around the world, offering 
        unparalleled luxury and unforgettable experiences" />

        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room, index) => (
                <Hotelcard room={room} index={index} key={room._id}  />
            ))}
        </div>

        <button className='my-16 px-4 py-2 text-sm font-medium border 
        border-gray-300 rounded bg-white hover:bg-gray-200 transition-all 
        cursor-pointer' onClick={() => {navigate('/rooms'); scrollTo(0,0)}}>
            View All Hotels
        </button>
    </div>
  )
}

export default FeatureDestination