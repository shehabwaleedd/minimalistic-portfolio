import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.scss';
const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Merhaba", "Guten tag", "Ahlan"]

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1)
        }, index === 0 ? 1000 : 150);

        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {

        const container = document.querySelector(`.${styles.introduction}`);
        const tl = gsap.timeline();
        tl.to(container, {
            top: '0vh',
            duration: 0.8,
            ease: 'power3.inOut',
            delay: 0.2,
            onComplete: () => {
                gsap.to(container, {
                    top: '-120vh',
                    duration: 0.8,
                    ease: 'power3.inOut',
                    delay: 1.3,
                });
            },
        });
    }, []);
    return (
        <div className={styles.introduction}>
            {dimension.width > 0 && (
                <p>
                    <span></span>
                    {words[index]}
                </p>
            )}
        </div>
    );
}
