import React from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles'

const TrendingCard = ({imgMain, img1, img2, animal, no, sub}) => {
  return (
    <div className='max-w-[330px] pb-8'>
        <img src={imgMain} alt='dog' className='w-[330px] pt-3' />
        <div className='flex py-3 justify-between'>
            <img src={img1} alt='dog' /> 
            <img src={img2} alt='dog' /> 
            <div className='bg-[#A259FF] w-[100px] h-[100px] rounded-xl flex items-center justify-center'>
                <p className='text-[22px] font-SpaceMono text-white'>{no}</p>
            </div>
        </div>
        <div className='pt-0 lg:pt-5'>
            <h5 className={`${styles.h5Style}`}>{animal}</h5>
            <p className={`${styles.pStyle}`}>{sub}</p>
        </div>
    </div>
  )
}

export default TrendingCard