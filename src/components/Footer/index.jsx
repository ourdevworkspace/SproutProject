

function Footer() {

    return (
        <footer className='flex flex-row justify-around h-[100%] m-auto tablet:max-w-[134rem] tablet:py-[6rem]'>
            <div className='tablet:flex tablet:flex-col tablet:justify-between'>
                <h3>logosprout</h3>
                <p className="text-base opacity-80">Eco food market</p>
                <p className="text-base opacity-80">SPROUT goods Ltd.</p>
                <p className="text-sm opacity-60">2021 r All rights reserved</p>
            </div>
            <div className='tablet:flex tablet:flex-col tablet:justify-between'>
                <h3 className="text-lg">Company</h3>
                <div className="tablet:flex tablet:flex-col tablet:gap-2">
                    <p>About</p>
                    <p>Store</p>
                    <p>FAQ</p>
                </div>
            </div>
            <div className='tablet:flex tablet:flex-col tablet:justify-between'>
                <h3 className="text-lg">Service</h3>
                <div className="tablet:flex tablet:flex-col tablet:gap-2">
                    <p>Delivery</p>
                    <p>Paymant</p>
                    <p>Contacts</p>
                </div>
            </div>


            <div className='tablet:flex tablet:flex-col tablet:justify-between'>
                <h3 className="text-lg">Follow us</h3>
                <div className="tablet:flex tablet:flex-col tablet:gap-2">
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                </div>
            </div>


            <div className='tablet:flex tablet:flex-col tablet:justify-between'>
                <h3 className="text-lg">Get our newsletters:</h3>
                <div>
                    <form>
                        <input></input>
                        <button></button>
                    </form>
                </div>
                <div className='tablet:flex tablet:flex-row tablet:gap-4'>
                    <a>Terms and conditions</a>
                    <a>Privacy policy</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer