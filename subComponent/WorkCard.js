
import React from 'react'
import styles from '@/styles'

function WorkCard({img, name, subName}) {
  return (
    <div className='pb-6 bg-[#3B3B3B] flex lg:block text-center w-[315px] h-[157px] lg:w-[330px] lg:h-[439px] rounded-lg p-8 mb-3 lg:mb-0'>
        <div className='flex item-center justify-center mr-2 lg:mr-0'>
            <img src={img} className='object-contain' />
        </div>

        <div className='text-justify lg:text-center'>
          <h5 className={`${styles.h5Style2} pt-0 lg:pt-4`}>{name}</h5>
          <p className={`${styles.pStyle2} pt-0 lg:pt-4`}>{subName}</p>
        </div>
    </div>
  )
}

export default WorkCard