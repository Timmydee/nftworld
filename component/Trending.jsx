'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'
import TrendingCard from '@/subComponent/TrendingCard'

const Trending = () => {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}
    >
        <div className='pt-40 lg:pt-40'>
            <h2 className={`${styles.h2Style}`}>Trending Collections</h2>
            <p className={`${styles.pStyle} pt-2`}>Checkout our weekly updated trending collection.</p>
        </div>

        <div className='flex justify-between items-center lg:flex-row flex-col pt-6 lg:pt-0'>
            <TrendingCard 
                imgMain = "/dogMain.png"
                img1 = "/dog1.png"
                img2 = "/dog2.png"
                no = "1200+"
                animal = "DSGN Animals"
                sub = "MxFox"
            />
            <TrendingCard 
                imgMain = "/mushroom.png"
                img1 = "/mushroom2.png"
                img2 = "/mushroom2.png"
                no = "1200+"
                animal = "DSGN Animals"
                sub = "MxFox"
            />
            <TrendingCard 
                imgMain = "/robot.png"
                img1 = "/robot2.png"
                img2 = "/robot2.png"
                no = "1200+"
                animal = "DSGN Animals"
                sub = "MxFox"
            />
            
            
        </div>
    </motion.div>
  )
}

export default Trending