import React from 'react';
import "./Checkout.css";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/03/mozart/EN/2020/img/X_Site/EBDF_Deals/XCM_Manual_1274735_1407966_DE_HOD20_DE_ILM_3436355_650x45_1X_en_GB._CB419066390_.jpg" alt="" />

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
