import React from 'react'
import Hero from '../Components/Hero'
import FeatureDestination from '../Components/FeatureDestination'
import ExclusiveOffers from '../Components/ExclusiveOffers'
import Testimonials from '../Components/Testimonials'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
  return (
    <>
        <Hero />
        <FeatureDestination />
        <ExclusiveOffers />
        <Testimonials />
        <NewsLetter />
    </>
  )
}

export default Home