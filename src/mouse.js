import React from 'react'

const mouse = () => {

    const trailer = document.getElementById("trailer");

    window.onmousemove = e => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientYtrailer.offsetHeight / 2;

        const keyFrames = {
            transform: `translate(${x}px, ${y}px)`
        }
        trailer.animate(keyFrames, {
            duration: 800,
            fill: "forwards"
        }) 
    }

    return (
        <div>mouse</div>
    )
}

export default mouse