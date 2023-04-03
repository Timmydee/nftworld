'use client'

import styles from '@/styles'
import React from 'react'

function CreatorCard({img, name, price, id}) {
  return (
    <div className={`bg-[#3B3B3B] w-[240px] lg:h-[238px] flex flex-col items-center justify-center relative rounded-3xl my-8`}>
        <img src={img} className='w-[110px]'/>
        <h3 className={`${styles.h5Style} pt-4`}>{name}</h3>
        <p className="text-1 text-[#858584]">Total Sales: <span className='text-[16px] text-white'>{price}</span></p>
        <div className='absolute top-5 left-6 w-[20px] h-[20px] text-white bg-[#858584] items-center justify-center flex rounded-full'>
            <p>{id}</p>
        </div>
    </div>
  )
}

export default CreatorCard