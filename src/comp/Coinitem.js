import React from 'react'
import "./Coin.css"

import { NavLink } from 'react-router-dom'
const Coinitem = ({datas}) => {
  
  return (
    <NavLink to={`/coins/${datas.id}`} id='link'>

    <div> <div className='coin-row'>
    <p>
      {datas.market_cap_rank}
    </p>
    <div className='log-symbol'>
      <img src={datas.image}></img>
      <p>{datas.symbol.toUpperCase()}</p>
    </div>
    <p>₹{datas.current_price}</p>
    <p>{datas.market_cap_change_percentage_24h}%</p>
    <p className='hide-mobile'>{datas.total_volume}</p>
    <p className='hide-mobile'>{datas.market_cap}</p>
  </div></div>
  </NavLink>
  )
}

export default Coinitem