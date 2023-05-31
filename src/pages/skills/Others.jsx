import React from 'react'
import { useTranslation } from 'react-i18next'

const Backend = () => {
    const { t } = useTranslation() 

  return (
    <div className="skills__content">
        <h3 className="skills__title">{t("skills__title-others")}</h3>
        <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">{t("skills__name-writing")}</h3>
                            <span className="skills__level">{t("skills__level_advanced")}</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">{t("skills__name-nutrition")}</h3>
                            <span className="skills__level">{t("skills__level_intermediate")}</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">{t("skills__name-percussion")}</h3>
                            <span className="skills__level">{t("skills__level_intermediate")}</span>
                        </div>
                    </div> 
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">{t("skills__name-composing")}</h3>
                            <span className="skills__level">{t("skills__level_intermediate")}</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">{t("skills__name-philosophy")}</h3>
                            <span className="skills__level">{t("skills__level_advanced")}</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">{t("skills__name-history")}</h3>
                            <span className="skills__level">{t("skills__level_expert")}</span>
                        </div>
                    </div> 
                </div>
        </div> 
</div>
  )
}

export default Backend