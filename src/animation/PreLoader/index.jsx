import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import styles from './style.module.scss';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const navigate = useNavigate();
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
        if (dimension.width > 0) {
            const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
            const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height - 300} 0 ${dimension.height} L0 0`;

            const container = document.querySelector(`.${styles.introduction}`);
            const path = container.querySelector('path');

            gsap.set(path, { d: initialPath });

            const tl = gsap.timeline();
            tl.to(container, {
                top: '0vh',
                duration: 0.8,
                ease: 'power3.inOut',
                delay: 0.2,
                onComplete: () => {
                    gsap.to(path, {
                        d: targetPath,
                        duration: 0.7,
                        ease: 'power3.inOut',
                        delay: 0.3,
                        onComplete: () => {
                            // Now navigate to the actual home page after animation completes
                            // Replace 'home' with the actual route path
                            navigate('/');
                        },
                    });
                },
            });
        }
    }, [dimension]);

    return (
        <div className={styles.introduction} style={{ top: '100vh' }}>
            {dimension.width > 0 && (
                <>
                    <p>
                        <span></span>
                        {words[index]}
                    </p>
                    <svg>
                        <path></path>
                    </svg>
                </>
            )}
        </div>
    );
}
