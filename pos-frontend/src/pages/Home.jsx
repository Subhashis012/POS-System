import React from 'react'
import BotoomNav from '../components/shared/BotoomNav'
import Greetings from '../components/home/Greetings'

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-2rem)] overflow-hidden flex gap-3'>
        {/* Left Div */}
        <div className='flex-[3] bg-[#1a1a1a]'>
            <Greetings />
        </div>
        {/* Right Div */}
        <div className='flex-[2] bg-[#1a1a1a]'></div>
        <BotoomNav />
    </section>
  )
}

export default Home