import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                
            
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            
            <div className="home__row">
                <Product id="1" title='The Pizza you dont recognize' price={29.99} image='https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/fideos-secos-tacos-FT-RECIPE0420-1.jpg' rating={5} />
                <Product id="2" title='The Fatty Patty Burger' price={29.99} image='https://bloximages.newyork1.vip.townnews.com/bakersfield.com/content/tncms/assets/v3/editorial/2/9d/29d1a8f0-0652-553e-8cb5-694be055db26/5ddec7bdbedbf.image.jpg?resize=1200%2C1499' rating={5} />
            </div>

            <div className="home__row">
                <Product id="3" title='The Pizza you dont recognize' price={29.99} image='https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/fideos-secos-tacos-FT-RECIPE0420-1.jpg' rating={5} />
                <Product id="4" title='The Fatty Patty Burger' price={29.99} image='https://bloximages.newyork1.vip.townnews.com/bakersfield.com/content/tncms/assets/v3/editorial/2/9d/29d1a8f0-0652-553e-8cb5-694be055db26/5ddec7bdbedbf.image.jpg?resize=1200%2C1499' rating={5} />
                <Product id="5" title='The Pizza you dont recognize' price={29.99} image='https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/fideos-secos-tacos-FT-RECIPE0420-1.jpg' rating={5} />
            </div>

            <div className="home__row">
                <Product id="6" title='The Fatty Patty Burger' price={29.99} image='https://bloximages.newyork1.vip.townnews.com/bakersfield.com/content/tncms/assets/v3/editorial/2/9d/29d1a8f0-0652-553e-8cb5-694be055db26/5ddec7bdbedbf.image.jpg?resize=1200%2C1499' rating={5} />
            </div>
            </div>

            
        </div>
    )
}

export default Home
