import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { UserAuth } from '../authContext/AuthContext'
import { Link } from 'react-router-dom'
import './Login.css'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = React.useState('')
  const { signIn, signInWithGoogle } = UserAuth()

  let navigate = useNavigate()
  const { t } = useTranslation()



  const handleSignIn = async (e) => {
    e.preventDefault();
    navigate('/blog')
    setError('');
    try {
      await signIn(email, password);
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  }

  const handleGoogle = async (e) => {
    e.preventDefault();
    navigate('/blog')
    setError('');
    try {
      await signInWithGoogle(email, password);

    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  }





  return (
    <section className="login section" id='skills'>
      <h2 className='section__title'>{t("login__form__title")}</h2>
      <span className="section__subtitle">{t("login__form__subtitle")}</span>
      <div className="login__container container grid">
        <div className="login__content">
          <div className="login__page-content">
            <form className="login__form" onSubmit={handleSignIn}>
              <div className="login__input">
                <input type="email" id="email" className="login__input-field" placeholder={t("login__form__insert_email")} value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="login__input">
                <input type="password" id="password" className="login__input-field" placeholder={t("login__form__password")} value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="login__button">
                <button type="submit" className="login__button-sign">
                  {t("login__form__button")}
                  <i className="uil uil-arrow-right button__icon-login"></i>
                </button>
              </div>
              <span className='login__forgot'>{t("login__form__forgot_password")}? <Link className='clickhere__button' to="/passwordreset">{t("login__form__click_here")}</Link></span>
              <div class="or__container_login">
                <div class="line__separator_login"></div>
                <div class="or__label_login">{t("form__or")}</div>
                <div class="line__separator_login"></div>
              </div>
              <div className="signup__social">
                <div className="signup__box">
                  <button onClick={handleGoogle} className='login-with-google-btn'>{t("button__sign__in__with__google")}</button>
                </div>
              </div>
              <div className="login__forgot">
                <span className="login__account">{t("signup__form__dont_have_account")} <Link className="signup__link" to="/signup">{t("signup__form__title")}</Link></span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Login