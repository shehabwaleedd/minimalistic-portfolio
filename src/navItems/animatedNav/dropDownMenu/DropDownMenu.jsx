import React, { useState, useEffect, useRef } from 'react';
import i18next from 'i18next';
import './DropDownMenu.css';

const DropDownMenu = (Props) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(i18next.language);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
    setOpen(false);
  };

  return (
    <div className="menu__container" ref={menuRef}>
      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
        <button
          onClick={() => handleLanguageChange()}
          className={Props.navOpen ? "dropdown__icon spin" : "dropdown__icon"}
        >
          <span>{language === 'en' ? 'de' : 'en'}</span>
        </button>
      </div>
    </div>
  );
};

export default DropDownMenu;