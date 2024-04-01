import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footer-container">
                
                    
                    <Link to='/' className='footer-logo'>Eyu_Pics.</Link>
                    <div className="footer-social">
                        <ion-icon name="logo-facebook" id='icons'></ion-icon>
                        <ion-icon name="logo-twitter" id='icons'></ion-icon>
                        <ion-icon name="logo-instagram" id='icons'></ion-icon>
                        <ion-icon name="logo-linkedin" id='icons'></ion-icon>
                    </div>
                    <p className='footer-copy'>&copy; Copyright 2024. Design By <a href='https://89abel.github.io/' target="_blank">Abel G.</a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer