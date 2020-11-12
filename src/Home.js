import React from 'react';
import"./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-MTBkYjI1ZjMt-w1500._CB417540758_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.67}
                        image="https://images-na.ssl-images-amazon.com/images/I/510AO7UjVPL._SX331_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49538094"
                        title="Zero to One: Notes on Start Ups, or How to Build the Futures"
                        price={38.17}
                        image="https://images-na.ssl-images-amazon.com/images/I/51qUTPaUfCL._SX317_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="4903850"
                        title="Customer Journey 4.0:How to create the Customer Journey Map "
                        price={61.71}
                        image="https://images-na.ssl-images-amazon.com/images/I/41jErHVfWIL._SX322_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="23445930"
                        title="Intelligent Investor: The Classic Text on Value Investing (Rough Cut) "
                        price={21.66}
                        image="https://images-na.ssl-images-amazon.com/images/I/410p7Yf1iYL._SX332_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="3254354345"
                        title="Brave New World: Textbook (Dieste Travel Neuspr Ach Library English Department "
                        price={10.91}
                        image="https://images-na.ssl-images-amazon.com/images/I/51JumKTNPvL._SX323_BO1,204,203,200_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="90829332"
                        title="The Hogwarts Library Boxed Set including Fantastic Beasts & Where to Find Themp "
                        price={71.95}
                        image="https://images-na.ssl-images-amazon.com/images/I/51IefD0JDUL._SX376_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                </div> 
            </div>
        </div>
    )
}

export default Home
