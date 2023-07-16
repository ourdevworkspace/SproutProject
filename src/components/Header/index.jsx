import React from 'react';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className="w-[100%] px-[1rem] flex justify-between items-center font-bold desktop:w-[134rem] desktop:mx-auto">
      {/*<!-- HEADER: LEFT -->*/}
      <div className="flex items-center gap-[2rem]">
        {/*<!-- HEADER: LEFT - LOGO -->*/}
        <a href="./index.html">
          <img className="h-[4rem]" src={logo} alt="Sprout Logo" />
        </a>
        {/*  <!-- HEADER: LEFT - SEARCH --> */}
        <form className="flex items-center bg-white h-[4rem] px-[1.5rem] rounded-[1rem]">
          <input type="text" placeholder="Search" className="" />
          <span className="material-symbols-outlined">search</span>
        </form>
        {/*  <!-- HEADER: LEFT - CATEGORIES --> */}
        <div className="header__left--categories">
          <span className="material-symbols-outlined">apps</span>
          <p>Categories</p>
        </div>
      </div>
      {/* <!-- HEADER: RIGHT --> */}
      <div className="flex items-center gap-[2rem]">
        {/*  <!-- HEADER: RIGHT - SEARCH --> */}
        <button className="header__right--search">
          <span className="material-symbols-outlined">search</span>
        </button>
        {/* <!-- HEADER: RIGHT - ACCOUNT --> */}
        <button className="header__right--account">
          <span className="material-symbols-outlined">account_circle</span>
          <p>Agustín</p>
          <span className="material-symbols-outlined">expand_more</span>
        </button>
        {/* <!-- HEADER: RIGHT - CART --> */}
        <button className="header__right--cart bg-white">
          <span className="material-symbols-outlined">local_mall</span>
          <p>
            Cart: <span>6</span>
          </p>
        </button>
        {/* <!-- HEADER: RIGHT - MENU --> */}
        <button className="header__right--menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
