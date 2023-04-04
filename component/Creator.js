'use client'

import React from 'react'

import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'
import CreatorCard from '@/subComponent/CreatorCard'

const Creator = () => {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}
    >
        <div className={`${styles.innerWidth} mx-auto pt-28 lg:pt-40`}>

            <div className={`flex flex-row justify-between items-center`}>
                <div className=''>
                    <h2 className={`${styles.h2Style}`}>Top Creators</h2>
                    <p className={`${styles.pStyle} pt-2`}>Checkout Top Rated Creators on the NFT Marketplace.</p>
                </div>
                <div className={`w-[247px] h-[60px] border border-purple-700 rounded-2xl hidden lg:flex items-center justify-center`}>
                    <p className={`${styles.pStyle} pt-2`}>View Ranking.</p>
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-7 pt-9 '>
                
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
                <CreatorCard 
                    img="/creator1.png"
                    name="Adrian cole"
                    price="34.56eth"
                    id="1"
                />
            </div>

            <div className='flex items-center justify-center'>
                <div className={`w-[313px] h-[60px] border border-purple-700 rounded-2xl flex flex-1 mt-5 lg:mt-0 lg:hidden items-center justify-center`}>
                    <p className={`${styles.pStyle} pt-2`}>View Ranking.</p>
                </div>
            </div>

        </div>

    </motion.div>
  )
}

export default Creator