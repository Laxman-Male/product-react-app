import React, { useEffect, useState } from 'react'
import Shopping from './Shopping';
import Cart from './Cart';


const ShopList = ({ id, product, shop, AddtoCart, cart,   removeitem }) => {
  const { title, review, img, price } = product;

  const [addcart, setaddcart] = useState(false)
  const isItemInCart = cart.some((item) => item.id === id);

  console.log(removeitem)

  if (shop == false) {
    console.log("false")
  }

  return (
    <>



      {shop && (
        <div className=''>
          <div id={id} className={`flex    sm:flex-row md:flex-col lg:flex-col  ssm:flex-row   moreSmall:flex-col  flex-col ${shop ? ' ' : 'border border-black   '} moreSmall:border border-red-600 moreSmall:w-56  moreSmall:m-auto      ssm:border border-violet-400   sm:border border-violet-300 bg-white rounded-2xl px-2 md:border   lg:border    `}>
            <img className='  moreSmall:w-full moreSmall:m-0  sm:w-56 ssm:w-3/4 md:w-3/4    h-52   relative  items-center shadow-xl shadow-violet-700/80   p-0 m-10 mb-3 mt-2      rounded-2xl   ' src={img} />
            <div className='   flex flex-col items-start px-3   ml-1  '>

              <p className=' px-3 font-bold text-xl m-1 '> {title}</p>
              <p className=' px-3 py-1 font-semibold text-xl  rounded-lg  m-1 '> Review-{review}</p>
              <p className='px-3 font-semibold text-2xl m-1'> Rs.{price}</p>
              <button className='border border-violet-400 rounded-lg text-lg px-3 py-1 bg-violet-300 font-semibold m-2 ssm:text-sm ' onClick={() => AddtoCart(product)} disabled={isItemInCart}>
                {isItemInCart ? ' Added' : 'Add to Cart'}
              </button>

            </div>
          </div>

        </div>

      )}

      {!shop && (

        <div id='main_outer'>
          <div id="outer" className=''>
            <div id="inner">
              <img src=" img/e1.jpg" />
              <img src="img/h1.jpg " />
              <img src="img/h4.jpg" />
              <img src="img/we2.jpg" />
              <img src="img/ww2.jpg " />
              <img src="img/ww5.jpg" />
              <img src="img/e5.jpg" />
              <img src="img/ww3.png" />

            </div>

          </div >
          <marquee id='new_feture' className="text-2xl font-semibold"> Newly Featured ! </marquee>
        </div>

      )}

    </>
  )
}
export default ShopList
