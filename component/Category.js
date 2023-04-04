'use client'

import React from 'react'

import { motion } from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'
import CategoryCard from '@/subComponent/CategoryCard'


function Category() {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings}`}
    >
        <div className='pt-24 lg:pt-40'>
            <h2 className={`${styles.h2Style}`}>Browse Categories</h2>
        </div>

        <div className='flex flex-wrap gap-10 pt-10 lg:pt-6 items-center justify-center '>
            <CategoryCard img="/Art.png" name="music"/>
            <CategoryCard img="/collectible.png" name="music"/>
            <CategoryCard img="/music.png" name="music"/>
            <CategoryCard img="/photography.png" name="music"/>
            <CategoryCard img="/video.png" name="music"/>
            <CategoryCard img="/utility.png" name="music"/>
            <CategoryCard img="/sport.png" name="music"/>
            <CategoryCard img="/utility.png" name="music"/>
        </div>
    </motion.div>
  )
}

export default Category