import React from 'react'

import Arrow from '../assets/images/icon-arrow.svg'

import '../styles/button.scss'

function Button() {
    return (
        <div>
            <div>
                <span>veja mais</span>
                <img src={Arrow} alt='Ícone de seta'/>
            </div>
        </div>
    )
}

export default Button
