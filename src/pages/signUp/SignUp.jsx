import React from 'react'
import './SignUp.css'
import { auth, provider } from "../../firebase-config"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UserAuth } from '../authContext/AuthContext'
import { useTranslation } from 'react-i18next'



const SignUp = (Props) => {

    const [error, setError] = useState('')
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const { createUser, signInWithGoogle } = UserAuth()

    let navigate = useNavigate()
    const { t } = useTranslation()

    const handleGoogle = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithGoogle(email, password);
            navigate('/blog')
        } catch (e) {
            setError(e.message);
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/blog')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }




    return (
        <section className="signup section" id='skills'>
            <h2 className='section__title'>{t("signup__form__title")}</h2>
            <span className="section__subtitle">{t("signup__form__subtitle")}</span>
            <div className="signup__container container grid">
                <div className="signup__content">
                    <div className="signup___page-content">
                        <form className="signup__form" onSubmit={handleSubmit}>
                            <div className="signup__user">
                                <input type="email" id="email" name='email' className="login__input-field" placeholder={t("signup__form__email")} value={email} onChange={(e) => setEmail(e.target.value)} />
                                <p className='signup__input-error'>{email}</p>
                                <input type="text" id="user" name='username' className="login__input-field" placeholder={t("signup__form__username")} value={username} onChange={(e) => setUsername(e.target.value)} />
                                <p className='signup__input-error'>{username}</p>
                            </div>
                            <div className="signup__passwords">
                                <div className="signup__input">
                                    <input type="password" id="password" name='password' className="signup__input-field" placeholder={t("signup__form__password")} value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <p className='signup__input-error'>{password}</p>
                                </div>
                                <div className="signup__input">
                                    <input type="password" id="password" name="confirmPassword" className="signup__input-field" placeholder={t("signup__form__password_again")} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <p className='signup__input-error'>{confirmPassword}</p>
                                </div>
                            </div>
                            <div className="signup__button">
                                <button type="submit" className="signup__button-sign">
                                    {t("signup__form__button")}
                                    <i className="uil uil-arrow-right button__icon-login"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="or__container">
                        <div class="line__separator"></div>
                        <div class="or__label">{t("form__or")}</div>
                        <div class="line__separator"></div>
                    </div>
                    <div className="signup__social">
                        <div className="signup__box">
                            <button onClick={handleGoogle} className='signup-with-google-btn'>{t("button__sign__up__with__google")}</button>
                        </div>
                    </div>
                    <div className="signup__forgot">
                        <span className="signup__account">{t("signup__form__have_account_already")} <Link className="signup__link" to="/login">{t("signup__form__login")}</Link></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp