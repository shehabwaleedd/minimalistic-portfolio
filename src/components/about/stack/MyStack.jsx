import React from 'react'
import "./Stack.css"

const MyStack = () => {
  return (
    <section className="stack section">
      <div className="stack__container container">
        <div className="stack__icons">
          <i class='bx bxl-javascript'></i>
          <i class='bx bxl-react' ></i>
          <i class='bx bxl-tailwind-css' ></i>
          <i class='bx bxl-bootstrap'></i>
          <i class='bx bxl-sass' ></i>
          <i class='bx bxl-firebase'></i>
          <i class='bx bxl-git'></i>
          <i class='bx bxl-typescript'></i>
        </div>
      </div>
    </section>
  )
}

export default MyStack