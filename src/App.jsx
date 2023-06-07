import logo from './assets/images/logo.png'



function App() {
  

  return (
    <>
      {/*     <!-- LAYOUT --> */}
      <div className="layout">
        {/*    <!-- HEADER --> */}
        <header className="header">
          {/*         <!-- HEADER: LEFT --> */}
          <div className="header__left">
            {/*   <!-- HEADER: LEFT - LOGO --> */}
            <a className="header__left--logo" href="./index.html">
              <img src={logo} alt="Sprout" />
            </a>
            {/*  <!-- HEADER: LEFT - SEARCH --> */}
            <form className="header__left--search">
              <input type="text" placeholder="Search" />
              <span className="material-symbols-outlined">search</span>
            </form>
            {/*  <!-- HEADER: LEFT - CATEGORIES --> */}
            <div className="header__left--categories">
              <span className="material-symbols-outlined">apps</span>
              <p>Categories</p>
            </div>
          </div>
          {/* <!-- HEADER: RIGHT --> */}
          <div className="header__right">
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
            <button className="header__right--cart">
              <span className="material-symbols-outlined">local_mall</span>
              <p>Cart: <span>6</span></p>
            </button>
            {/* <!-- HEADER: RIGHT - MENU --> */}
            <button className="header__right--menu">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>
        {/*  <!-- MAIN --> */}
        <main className="main">
          {/* <!-- BANNERS --> */}
          <section className="banners">
            {/* <!-- BANNERS: CONTAINER --> */}
            <div className="banners__container">
              {/* <!-- BANNER: LEFT --> */}
              <div className="banner banner--left"></div>
              {/*  <!-- BANNER: RIGHT --> */}
              <div className="banner banner--right"></div>
            </div>
            {/* <!-- BANNERS: CONTROLS --> */}
            <div className="banners__controls">
              <div className="banners__controls--left"></div>
              <div className="banners__controls--right"></div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
