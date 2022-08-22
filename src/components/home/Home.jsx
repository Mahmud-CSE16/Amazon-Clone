import { Link } from '@material-ui/core'
import React from 'react'
import Product from '../product/Product'
import './home.css'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <Link to="/">
              <img className='home__image' src="https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg" alt="" />
            </Link>
            {/* Row One */}
            <div className="home__row">
              <Product 
                key={0}
                id="0"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg" 
                rating={5}/>
             <Product 
                key={1}
                id="1"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg" 
                rating={5}/>
              <Product 
                key={8}
                id="7"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg" 
                rating={5}/>
              <Product 
                key={7}
                id="8"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg" 
                rating={5}/>
            </div>
            {/* Row Two */}
            <div className="home__row">
              <Product 
                key={2}
                id="2"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg" 
                rating={5}/>
              <Product 
                key={3}
                id="3"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg" 
                rating={5}/>
              <Product 
                key={4}
                id="4"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg" 
                rating={5}/>
            </div>
            {/* Row Three */}
            <div className="home__row">
              <Product 
                key={5}
                id="5"
                title='The lean startup' 
                price={29.99} 
                image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg" 
                rating={5}/>
            </div>
        </div>
    </div>
  )
}

export default Home