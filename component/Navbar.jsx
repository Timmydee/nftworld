'use client'
import { useState } from "react"
import Link from "next/link"

import { motion } from "framer-motion"
import styles from "@/styles"
import { navVariants } from "../utils/motion"
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

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
      {/* <div className="absolute w-[70%] inset-0 gradient-01"/> */}
      <div className={`${styles.innerWidth} mx-auto flex justify-between`}>
        <img src="/Logo.png" className="object-contain" />

        <div className="hidden lg:block">
          <div className={`flex flex-row items-center justify-center space-x-12 ${styles.h5Nav}`}>
            {/* <h5 className={`${styles.h5Nav}`}>MarketPlace</h5>
            <h5 className={`${styles.h5Nav}`}>Rankings</h5>
            <h5 className={`${styles.h5Nav}`}>Connect a Wallet</h5> */}
            <div>
              <Link href="/marketplace">MarketPlace</Link>
            </div>

            <div className="py-4">
              <Link href="/rankings">Rankings</Link>
            </div>

            <div>
              <Link href="/connect">Connect a Wallet</Link>
            </div>

            <div href="" className="w-[120px] h-[40px] flex items-center justify-center rounded-3xl bg-[#A259FF]">
              <Link href="/connect">Sign Up</Link>
            </div>
          </div>
        </div>

        <div className="block lg:hidden flex-1">
          <div onClick={handleToggle} className="relative flex justify-end">
              {!toggle ? <BiMenuAltRight color="white"/> : <AiOutlineClose color="white" />}
          </div>

          {toggle && 
            <div className="bg-gray-800 absolute top-14 w-[100%] h-[20vh] p-10 rounded-lg">
              <div className="flex-col justify-center items-center text-white font-WorkSans text-[16px] text-sm">
                <div>
                  <Link href="/Marketplace">MarketPlace</Link>
                </div>

                <div className="py-4">
                  <Link href="/rankings">Rankings</Link>
                </div>

                <div>
                  <Link href="/connect">Connect a Wallet</Link>
                </div>
              </div>
              {/* <h5 className={`${styles.pStyle} `}>MarketPlace</h5>
              <h5 className={`${styles.pStyle} py-2`}>Rankings</h5>
              <h5 className={`${styles.pStyle}`}>Connect a Wallet</h5> */}
            </div>
          }      
        </div>
        
      </div>
    </motion.nav>

    
  )
}

export default Navbar