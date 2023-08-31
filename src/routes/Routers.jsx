import React from 'react'
import AboutPage from '../pages/about/About';
import Portfolio from '../pages/portfolio/Portfolio';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import ProjectDetails from '../pages/portfolio/projectDetails/ProjectDetails';
import { useRoutes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NotFound from '../pages/notfound/NotFound';

const Routers = ({ isMobile, isTablet, navOpen, language }) => {
    const location = useLocation();
    const routeConfig = [
        { path: '/about', element: <AboutPage isMobile={isMobile} language={language} isTablet={isTablet} /> },
        { path: '/projects', element: <Portfolio isTablet={isTablet} isMobile={isMobile} language={language} /> },
        { path: '/contact', element: <Contact key={location.pathname} isTablet={isTablet} isMobile={isMobile} language={language} /> },
        { path: '/projects/:title', element: <ProjectDetails key={location.pathname} isTablet={isTablet} isMobile={isMobile} /> },
        {
            path: '/',
            element: <Home key={location.pathname} isTablet={isTablet} isMobile={isMobile} navOpen={navOpen} language={language} />
        },
        { path: '*', element: <NotFound /> },
    ];

    const renderedRoutes = useRoutes(routeConfig);

    return (
        <>
            {renderedRoutes}
        </>
    );
}

export default Routers