import React, { useEffect} from 'react'
import "./Main.css"
import { Link } from 'react-router-dom'

const Main = () => {

    useEffect(() => {

        const helloWorld = document.querySelector('.main__content');
    

        function handleDoubleClick() {
            helloWorld.classList.toggle('selected');
          }
      
          helloWorld.addEventListener('dblclick', handleDoubleClick);
      
          // Clean up the event listener on unmount
          return () => {
            helloWorld.removeEventListener('dblclick', handleDoubleClick);
          };


      }, []);



  return (
    <section className='main section'>
        <div className="main__container container grid">
            <div className="main__content">
                <h1 className="main__titlee">HEY, I'M <span className="main__title-color">SHEHAB</span> <span> WALEED</span></h1>
                <h1 className="main__subtitle">BUT YOU CAN CALL ME SHEBO</h1>
            </div>
                <div className="main__subcontent">
                    <p className="main__description">I am a self-taught Frontend Developer with experience in React, Redux, JavaScript, HTML, CSS, SASS, Tailwind and Firebase.</p>
                </div>
            <div className="main__links">
                <Link to='/contact' className="main__button button1">
                    <p><i class='bx bx-right-arrow-alt'></i> see my projects </p>
                </Link>
                <Link to='/contact' className="main__button button2">
                    <p><i class='bx bx-right-arrow-alt'></i> more about me</p>
                </Link>


            </div>
        </div>
    </section>
  )
}

export default Main