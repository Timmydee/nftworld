"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'
import styles from '@/styles'

function Highlight() {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        // className={`${styles.yPaddings}`}
    >
        <img src="/nft.png" className='w-full pt-14 lg:pt-20 ' />
    </motion.div>
  )
}

export default Highlight