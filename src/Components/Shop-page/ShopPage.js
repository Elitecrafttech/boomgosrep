import React from 'react'
import Navbar from '../Navbar'
import Shop from './Shop'
import ShopHero from './ShopHero'
import Mobilecolumn from './Mobilecolumn'

const ShopPage = () => {
  return (
    <div>
        <Navbar home = "active"/>
        <Shop />
        <Mobilecolumn />
        <ShopHero/>
    </div>
  )
}

export default ShopPage