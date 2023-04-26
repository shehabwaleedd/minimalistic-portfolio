import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TweenMax, TimelineMax, Power3, Power4 } from 'gsap';

const Portfolio = () => {
  const { t } = useTranslation();
  const [showComponent, setShowComponent] = useState(false);

  let screen = useRef(null);
  let body = useRef(null);

  useEffect(() => {
    var tl = new TimelineMax();

    tl.to(screen, {
      duration: 0.5,
      width: '100%',
      left: '0%',
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 0.5,
      left: '100%',
      ease: Power3.easeInOut,
      delay: 0.0,
      onComplete: () => setShowComponent(true),
    });
    tl.set(screen, { left: '-100%' });
    TweenMax.to(body, 0.3, {
      css: {
        opacity: '1',
        pointerEvents: 'auto',
        ease: Power4.easeInOut,
      },
    }).delay(1);
    return () => {
      TweenMax.to(body, 1, {
        css: {
          opacity: '0',
          pointerEvents: 'none',
        },
      });
    };
  }, []);

  return (
    <React.Fragment>
      <div className="portfolio__load-container">
        <div
          className="portfolio__load-screen"
          ref={(el) => (screen = el)}
        ></div>
      </div>
      {showComponent && (
        <motion.div className="portfolio-container" data-barba="container"             initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
          <section
            ref={(el) => (body = el)}
            className="work section"
            id="portfolio"
          >
            <motion.h2
              className="section__title"
            >
              {t('section__portfolio')}
            </motion.h2>
            <span className="section__subtitle">
              {t('section__subtitle_portfolio')}
            </span>
          </section>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default Portfolio;