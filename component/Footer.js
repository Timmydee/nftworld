'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { navVariants } from '@/utils/motion'
import styles from '@/styles'


function Footer() {
  return (
    <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} pt-28 lg:pt-40`}
    >
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
            <div>
                <h5 className={`${styles.h5Style} pb-2`}>NFTWORLD</h5>
                <p className={`text-[#CCCCCC] font-WorkSans text-[16px] py-1` }>NFT marketplace UI created with Anima for Figma.</p>
                <p className={`text-[#CCCCCC] font-WorkSans text-[16px] py-1`}>Join Our Community.</p>

                <div className='flex flex-row pt-3'>
                    <img src='/DiscordLogo.png' />
                    <img src='/YoutubeLogo.png' />
                    <img src='/TwitterLogo.png' />
                    <img src='/InstagramLogo.png' />
                </div>
            </div>

            <div className='py-8 lg:py-0'>
                <h5 className={`${styles.h5Style} pb-2`}>Explore</h5>
                <p className={`text-[#CCCCCC] font-WorkSans text-[16px] py-1` }>Marketplace</p>
                <p className={`text-[#CCCCCC] font-WorkSans text-[16px] py-1`}>Rankings</p>
                <p className={`text-[#CCCCCC] font-WorkSans text-[16px] py-1`}>Connect a Wallet.</p>
            </div>

            <div className=''>
                <h5 className={`${styles.h5Style} pb-2`}>Join our weekly digest</h5>
                <p className={`text-[#CCCCCC] font-WorkSans text-[16px] py-1` }>Get exclusive promotions & updates straight to your inbox.</p>
                
                <form className='flex flex-col lg:w-[425px] lg:h-[60px] lg:bg-white lg:flex-row lg:rounded-3xl items-center justify-center overflow-hidden'>
                    <input 
                        placeholder='Enter your Email Here'
                        className='w-full lg:w-[214px] h-[60px] p-4 my-4 lg:my-0 border-none rounded-3xl bg-white lg:bg-transparent'
                    />
                    <button className='bg-[#A259FF] lg:w-[211px] w-full h-[60px] rounded-3xl right-0 '>Subscribe Now</button>
                </form>
            </div>
        </div>

        <hr class="h-px bg-[#858584] border-0 my-10"></hr>
        <p className={`text-[#CCCCCC] font-WorkSans text-[16px] py-1` }>Ⓒ NFT Market. Use this template freely.</p>


        
    </motion.div>
  )
}

export default Footer