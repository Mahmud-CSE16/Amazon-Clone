import { Link } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import './home.css'

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    // will only run once when the app component loads...
    const abc = async ()=> {
      const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );

      setProducts(products);
    }

    abc();
  }, []);

  console.log(products);

  return (
    <div className="home">
        <div className="home__container">
            <Link to="/">
              <img className='home__image' src="https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg" alt="" />
            </Link>
            {/* Row One */}
            <div className="home__row">

            {products
                .slice(0, 4)
                .map(({id, title, price, description, category, image, rating})=>(
               <Product
                    key={id}
                    id={(id)}
                    title={title}
                    price={price}
                    // description={description}
                    // category={category}
                    image={image}
                    rating={rating}
               />
            ))}
            </div>
            {/* Row Two */}
            <div className="home__row">
            {products
                .slice(4, 7)
                .map(({id, title, price, description, category, image, rating})=>(
               <Product
                    key={id}
                    id={(id)}
                    title={title}
                    price={price}
                    // description={description}
                    // category={category}
                    image={image}
                    rating={rating}
               />
            ))}
            </div>
            {/* Row Three */}
            <div className="home__row">
            {products
                .slice(7, 9)
                .map(({id, title, price, description, category, image, rating})=>(
               <Product
                    key={id}
                    id={(id)}
                    title={title}
                    price={price}
                    // description={description}
                    // category={category}
                    image={image}
                    rating={rating}
               />
            ))}
            </div>
            <div className="home__row">
            {products
                .slice(9, 10)
                .map(({id, title, price, description, category, image, rating})=>(
               <Product
                    key={id}
                    id={(id)}
                    title={title}
                    price={price}
                    // description={description}
                    // category={category}
                    image={image}
                    rating={rating}
               />
            ))}
            </div>
            <div className="home__row">
            {products
                .slice(10, 15)
                .map(({id, title, price, description, category, image, rating})=>(
               <Product
                    key={id}
                    id={(id)}
                    title={title}
                    price={price}
                    // description={description}
                    // category={category}
                    image={image}
                    rating={rating}
               />
            ))}
            </div>

            <div className="home__row">
            {products
                .slice(15, 20)
                .map(({id, title, price, description, category, image, rating})=>(
               <Product
                    key={id}
                    id={(id)}
                    title={title}
                    price={price}
                    // description={description}
                    // category={category}
                    image={image}
                    rating={rating}
               />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Home