import React, { useEffect} from 'react'
import "./Main.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Main = (Props) => {


    const { t } = useTranslation()


    useEffect(() => {

        const helloWorld = document.querySelector('.main__content');
    

        function handleDoubleClick() {
            helloWorld.classList.toggle('selected');
          }
      
          helloWorld.addEventListener('dblclick', handleDoubleClick);
      
          // Clean up the event listener on unmount
          return () => {
            helloWorld.removeEventListener('dblclick', handleDoubleClick);
          };


      }, []);



  return (
    <section className='main section'>
        <div className="main__container container grid">
            <div className="main__content" style={{ marginTop: Props.navOpen ? "5rem" : "0" }}>
                <h1 className="main__titlee">HEY, {t("my__name_im")} <span className="main__title-color">{t("my__name-first")}</span> <span> {t("my__name-last")}</span></h1>
                <h1 className="main__subtitle">{t("my__intro")}</h1>
            </div>
                <div className="main__subcontent">
                    <p className="main__description">{t("Introduction")}</p>
                </div>
            <div className="main__links">
                <Link to='/portfolio' className="main__button button1">
                    <p><i className='bx bx-right-arrow-alt'></i> {t("button__view_my_projects")} </p>
                </Link>
                <Link to='/about' className="main__button button2">
                    <p><i className='bx bx-right-arrow-alt'></i> {t("button__more__about_me")}</p>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Main