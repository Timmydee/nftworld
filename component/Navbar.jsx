'use client'

import { motion } from "framer-motion"
import styles from "@/styles"
import { navVariants } from "../utils/motion"
import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initials="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative `}
    >
      {/* <div className="absolute w-[100%] inset-0 gradient-01"/> */}
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-1`}>
        <h2 className="font-extrabold text-[20px] text-white">
          NFTMARKETPLACE
        </h2>

        <BiMenuAltRight color="white" />      
      </div>
    </motion.nav>

    
  )
}

export default Navbar