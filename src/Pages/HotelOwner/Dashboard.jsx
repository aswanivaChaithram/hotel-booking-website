import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  return (
    <div>
        <Title align='left' font='outfit' title="Dashboard" subtitle='Monitor 
        your room listings, track bookings and analyze revenue-all in one place. 
        Stay updates with real-time insights to ensure smooth operations' />

        <div className='flex gap-4 my-8'>

            {/* Total Booking */}
            <div className="bg-blue-50 border border-blue-100 rounded
            flex p-4 pr-8">
                <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden
                 h-10' />

                 <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Bookings</p>
                    <p className='text-neutral-500 text-base'>
                        {dashboardData.totalBookings}
                    </p>
                 </div>
            </div>

             {/* Total Revenue */}
            <div className="bg-blue-50 border border-blue-100 rounded
            flex p-4 pr-8">
                <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden
                 h-10' />

                 <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-blue-500 text-lg'>Total Revenue</p>
                    <p className='text-neutral-500 text-base'>
                        $ {dashboardData.totalRevenue}
                    </p>
                 </div>     
            </div>
        </div>

        {/* Recent Bookings */}
        <h2 className='text-xl text-blue-950/70 font-medium mb-5'>
            Recent Bookings 
        </h2>

        <div className='w-full max-w-3xl text-left border border-gray-300
        rounded-lg max-h-80 overflow-y-scroll'>

            <table className='w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='py-3 px-4 text-gray-800 text-medium'>
                            User Name
                        </th>
                        <th className='py-3 px-4 text-gray-800 text-medium
                        max-sm:hidden'>
                            Room Name
                        </th>
                        <th className='py-3 px-4 text-gray-800 text-medium
                        text-center'>
                            Total Amount
                        </th>
                        <th className='py-3 px-4 text-gray-800 text-medium
                        text-center'>
                            Payment Status
                        </th>
                    </tr>
                </thead>

                <tbody className='text-sm'>
                    {dashboardData.bookings.map((item, index) => (
                        <tr key={index} className='text-sm border-t
                        border-gray-300'>
                            <td className='py-3 px-4 text-gray-700'>
                                {item.user.username}
                            </td>
                            <td className='py-3 px-4 text-gray-700 
                            max-sm:hidden'>
                                {item.room.roomType}
                            </td>
                            <td className='py-3 px-4 text-gray-700 
                            text-center'>
                                $ {item.totalPrice}
                            </td>
                            <td className='py-3 px-4 text-gray-700 
                            text-center'>
                                <button className={`py-2 px-3 rounded-full
                                ${item.isPaid ? "bg-green-200 text-green-600"
                                 : "bg-red-200 text-red-600"}`}>
                                    {item.isPaid ? "Completed" : "Pending"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Dashboard