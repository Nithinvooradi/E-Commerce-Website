import React from 'react'
import NavBar from './NavBar'
import Slider from './Slider'
import NavigateButtons from './NavigateButtons'
import ProductSection from './ProductSection'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
        <NavBar/>
        <Slider/>
        <NavigateButtons/>
        <ProductSection/>
        <Footer/>
    </div>
  )
}

export default Main