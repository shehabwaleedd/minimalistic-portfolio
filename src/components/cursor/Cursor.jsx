import React, { useState, useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const dotSize = 0.5; // Size of the cursor dot
    const animationRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = requestAnimationFrame(() => {
                const posx = e.clientX;
                const posy = e.clientY;
                setCursorX(posx);
                setCursorY(posy);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    useEffect(() => {
        const dotElement = dotRef.current;
        const outlineElement = outlineRef.current;

        const dotSizeHalf = dotSize / 2;
        const outlineSizeHalf = outlineElement.offsetWidth / 2.5;
        dotElement.style.transform = `translate(${cursorX - dotSizeHalf}px, ${cursorY - dotSizeHalf}px)`;
        outlineElement.style.transform = `translate(${cursorX - outlineSizeHalf}px, ${cursorY - outlineSizeHalf}px)`;
    }, [cursorX, cursorY]);

    return (
        <>
            <div ref={dotRef} className="cursor-dot id" id='cursor-dot'></div>
            <div ref={outlineRef} className="cursor-outline" id='cursor-outline'></div>
        </>
    );
};

export default Cursor;
