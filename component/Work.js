'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'

import WorkCard from '@/subComponent/WorkCard'

function Work() {
  return (
    <motion.div
        variants={navVariants}
        initials="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}
    >
        <div className='pt-20 lg:pt-28'>
            <div className=''>
                <h2 className={`${styles.h2Style}`}>How it works</h2>
                <p className={`${styles.pStyle} pt-2`}>Find out how to get started</p>
            </div>
        </div>

        <div className='flex item-center justify-center'>
            <div className='flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-8 item-center pt-14'>
                <WorkCard 
                    img="/work1.png" name="Setup Your wallet" 
                    subName="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
                /> 
                <WorkCard 
                    img="/work2.png" name="Create Collection" 
                    subName="Upload your work and setup your collection. Add a description, social links and floor price.."
                /> 
                <WorkCard 
                    img="/work3.png" name="Start Earning" 
                    subName="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.."
                /> 
            </div>
        </div>
    </motion.div>
  )
}

export default Work