import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Toggle.scss';
import { BiSun } from 'react-icons/bi';
import { BiMoon } from 'react-icons/bi';

const Toggle = (props) => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    props.toggleTheme();
  };


  const bgPosition = isOn ? '0 0' : '0 50%';

  return (
    <div className='toggle__main'>
      <motion.div 
        className='switch' 
        onClick={toggleSwitch} 
        layout 
        transition={spring}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          width: '3.125rem',
          height: '6.25rem',
          backgroundColor: isOn ? 'transparent' : 'transparent',
          borderRadius: '2rem',
          boxShadow: 'var(--box-shadow)',
          cursor: 'pointer',
          gap: '2rem',
          MozBoxShadow: 'var(--moz-box-shadow)',
          transition: "all 4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <BiSun
          className={`${!isOn ? '' : 'acitve'}`} 
          transition={spring} 
          style={{ 
            fontSize: '1.35rem', 
            color: isOn ? 'var(--accent-color)' : 'var(--body-color)',
            position: 'absolute',
            top: isOn ? '1rem' : '1rem',
            zIndex: 9999999,

          }} 
        />
        <BiMoon
          className={`bx bx-moon ${isOn ? 'active' : ''}`} 
          transition={spring} 
          style={{ 
            fontSize: '1.35rem', 
            color: isOn ? 'var(--body-color)' : 'var(--accent-color)',
            zIndex: 999,
            position: 'absolute',
            top: isOn ? '4rem' : '4rem',
            
          }} 
        />
        <motion.div
          className='handle' 
          layout 
          transition={spring}
          style={{ 
            position: 'absolute',
            width: '2.2rem',
            height: '2.2rem',
            borderRadius: '3.125rem',
            backgroundColor: 'var(--accent-color)',
            backgroundSize: '100% 200%',
            backgroundPosition: bgPosition,
            bottom: isOn ? '0.5rem' : '3.5rem',
          }}
        />
      </motion.div>
    </div>
  );
};

export default Toggle;