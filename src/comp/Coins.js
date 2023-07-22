import React from 'react'
import Coinitem from './Coinitem'
import { NavLink } from 'react-router-dom'
import "./Coin.css"
const Coins = ({coin}) => {
  return (
    <>
 <div className='container1'>
  
      <div className='heading1'>
        <p>#</p>
        <p className='coin-name'>coin</p>
        <p>price</p>
        <p>24hr</p>
        <p className='hide-mobile'>volume</p>
        <p className='hide-mobile'>mkt cap</p>
      </div>   
      {coin.map((datas)=>{
        return(

  <Coinitem datas={datas} key={datas.id}/>
  
      )
      })}

  </div>
    </>
  )
}

export default Coins