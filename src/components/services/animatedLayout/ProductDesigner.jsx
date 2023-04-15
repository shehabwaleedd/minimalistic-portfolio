import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AnimatedLayout.css"
import { useTranslation } from 'react-i18next'



const ProductDesigner = () => {
    const [showDetails, setShowDetails] = useState(false);
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
            className="product-designer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div className="product-designer__details" variants={modalVariants} initial="closed" animate="open">
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__modal-title">{t("services__modal-title-product-designer")}</h3>
               <div className="servicess__modal-content">
                 <p className="servicess__modal-description">{t("services__modal__product_desginer-description")}</p>
                 <ul className="servicess__modal-services grid">
                   <li className="servicess__modal-service">
                     <i className="uil uil-check-circle servicess__modal-icon"></i>
                     <p className="servicess__modal-info">{t("services__modal__product_designer-info-1")}</p>
                   </li>
                   <li className="servicess__modal-service">
                     <i className="uil uil-check-circle servicess__modal-icon"></i>
                     <p className="servicess__modal-info">{t("services__modal__product_designer-info-2")}</p>
                   </li>
                   <li className="servicess__modal-service">
                     <i className="uil uil-check-circle servicess__modal-icon"></i>
                     <p className="servicess__modal-info">{t("services__modal__product_designer-info-3")}</p>
                   </li>
                   <li className="servicess__modal-service">
                     <i className="uil uil-check-circle servicess__modal-icon"></i>
                     <p className="servicess__modal-info">{t("services__modal__product_designer-info-4")}</p>
                   </li>
                 </ul>
               </div>
            </motion.div>
        </motion.div>
    );
};

export default ProductDesigner;