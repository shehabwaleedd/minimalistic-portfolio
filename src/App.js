import './App.css';
import Header from './navItems/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import "aos/dist/aos.css"
import Aos from 'aos';
import { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './components/pricing/Pricing';
import Toggle from './components/darkmode/Toggle';
import { createContext } from 'react';
import CreatePost from './pages/createPost/CreatePost';
import Login from './pages/login/Login';
import Blog from './pages/blog/Blog';
import SignUp from './pages/signUp/SignUp';
import { AuthContextProvider } from './pages/authContext/AuthContext';
import PasswordReset from './pages/passwordReset/PasswordReset';
import { DetailsPages } from './blogItems/details/DetailsPages';
import { BlogHome } from './blogItems/home/BlogHome';
import EditPost from './blogItems/blog/edit/EditPost';
import FilteredCategories from './blogItems/blog/filteredCategories/FilteredCategories';
import Loading from './blogItems/loading/Loading';
import { Suspense } from 'react';

export const ThemeContext = createContext(null);

function App() {

  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
      country_code: 'sa',
    },
  ]


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [theme, setTheme] = useState('dark')
  const [isAuth, setIsAuth] = useState(false);




  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  const loadingMarkup = (
    <>
      <Loading />
    </>
  )

  return (
      <div className="App" id={theme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Router>
            <AuthContextProvider>
              <Header isAuth={isAuth} setIsAuth={setIsAuth} />
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/services' element={<Services />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/qualifications' element={<Qualifications />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
                <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
                <Route path="/signup" element={<SignUp setIsAuth={setIsAuth} />} />
                <Route path="/passwordreset" element={<PasswordReset />} />
                <Route path="/details/:id" element={<DetailsPages />} />
                <Route path="/" element={<BlogHome />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/filtered/:category" element={<FilteredCategories />} />
              </Routes>
            </AuthContextProvider>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </Router>
        </ThemeContext.Provider>
      </div>
  );
}
export default App;

{/* <div>
  <Nav />
</div> */}