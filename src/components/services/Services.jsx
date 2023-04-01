import React, { useState } from 'react'
import "./Services.css"
import { useTranslation } from 'react-i18next'


const Services = () => {

  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  const { t } = useTranslation()

  // 
  return (
    <section className="services section" id='services'>
      <h2 className="section__title">{t("section__services")}</h2>
      <span className="section__subtitle">{t("section__subtitle_services")}</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">{t("services__title-product-designer")} <br/> {t("services__modal__title-designer")}</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>{t("services__button")} <i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">{t("services__modal-title-product-designer")}</h3>
              <p className="services__modal-description">{t("services__modal__product_desginer-description")}</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__product_designer-info-1")}</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__product_designer-info-2")}</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__product_designer-info-3")}</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__product_designer-info-4")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">UI/UX <br/> {t("services__modal__title-designer")}</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>{t("services__button")}<i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">{t("services__modal__title-UI/UX-designer")}</h3>
              <p className="services__modal-description">{t("services__modal__UI/UX-description")}</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__UI/UX-designer-info-1")}</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__UI/UX-designer-info-2")}</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__UI/UX-designer-info-3")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">{t("services__title-visual-designer")} <br/> {t("services__modal__title-designer")}</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>{t("services__button")} <i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">{t("services__modal__title-visual-designer")}</h3>
              <p className="services__modal-description">{t("services__modal__visual-designer-description")}</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__visual-designer-info-1")}</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__visual-designer-info-2")}</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{t("services__modal__visual-designer-info-3")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services