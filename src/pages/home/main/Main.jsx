import React, { useEffect } from 'react'
import "./Main.scss"
import MobileMain from './mainResponsive/mobileMain/MobileMain';
import TabletMain from './mainResponsive/tabletMain/TabletMain';
import DesktopMain from './mainResponsive/desktopMain/DesktopMain';

const Main = ({ isMobile, navOpen, language, isTablet }) => {
    useEffect(() => {
        const helloWorld = document.querySelector('.main__content');
        function handleDoubleClick() { helloWorld.classList.toggle('selected')}
        helloWorld.addEventListener('dblclick', handleDoubleClick);
        return () => { helloWorld.removeEventListener('dblclick', handleDoubleClick);};
    }, []);
    return (
        <section className='main section'>
            {isMobile ? (
                // Mobile view
                <MobileMain navOpen={navOpen}language={language}/>
            ) : isTablet ? (
                // Tablet view
                <TabletMain navOpen={navOpen}language={language}/>
            ) : (
                // Desktop view
                <DesktopMain navOpen={navOpen} language={language}/>
            )
            }
        </section>
    )
}

export default Main