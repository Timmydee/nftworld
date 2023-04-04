
import React from 'react'
import styles from '@/styles'

function CategoryCard({img, name}) {
  return (
    <div className='pb-6 w-[147px] lg:w-[240px]'>
        <img src={img} />
        <div className={` ${styles.flexCenter} bg-[#3B3B3B] w-[147px] h-[67px] lg:h-[76px] lg:w-[240px] p-4 rounded-lg text-white`}>
            <h5 className={`${styles.h5Style}`}>{name}</h5>
        </div>
    </div>
  )
}

export default CategoryCard