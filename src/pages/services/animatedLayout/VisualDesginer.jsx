
import React from "react";
import { motion } from "framer-motion";
import "./AnimatedLayout.css"
import { useTranslation } from 'react-i18next'



const VisualDesginer = () => {

    const { t } = useTranslation()

    // Define the animation variants for the modal
    const modalVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
        closed: {
            opacity: 0,
            y: "100%",
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            className="ux-designer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div className="ux__desginer__details" variants={modalVariants} initial="closed" animate="open">
            <i className="uil uil-edit services__icon"></i>
            <h3 className="servicess__modal-title">{t("services__modal__title-visual-designer")}</h3>
                <div className="servicess__modal-content">
                    <p className="servicess__modal-description">{t("services__modal__UI/UX-description")}</p>
                    <ul className="servicess__modal-services grid">
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="servicess__modal-info">{t("services__modal__UI/UX-designer-info-1")}</p>
                        </li>
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle servicess__modal-icon"></i>
                            <p className="servicess__modal-info">{t("services__modal__UI/UX-designer-info-2")}</p>
                        </li>
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle servicess__modal-icon"></i>
                            <p className="servicess__modal-info">{t("services__modal__UI/UX-designer-info-3")}</p>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default VisualDesginer;