import React, { useRef, useEffect } from 'react'
import './Transition.css'
import { Expo, TimelineMax } from 'gsap'

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
