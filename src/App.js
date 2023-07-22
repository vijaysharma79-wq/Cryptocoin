import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./comp/Coin.css"
import Navbar from "./comp/Navbar"
import Coin from "./comp/Coin"
import Coins from "./comp/Coins"
import { Route, Router, Routes } from "react-router-dom"
function App() {

const [coin,setcoin]=useState([])

const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
useEffect(()=>{
  axios.get(url).then((response)=>{
    setcoin(response.data)
    // console.log(response.data[0])
  }).catch((error)=>{
    // console.log(error)
  })
},[])

return (
<>
{/* {console.log(Coin)} */}


<Navbar />

<Routes>
 {<Route exact path="/" element={<Coins coin={coin}/>}></Route>}
 <Route path="/Coins/:id" element={<Coin coin={coin}/>}></Route>

</Routes>
    {/* // <Coins coin={coin}/> */}
    </>


  
    
  )
}

export default App;
