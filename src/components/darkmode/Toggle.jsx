import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Toggle.css';

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
    <div className='toggle__main '>
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
          gap: '1rem',
          MozBoxShadow: 'var(--moz-box-shadow)',
        }}
      >
        <motion.i 
          className={`uil uil-sun ${!isOn ? '' : 'acitve'}`} 
          layout 
          transition={spring} 
          style={{ 
            fontSize: '1.25rem', 
            color: isOn ? 'var(--dark-mode-icon-color)' : 'var(--dark-mode-icon-color)',
            marginTop: isOn ? '1.25rem' : '0',
          }} 
        />
        <motion.i 
          className={`uil uil-moon ${isOn ? 'active' : ''}`} 
          layout 
          transition={spring} 
          style={{ 
            fontSize: '1.25rem', 
            color: isOn ? 'var(--body-color)' : 'var(--accent-color)',
            marginBottom: isOn ? '1.25rem' : '0',
            zIndex: 999,
            
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