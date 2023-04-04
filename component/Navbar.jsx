'use client'
import { useState } from "react"

import { motion } from "framer-motion"
import styles from "@/styles"
import { navVariants } from "../utils/motion"
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <motion.nav
      variants={navVariants}
      initials="hidden"
      whileInView="show"
      className={`sm:px-10 px-6 py-8 relative `}
    >
      {/* <div className="absolute w-[100%] inset-0 gradient-01"/> */}
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-1`}>
        <img src="/Logo.png" className="object-contain" />

        <div className="hidden lg:block">
          <div className="flex flex-row items-center justify-center space-x-12">
            <h5 className={`${styles.h5Nav}`}>MarketPlace</h5>
            <h5 className={`${styles.h5Nav}`}>Rankings</h5>
            <h5 className={`${styles.h5Nav}`}>Connect a Wallet</h5>

            <div href="" className="w-[120px] h-[40px] flex items-center justify-center rounded-3xl bg-[#A259FF]">
              <p className={`${styles.h5Nav}`}>Sign Up</p>
            </div>
          </div>
        </div>

        <div className="block lg:hidden flex-1">
          <div onClick={handleToggle} className="relative flex justify-end">
              {!toggle ? <BiMenuAltRight color="white"/> : <AiOutlineClose color="white" />}
          </div>

          {toggle && 
            <div className="bg-gray-800 absolute top-14 w-[40%] h-[20vh] p-10">
              <h5 className={`${styles.pStyle}`}>MarketPlace</h5>
              <h5 className={`${styles.pStyle}`}>Rankings</h5>
              <h5 className={`${styles.pStyle}`}>Connect a Wallet</h5>
            </div>
          }      
        </div>
        
      </div>
    </motion.nav>

    
  )
}

export default Navbar