import React from "react";
import { motion } from "framer-motion";
import "./Home.css"

const ScrollForMore = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.6, delay: 1.5 },
      }}
      className="scroll">
      <div className='icon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='23.539'
          height='29.985'
          viewBox='0 0 23.539 29.985'>
          <g id='down-arrow' transform='translate(-67.666 0.6)'>
            <g id='Group_1' data-name='Group 1' transform='translate(68.266)'>
              <path
                id='Path_1'
                data-name='Path 1'
                d='M90.452,18.153l-2.9-2.664a.528.528,0,0,0-.71,0L81.974,20V.48A.5.5,0,0,0,81.466,0H77.4A.5.5,0,0,0,76.9.48V20l-4.872-4.515a.529.529,0,0,0-.709,0l-2.9,2.664a.46.46,0,0,0,0,.687l10.662,9.81a.528.528,0,0,0,.708,0l10.662-9.81a.461.461,0,0,0,0-.687Z'
                transform='translate(-68.266)'
                fill='#45573c'
                stroke='#45573c'
                stroke-width='2'
                className="scroll__iconn"
              />
            </g>
          </g>
        </svg>
      </div>

    </motion.div>
  );
};

export default ScrollForMore;
