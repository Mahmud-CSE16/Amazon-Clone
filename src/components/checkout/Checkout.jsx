import React from 'react'
import { useStateValue } from '../../StateProvider';
import './checkout.css'
import CheckOutProduct from './checkoutProduct/CheckOutProduct'
import Subtotal from './subtotal/Subtotal'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();


  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkout__ad' src="http://vdrdigital.com/wp-content/uploads/2020/07/linkedin-amazon-cover-photo-1024x176.jpg" alt="" />

            <div>
                <h4>Hello {user?.email}</h4>
                <h2 className="checkout__title">Your shopping Basket</h2>
                {
                    basket.map(item => (
                        <CheckOutProduct key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))
                }
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout