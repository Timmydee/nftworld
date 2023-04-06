'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'
import DiscoverCard from '@/subComponent/DiscoverCard'

function Discover() {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}
    >
        <div className='pt-28 lg:pt-40 flex justify-between items-center'>
            <div className=''>
                <h2 className={`${styles.h2Style}`}>Discover More NFTs</h2>
                <p className={`${styles.pStyle} pt-2`}>Explore new trending NFTs</p>
            </div>
            <div className={`w-[187px] h-[60px] border border-purple-700 rounded-2xl hidden lg:flex items-center justify-center`}>
                <p className={`${styles.pStyle} pt-2`}>See All</p>
            </div>
        </div>

        <div className='flex items-center justify-center'>

            <div className='flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-8 item-center pt-8'>
                <DiscoverCard 
                    imgMain="/discover1.png" name="Distant Galaxy" imgSub="/discoverProfile1.png" subName="MoonDance" price="1.44Eth" bid="0.33 wETH"
                />
                <DiscoverCard 
                    imgMain="/discover2.png" name="Life On Edena" imgSub="/discoverProfile2.png" subName="SpaceOne" price="2.4Eth" bid="3.32 wETH"
                />
                <DiscoverCard 
                    imgMain="/discover3.png" name="AstroFiction" imgSub="/discoverProfile1.png" subName="NebulaKid" price="4.8Eth" bid="5.83 wETH"
                />
            </div>
        </div>

        <div className={`h-[60px] border border-purple-700 rounded-2xl w-full lg:hidden ${styles.flexCenter}`}>
            <p className={`${styles.pStyle} pt-2`}>See All</p>
        </div>
    </motion.div>
  )
}

export default Discover