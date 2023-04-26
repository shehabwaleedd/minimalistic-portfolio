import React, { useRef, useEffect } from 'react'
import './Transition.css'
import { motion } from 'framer-motion'
import { Power4, Expo, TimelineMax } from 'gsap'

function Transition({ timeline }) {
    const trans = useRef(null);
    const trans2 = useRef(null);

    useEffect(() => {
        const timeline = new TimelineMax();
        timeline.to(trans.current, 1, {
            left: '-100%',
            ease: Expo.easeInOut,
        });
        timeline.to(
            trans2.current,
            1,
            {
                left: '-100%',
                delay: 0.5,
                ease: Expo.easeInOut,
            },
            '-=0.5'
        );
    }, []);

    return (
        <>
        <div>
            <div className="transition__effect" ref={trans}></div>
        </div>
        <div>
        <div className="transition__effect2" ref={trans2}></div>
        </div>
        </>
    );
}

export default Transition

// const Transition = () => {
//     return (
//         <>
//             <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gray'
//                 initial={{ x: "100%", width: "100%" }}
//                 animate={{ x: "0%", width: "0%" }}
//                 transition={{ duration: 0.8, ease: "easeInOut" }}
//             />
//             <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-white'
//                 initial={{ x: "100%", width: "100%" }}
//                 animate={{ x: "0%", width: "0%" }}
//                 transition={{ ,duration: 1, ease: "easeInOut" }}
//             />
//             <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-blue'
//                 initial={{ x: "100%", width: "100%" }}
//                 animate={{ x: "0%", width: "0%" }}
//                 transition={{ duration: 1, ease: "easeInOut" }}
//             />
//         </>
//     )
// }


// export default Transition