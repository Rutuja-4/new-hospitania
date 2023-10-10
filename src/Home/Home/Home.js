import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carausal from '../../Footer/Carausal'
import Shoppage from '../../Shop-Pages/Shoppage'
import Card1 from '../../Shop-Pages/SubCards/Card1'

function Home() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Carausal/>}/>
                <Route path='/shoppage' element={<Shoppage/>}/>
                <Route path='/card1' element={<Card1/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Home
