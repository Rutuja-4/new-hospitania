import React from 'react'
import Carausal from './Carausal'
import FlashDealCarousel from './FlashDealCarousel.js'
import Footer from '../Footer/Footer'
import HomePageBanner from './HomePageBanner'

const Main = () => {
  return (
    <div>
      <Carausal/>
      <HomePageBanner/>
      <FlashDealCarousel/>
      <FlashDealCarousel/>
      <FlashDealCarousel/>
      <Footer/>
    </div>
  )
}

export default Main
