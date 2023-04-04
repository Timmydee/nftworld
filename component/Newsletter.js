'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { navVariants } from '@/utils/motion'
import styles from '@/styles'

function Newsletter() {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} pt-28 lg:pt-40`}
    >
        <div className='bg-[#3B3B3B] p-6 lg:p-[60px] flex item-center justify-center rounded-3xl'>
            <div className="flex flex-col lg:flex-row item-center lg:space-x-[80px] space-x-0 ">
                <div className='max-w-[425px]'>
                    <img src='/space.png' className='w-full' />
                </div>
                <div className='max-w-[425px] mx-auto pt-4 lg:pt-0 '>
                    <h3 className={`${styles.h2Style}`}>Join our weekly <br/> digest</h3>
                    <h5 className={`text-[22px] text-white font-WorkSans font-light py-4`}>Get exclusive promotions & updates straight to your inbox.</h5>

                    <div className='flex flex-col lg:flex-row pt-4'>
                        <input 
                            placeholder='Enter your Email Here'
                            className='w-full h-[60px] p-4 my-4 lg:my-0 border-none lg:rounded-l-xl rounded-3xl'
                        />
                        <button className='bg-[#A259FF] lg:w-[211px] w-full h-[60px] rounded-3xl right-0 '>Subscribe Now</button>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Newsletter