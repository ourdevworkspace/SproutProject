import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function RootLayout() {

  return (
    <div className='flex flex-col min-h-[100vh] justify-between'>
      <div className="outlet_header__container">
        <Header />
        <Outlet />
      </div>
      <div className='bg-ivory tablet:h-[20rem]'>
        <Footer />
      </div>
    </div>
  )
}

export default RootLayout