import React, { useState } from "react";
import "./header.css";

const Header = () => {

  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 560 viewport height, add the show-header class to a tag with the scroll-top class
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("show-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#about");

  return (
    <header className="header">
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          Nurramazan Sembay
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className='uil uil-estate nav__icon'></i> Мен
              </a>
            </li>

            <li className='nav__item'>
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className='uil uil-user nav__icon'></i> Мен туралы
              </a>
            </li>

            <li className='nav__item'>
              <a href="#skills" className='nav__link'>
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>

            <li className='nav__item'>
              <a href="#services" className='nav__link'>
                <i className='uil uil-briefcase-alt nav__icon'></i> Services
              </a>
            </li>

            <li className='nav__item'>
              <a href="#portfolio" className='nav__link'>
                <i className='uil uil-scenery nav__icon'></i> Portfolio
              </a>
            </li>

            <li className='nav__item'>
              <a href="#contact" className='nav__link'>
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>

          <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>

      </nav>
    </header>
  )
}

export default Header
