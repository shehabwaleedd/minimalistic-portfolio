import React from 'react'
import "./Stack.scss"

const MyStack = (Props) => {
  return (
    <section>
      {Props.isMobile ? (
        <div className='stack section' style={{position: "fixed"}}>
          <div className="stack__container container">
            <div className="stack__icons">
              <i className='bx bxl-javascript'></i>
              <i className='bx bxl-react' ></i>
              <i className='bx bxl-tailwind-css' ></i>
              <i className='bx bxl-bootstrap'></i>
              <i className='bx bxl-sass' ></i>
              <i className='bx bxl-firebase'></i>
              <i className='bx bxl-git'></i>
              <i className='bx bxl-typescript'></i>
            </div>
          </div>
        </div>
      ) : (
        <div className='stack section'>
          <div className="stack__container container">
            <div className="stack__icons">
              <i className='bx bxl-javascript'></i>
              <i className='bx bxl-react' ></i>
              <i className='bx bxl-tailwind-css' ></i>
              <i className='bx bxl-bootstrap'></i>
              <i className='bx bxl-sass' ></i>
              <i className='bx bxl-firebase'></i>
              <i className='bx bxl-git'></i>
              <i className='bx bxl-typescript'></i>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MyStack