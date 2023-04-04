
import React from 'react'
import styles from '@/styles'

function DiscoverCard({imgMain, name, imgSub, subName, price, bid}) {
  return (
    <div className='pb-6'>
        <img src={imgMain} />
        <div className={`bg-[#3B3B3B] h-[176px] w-[330px] p-6 rounded-lg text-white`}>
            <h5 className={`${styles.h5Style}`}>{name}</h5>
            <div className={`${styles.flexStart} pt-3 space-x-2`}>
                <img src={imgSub}/>
                <p className={`${styles.pStyle}`}>{subName}</p>
            </div>

            <div className='flex item-center justify-between pt-5'>
                <div>
                    <p className='text-[#858584] text-[12px] font-SpaceMono'>Price</p>
                    <p className='text-white text-[16px] font-SpaceMono'>{price}</p>
                </div>
                <div>
                    <p className='text-[#858584] text-[12px] font-SpaceMono'>Highest Bid</p>
                    <p className='text-white text-[16px] font-SpaceMono'>{bid}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscoverCard