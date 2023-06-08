import LinksSection from "./LinksSection"

function Footer() {

    return (
        <footer className='flex flex-row justify-around h-[100%] m-auto tablet:max-w-[134rem] tablet:py-[6rem]'>
            <div className='tablet:flex tablet:flex-col tablet:justify-between'>
                <h3>logosprout</h3>
                <p className="text-base opacity-80">Eco food market</p>
                <p className="text-base opacity-80">SPROUT goods Ltd.</p>
                <p className="text-sm opacity-60">2021 r All rights reserved</p>
            </div>
            <LinksSection title='Company' link1='About' link2='Store' link3='FAQ'/>
            <LinksSection title='Service' link1='Delivery' link2='Paymant' link3='Contacts'/>
            <LinksSection title='Follow Us' link1='Instagram' link2='Facebook' link3='Twitter'/>
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