import React from 'react'

function Root() {
  return (
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
  )
}

export default Root