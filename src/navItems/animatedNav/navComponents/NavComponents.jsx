import React from 'react'
import './NavComponents.scss'
import MobileNavComponents from './navComponentsResponsive/mobileNavComponents/MobileNavComponents'
import DesktopNavComponents from './navComponentsResponsive/desktopNavComponents/DesktopNavComponents'

const NavComponents = ({ isMobile, navOpen, language}) => {
    return (
        <>
            {isMobile ? (
                <MobileNavComponents navOpen={navOpen} language={language} />
            ) : (
                <DesktopNavComponents navOpen={navOpen} language={language} />
            )}
        </>

    )
}

export default NavComponents