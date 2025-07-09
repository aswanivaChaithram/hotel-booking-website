import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-28 
    xl:px-42 pt-20 pb-30 -mt-34'>
        <div className='flex flex-col md:flex-row items-center justify-between 
        w-full'>
            <Title title="Exclusive Offers" subtitle="Take advantage of our 
            limited-time offers and special packages to enhance your stay 
            and create unforgettable memories." align="left" />

            <button className='group flex gap-2 items-center font-medium 
            cursor-pointer max-md:mt-12'>
                View All Offers
                <img src={assets.arrowIcon} alt="arrow-icon" 
                className='group-hover:translate-x-1 transition-all' />
            </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {exclusiveOffers.map((offer) => (
                <div key={offer._id} className="group relative flex flex-col
                items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl
                text-white bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: `url(${offer.image})`}}>

                    <p className='px-3 py-1 absolute top-4 left-4 text=xs bg-white
                    text-gray-800 font-medium rounded-full'>{offer.priceOff}% OFF</p>

                    <div>
                        <p className='text-2xl font-medium font-playfair'>{offer.title}</p>
                        <p>{offer.description}</p>
                        <p className='text-xs text-white/70 mt-3'>Expires {offer.expiryDate}</p>
                    </div>

                    <button className='flex items-center gap-2 font-medium
                    cursor-pointer mt-4 mb-5 hover:gap-3 transition-all'>
                        View Offers
                        <img className='invert' src={assets.arrowIcon} alt="arrow-icon" />
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ExclusiveOffers 