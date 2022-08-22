import React from 'react'
import "./subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../../StateProvider';
import { getBasketTotalAmount } from '../../../reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}

            decimalScale={2}
            value = {getBasketTotalAmount(basket)}
            displayType = {"text"}
            thousandSeparator={true}
            prefix = {"$"}
        />

        <button onClick={e=>navigate('/payment')} >Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal