import React from 'react'
import './Home.css'
import Product from './Product'

//load background image from the folder 'public'
const bgImage = process.env.PUBLIC_URL + '/gradient.jpeg'
const bgImageWeb = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"

function Home() {
    return (
        <div className="home">
            <img className="home__image" src={bgImageWeb} alt=""/>

            <div className="home__row">
                <Product
                    id="123"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
                <Product
                    id="124"
                    title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)"
                    price={769}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._AC_SX342_.jpg" />
                
            </div>

            <div className="home__row">
                <Product
                    id="125"
                    title='All New Kindle Paperwhite | Waterproof, 6" High-Resolution Display, 8 GB—with Special Offers—Plum'
                    price={119.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ceTxaisrL._AC_SL1500_.jpg" />
                <Product
                    id="126"
                    title="Kalorik TKG M 3014 BS Vintage Style Polkadot Stand Mixer with 5L Bowl, Whisk, Dough Hook and Flat Beater Attachments, 6 Speeds, Stainless Steel, 1000 W, 5 liters, Red & White"
                    price={69.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ImEcaXGkL._AC_SX355_.jpg" />
                <Product
                    id="127"
                    title="Introducing Blink Mini | Compact indoor plug-in smart security camera, 1080p HD video, motion detection, Works with Alexa | 1 Camera"
                    price={34.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71VEryDkYKL._SX522_.jpg" />
            </div>
            <div className="home__row">
                <Product
                    id="128"
                    title="Fire TV Stick 4K Ultra HD with Alexa Voice Remote | streaming media player"
                    price={49.9}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ea0oGhZUL._AC_SX679_.jpg" />
            </div>

        </div>
    )
}

export default Home
