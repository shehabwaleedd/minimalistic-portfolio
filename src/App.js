import './App.css';
import Header from './navItems/header/Header';
import "aos/dist/aos.css"
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Toggle from './components/darkmode/Toggle';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Pricing from './components/pricing/Pricing';
import Qualifications from './components/qualifications/Qualifications';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import { BlogHome } from './blogItems/home/BlogHome';
import Blog from './blogItems/blog/blog/Blog';
import Contact from './components/contact/Contact';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import PasswordReset from './pages/passwordReset/PasswordReset';
import { DetailsPages } from './blogItems/blog/blog/details/DetailsPages';
import EditPost from './blogItems/blog/blog/details/edit/EditPost';
import FilteredCategories from './blogItems/blog/filteredCategories/FilteredCategories';
import { useTranslation } from 'react-i18next'
import { createContext } from 'react';
import { AuthContextProvider } from './pages/authContext/AuthContext';
import MainRoutes from './components/routes/MainRoutes';
import { AnimatePresence } from 'framer-motion';
import CreatePost from './pages/createPost/CreatePost';
import Home from './components/home/Home';
import Model from './components/home/Model';
export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  const navigate = useNavigate()
  const { t } = useTranslation()
  const location = useLocation();

  const imageDetails = {
    width: 524,
    height: 650,
  };

  const [count, setCount] = useState(0);


  return (
    <div className="App" id={theme}>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AuthContextProvider initial={false}>
          {/* <header className='header'>
            <nav className='nav container'>
              <Link className="nav__logo" to="/">{t("my__name-first")}</Link>
              <div className="nav__menu">
                <ul className="nav__list grid">
                  <Link className="nav__link " to="/about">
                    <li className="nav__item">
                      <i className="uil uil-estate nav__icon"></i>{t("navbar__about")}
                    </li>
                  </Link>
                  <Link className="nav__link " to="/portfolio">
                    <li className="nav__item">
                      <i className="uil uil-file-alt nav__icon"></i>{t("navbar__work")}
                    </li>
                  </Link>
                  <Link className="nav__link " to="/blog">
                    <li className="nav__item">
                      <i className="uil uil-estate nav__icon"></i>{t("navbar__blog")}
                    </li>
                  </Link>
                  <Link className="nav__link " to="/contact">Conatct</Link>
                  <Link className="nav__link " to="/login">Login</Link>
                </ul>
              </div>
            </nav>
          </header> */}

          <Header />
          <AnimatePresence wait>
            <Routes location={location} key={location.pathname}>
              <Route path='/skills' element={<Skills />} />
              <Route path='/services' element={<Services />} />
              <Route path='/pricing' element={<Pricing />} />
              <Route path='/qualifications' element={<Qualifications />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/testimonials' element={<Testimonials />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/passwordreset" element={<PasswordReset />} />
              <Route path="/details/:id" element={<DetailsPages />} />
              <Route path="/" element={<BlogHome/>} />
              <Route path="/about" element={<Model imageDetails={imageDetails}/>} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/filtered/:category" element={<FilteredCategories />} />
            </Routes>
          </AnimatePresence>
        </AuthContextProvider>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
