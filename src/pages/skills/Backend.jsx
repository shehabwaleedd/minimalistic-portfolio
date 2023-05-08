import React from 'react'
import { useTranslation } from 'react-i18next'


const Backend = () => {
    const { t } = useTranslation() 

  return (
    <div className="skills__content">
        <h3 className="skills__title">{t("skills__title-backend")}</h3>
        <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">{t("skills__level_basic")}</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">Node JS</h3>
                            <span className="skills__level">{t("skills__level_basic")}</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">{t("skills__level_basic")}</span>
                        </div>
                    </div> 
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">NextJS</h3>
                            <span className="skills__level">{t("skills__level_basic")}</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">NodeJS</h3>
                            <span className="skills__level">{t("skills__level_basic")}</span>
                        </div>
                    </div> 
                    <div className="skills__data">
                        <i class='bx bx-badge-check' ></i>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">{t("skills__level_intermediate")}</span>
                        </div>
                    </div> 
                </div>
        </div> 
</div>
  )
}

export default Backend