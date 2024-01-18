import React from 'react'

const MoreInfo = () => {
  return (
    <div className='more-info'>
        <div>
            <h4>
                Made by 
                <span>
                    Gonzalo Jaime
                </span>
            </h4>
            <a href="https://www.linkedin.com/in/gjaimeguinazu/">
                <ion-icon className="more-info-icon" name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://github.com/GzaJai">
                <ion-icon className="more-info-icon" name="logo-github"></ion-icon>
            </a>
        </div>
    </div>
  )
}

export default MoreInfo