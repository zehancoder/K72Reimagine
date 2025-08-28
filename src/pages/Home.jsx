import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

function Home() {
  return (
    <div>
        <div className='bg-red-500 h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='h-screen py-2 overflow-hidden flex flex-col justify-between w-screen relative'>
            <HomeHeroText/>


            <HomeBottomText/>
        </div>
    </div>
  )
}

export default Home