import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import classNames from 'classnames'

import { useState, useEffect, useRef } from 'react';




const DropDownMenu = () => {

    const languages = [

        {
            code: 'en',
            name: 'English',
            country_code: 'gb',
        },
        {
            code: 'fr',
            name: 'Français',
            country_code: 'fr',
        },
        {
            code: 'de',
            name: 'Deutsch',
            country_code: 'de',
        },
        {
            code: 'ar',
            name: 'العربية',
            dir: 'rtl',
            country_code: 'eg',
        },

    ]

    const { t } = useTranslation()
    const currentLanguageCode = i18next.language

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <div className="menu__container" ref={menuRef}>
            <button onClick={() => { setOpen(!open) }} className="dropdown__icon"><i class='bx bx-world'></i></button>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                <ul>
                    {languages.map(({ code, name, country_code }) => (
                        <li key={country_code}>
                            <button
                                className={classNames('dropdownItem', {
                                    disabled: currentLanguageCode === code,
                                })}
                                onClick={() => {
                                    i18next.changeLanguage(code)
                                }}
                            >
                                <span className='dropdown__flag' style={{ opacity: currentLanguageCode === code ? 1 : 0.5}}>
                                    <img
                                        src={`https://flagcdn.com/16x12/${country_code}.png`}
                                        width="32"
                                        height="32"
                                        alt={`${code}`}/>
                                </span>
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DropDownMenu