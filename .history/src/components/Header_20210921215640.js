import React from "react";

import CorebizTransp from "../assets/images/logo-corebiz-global.svg";

function Header() {
  return (
    <div className='header-container'>
      <div className='logo'>
        <img src={CorebizTransp} alt="Logo Corebiz" />
      </div>
      <div className='menu-container'>
          <ul>
              <li className='menu-item'>
                  <a href='https://www.corebiz.ag/pt/about/' target="_blank" rel="noreferrer">a corebiz</a>
              </li>
              <li className='menu-item'>
                  <a href='https://www.corebiz.ag/pt/#framework-title' target="_blank" rel="noreferrer">serviços</a>
              </li>
              <li className='menu-item'>
                  <a href='https://www.corebiz.ag/pt/cases/' target="_blank" rel="noreferrer">cases</a>
              </li>
              <li className='menu-item'>
                  <a href='https://www.corebiz.ag/pt/contato/' target="_blank" rel="noreferrer">contato</a>
              </li>
          </ul>
      </div>
    </div>
  );
}

export default Header;
