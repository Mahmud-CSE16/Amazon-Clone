import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../axios';
import { db } from '../../firebase';
import { getBasketTotalAmount } from '../../reducer';
import { useStateValue } from '../../StateProvider'
import CheckOutProduct from '../checkout/checkoutProduct/CheckOutProduct';
import './payment.css'

function Payment() {

    const navigate = useNavigate();

    const [{basket,user} ,dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)


    useEffect(() => {
        //stripe secret
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?amount=${getBasketTotalAmount(basket)*100}&currency=usd`,
            })

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    },[basket])


    console.log('THE SECRET IS >>>',clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setProcessing(true)

        const payload = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method:{
                    card: elements.getElement(CardElement)
                }
            }
        ).then(({ paymentIntent })=>{
            // paymentIntent = payment confirmation

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
    
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET',
            })

            navigate('/orders',{replace:true})
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className="payment__container">

            <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>

            {/* Payment section - delivery address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React lane</p>
                    <p>Los Angeles</p>
                </div>
            </div>
            {/* Payment section - Review */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
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

            {/* Payment - Payment method */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* Stripe magic */}

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className="payment__priceContainer">
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                      <h3>Order Total: {value}</h3> 
                                    </>
                                )}

                                decimalScale={2}
                                value = {getBasketTotalAmount(basket)}
                                displayType = {"text"}
                                thousandSeparator={true}
                                prefix = {"$"}
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> :"Buy Now"}</span>
                            </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment