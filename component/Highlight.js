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
        className={`${styles.yPaddings}`}
    >
        <img src="/nft.png" className='w-full' />
    </motion.div>
  )
}

export default Highlight