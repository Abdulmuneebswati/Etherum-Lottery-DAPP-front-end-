import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Main from '../../Components/Main/Main'
import Navbar from '../../Components/Navbar/Navbar'
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
