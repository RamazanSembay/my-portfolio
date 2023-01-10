import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='footer__container container'>
          <h1 className='footer__title'>Nurramazan Sembay</h1>
          <ul className='footer__list'>
            <li>
              <a href="#about" className='footer__link'>About</a>
            </li>

            <li>
              <a href="#projects" className='footer__link'>Projects</a>
            </li>

          </ul>

          <div className='footer__social'>
            <a
              href="https://ru-ru.facebook.com/"
              className='footer__social-link' target="_blank">
              <i class='bx bxl-facebook'></i>
            </a>

            <a
              href="https://www.instagram.com/nurramazan_sembayev/"
              class='footer__social-link' target="_blank">
              <i class="bx bxl-instagram"></i>
            </a>

            <a
              href="https://twitter.com/?lang=ru"
              className='footer__social-link' target="_blank">
              <i class='bx bxl-twitter'></i>
            </a>
          </div>

          <span className='footer__copy'>&#169; Nurramazan. All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
