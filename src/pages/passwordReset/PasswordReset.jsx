import React from 'react'
import './PasswordReset.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '../authContext/AuthContext'
import { useTranslation } from 'react-i18next'


const PasswordReset = (Props) => {

  const [email, setEmail] = useState('')
  const [error, setError] = React.useState('')
  const { passwordReset } = UserAuth()

  let navigate = useNavigate()
  const { t } = useTranslation()


  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await passwordReset(email);
        navigate('/login')
    } catch (e) {
        setError(e.message);
        console.log(error);
    }
    navigate('/login')
    alert("A Reset Link Has Been Sent To Your Email")

}




  return (
    <section className="login section" id='skills'>
      <h2 className='section__title'>Login</h2>
      <span className="section__subtitle">Login To Have Access</span>
      <div className="forgot__container container grid">
        <div className="forgot__content">
          <h3 className="forgot__title">Sign In To Your Blog</h3>
          <p className='forgot__subtitle'>{t("forgot__password__form__subtitle")}</p>
          <div className="forgot__page-content">
            <form className="forgot__form" onSubmit={handlePasswordReset}>
              <div className="forgot__input">
                <input type="email" id="email" className="forgot__input-field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="forgot__button">
                <button type="submit" className="forgot__button-sign">
                  Reset Password
                  <i className="uil uil-arrow-right button__icon-forgot"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="or__container">
            <div class="line__separator"></div>
            <div class="or__label">or</div>
            <div class="line__separator"></div>
          </div>
          <div className="forgot__forgot">
            <span className="forgot__account">Don't have an account? <Link className="forgot__link" to="/signup">Sign Up</Link></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PasswordReset