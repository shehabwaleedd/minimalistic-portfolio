import React from 'react'
import { motion } from 'framer-motion'
const MobileDetailsBackground = ({ post }) => {
    return (
        <motion.div className="background__img-mobile" initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} style={{ transform: "translateY(-40%)" }}>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" width="1200" height="1200">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="500%"></stop>
                        <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path
                    fill={post.backgroundColor_mobile}
                    d="M22.1,-22.2C24.8,-19.5,20.3,-9.8,16.2,-4.1C12.2,1.7,8.6,3.3,5.9,6.8C3.3,10.4,1.7,15.8,-4.3,20.1C-10.2,24.3,-20.3,27.4,-25.7,23.9C-31,20.3,-31.5,10.2,-27.1,4.4C-22.6,-1.3,-13.3,-2.6,-7.9,-5.3C-2.6,-7.9,-1.3,-12,4.2,-16.2C9.8,-20.4,19.5,-24.8,22.1,-22.2Z"
                    transform="translate(45 50)"
                    strokeWidth="1px"
                    style={{ transition: "all 0.3s ease 0s", zIndex: "9999999999" }}
                    stroke={post.backgroundColor_mobile}
                ></path>
            </svg>
        </motion.div>
    )
}

export default MobileDetailsBackground