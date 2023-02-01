import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import Featured from './Featured'
import Info from './Info'

const HomeScreen = () => {
  return (
    <div className=''>
      <Fade>
        <div className='bg-[#d4e9e2] text-center p-[32px] mb-[20px]'>
          <h4 className='text-[#1e3932] font-[600] text-lg max-w-[650px] mx-auto leading-[1.6] sm:max-w-[430px] sx:text-base'>
             We are working hard to put the health and well-being of our partners and customers first in all that we do. <Link className='text-[#1e3932] underline hover:no-underline'>Learn more</Link>
          </h4>
        </div>
      </Fade>

      <Fade>
        <div className='py-[30px] pl-[80px] pr-[20px] flex flex-wrap gap-[60px] items-center justify-center bg-[#d4e9e2] sm:px-[30px] sx:flex-col sx:px-[20px] '>
          <div className='text-center flex flex-col gap-[30px] sm:max-w-[300px] sx:order-2 sx:max-w-[360px]'>
            <h4 className='text-[#1ee3932] text-[25px] font-[600] leading-[1.6]'>Investing in our communities</h4>
            <p className='text-[#1e3932] font-[600] leading-[1.7] text-[19px] max-w-[450px] md:max-w-[380px]'>
              The Starbucks Foundation awarded grants to over 400
              nonprofits serving communities of color. Recipients 
              were nominated by Starbucks partners (employees).
            </p>
            <button className='border-black inline-block mx-auto border-[1px] rounded-[50px] py-[7px] px-[16px] leading-[1.2] text-center transition-all duration-200 cursor-pointer text-[#1e3932] font-[600] text-base hover:bg-[rgba(30,57,50,0.1)]'>Learn more</button>
          </div>
          <div>
            <img 
              className='object-contain w-[650px] md:w-[470px] sm:w-[380px] ssx:w-[340px]'
              src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg"
              alt=""
            />     
          </div>
        </div>
      </Fade>

      <Fade>
        <Heading heading='TODAY IS YOURS'/>
      </Fade>

      <div className=''>
        <Fade>
          <Featured
              title="NICELY NONDAIRY"
              info="Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew."
              link="Explore the honey drinks"
              path=""
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
              background="#f0ebe0"
              color="#1e3932"
              classify="light"
            />
        </Fade>
        <Fade>
          <Featured
            title="PISTACHIOOOOOOO"
            info="Embrace creamy coffee bliss with our new Pistachio Latte and Pistachio Frappuccino® blended beverage."
            link="Try the new pistachio drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"
            order="2"
            background="#f0ebe0"
            color="#1e3932"
            classify="light"
          />
        </Fade>
      </div>
      
      <Fade>
        <Heading heading="more to discover"/>
      </Fade>

      <Fade>
        <div className="flex gap-[25px] sm:flex-col justify-center">
            <Info
              title="Order and pick up. Easy as that."
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
              info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
              link="See pickup options"
              color="#1e3932"
              background="#d4e9e4"
              classify="light"
            />
            <Info
              title="Coffee delivered. Day made."
              image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
              info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
              link="Order now"
              color="#1e3932"
              background="#d4e9e4"
              classify="light"
            />
        </div>
      </Fade>
    </div>
  )
}

export default HomeScreen