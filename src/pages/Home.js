import React from 'react'
import { Fade } from 'react-awesome-reveal'
import HomeScreen from '../components/HomeScreen'
import Header from '../components/Header'
import {Footer} from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
     <Header/>
     <HomeScreen/>
     <Fade>
        <Footer/>
     </Fade>   
    </>
  )
}

export default Home