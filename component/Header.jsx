'use client'

import {motion} from 'framer-motion'
import styles from '@/styles'
import { navVariants } from '@/utils/motion'


export const Header = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} lg:pt-16 pt-10`}
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-between gap-8 lg:flex-row`}>
        <div className='max-w-[500px]'>
          <h1 className='font-bold font-WorkSans text-white lg:text-[67px] text-[28px]'>Discover digital art & Collect NFTs</h1>
          <p className='text-white text-[16px] lg:text-[22px] py-5 font-WorkSans'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>

          <div className='bg-[#A259FF] w-[224px] h-[60px] py-3 flex items-center justify-center rounded-2xl '>
            <p className='text-[16px] text-white'>Get Started</p>
          </div>

          <div className='flex items-center font-mono pt-8 justify-between text-white'>
            <div>
              <h4 className='lg:text-[33px]text-[22px] font-SpaceMono'>240K+</h4>
              <p className={`${styles.pStyle}`}>Total Sales</p>
            </div>
            <div>
              <h4 className='lg:text-[33px]text-[22px] font-SpaceMono' >100K+</h4>
              <p className={`${styles.pStyle}`}>Auctions</p>
            </div>
            <div>
              <h4 className='lg:text-[33px]text-[22px] font-SpaceMono'>240K+</h4>
              <p className={`${styles.pStyle}`}>Artist</p>
            </div>
          </div>
        </div>

        <div className="max-w-[500px]">
            <img src='/headerImg.png' alt='headerImg' className='w-[500px]' />

            <div className='bg-[#3B3B3B] h-[109px] flex-1 p-4 rounded-lg text-white'>
              <h6 className={`${styles.h5Style}`}>Space Walking</h6>
              <p className={`${styles.pStyle}`} >Animal Kid</p>
            </div>
        </div>
      </div>
    </motion.div>
  )
}
