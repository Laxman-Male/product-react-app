import React, { useEffect, useState } from 'react'
import Shopping from './Shopping';
import Cart from './Cart';






const ShopList = ({ id, product, shop, AddtoCart, cart, backToCart, setbackToCart, handleremove, removeitem, setremoveitem }) => {
  const { title, review, img, price } = product;

  const [addcart, setaddcart] = useState(false)
  // setremoveItem(false)
  const isItemInCart = cart.some((item) => item.id === id);

  console.log(removeitem)


  if (shop == false) {
    console.log("false")
  }
  // removeItem=(!removeItem)
  // if(backToCart==true)
  // {
  //     console.log("item removed")
  //     // setaddcart(!addcart)
  //     // setbackToCart(false)
  // }
  // else{
  //     console.log("not removed")
  // }




  // console.log(removeItem)
  // const addItem =()=>{
  //     // console.log("cart added")
  //     //setcart[cart,product ]
  //     AddtoCart(product)
  //     console.log(product)

  //     console.log(addcart)
  //     setaddcart(!addcart)


  //     // removeItem=(!removeItem)

  //     }




  // const [isDisabled, setisDisabled]=useState(true)
  // console.log(!removeItem)
  // removeItem=!removeItem

  //     if(removeItem===true)
  //     {
  //         console.log("remove else")

  //     }
  //     else{
  // setaddcart(false)
  //     }
  // const removeItemHandler =()=>{
  //     handleremove(id);
  // }

  // useEffect (()=>{
  //   setisDisabled(!isDisabled)
  // },[addcart]);

  // removeItem=()=>{
  //     removeItem("removed item is",product.id)
  //     setaddcart(true)
  //     // setaddcart(true)
  // }





  // i was here to make 3d 
  return (
    <>



      {shop && (
        <div className=''>
          {/* <div className={`flex   flex-col ${shop}`}> */}
          <div id={id} className={`flex    sm:flex-row md:flex-col lg:flex-col  ssm:flex-col   flex-col ${shop ? ' ' : 'border border-black   '}    sm:border border-violet-300 bg-white rounded-2xl px-2 md:border   lg:border   `}>
            <img className='   sm:w-56 ssm:w-32/4 md:w-3/4    h-52   relative  items-center shadow-xl shadow-violet-700/80   p-0 m-10 mb-3 mt-2      rounded-2xl   ' src={img} />
            <div className='   flex flex-col items-start px-3   ml-1  '>

              <p className=' px-2 font-bold text-xl m-1'> {title}</p>
              <p className=' px-3 py-1 font-semibold text-xl  rounded-lg  m-1 '> Review-{review}</p>
              <p className='px-3 font-semibold text-2xl m-1'> Rs.{price}</p>


              <button className='border border-violet-400 rounded-lg text-lg px-3 py-1 bg-violet-300 font-semibold m-2  ' onClick={() => AddtoCart(product)} disabled={isItemInCart}>
                {isItemInCart ? ' Added' : 'Add to Cart'}
              </button>



            </div>
          </div>

        </div>

      )}



      {/* we can change the shopping list using slice like if  shop is false the return 8 product and true then all product will do tomaroww */}

      {!shop && (

<div  id='main_outer'>


        <div id="outer" className=''>

          <div id="inner">

            <img src=" img/e1.jpg" />
            <img src="img/h1.jpg " />
            <img src="img/h4.jpg" />
            <img src="img/we2.jpg" />
            <img src="img/ww2.jpg " />
            <img src=" img/ww5.jpg" />
            <img src=" img/e5.jpg" />
             <img src=" img/ww3.png" />
              
          </div>



       





          {/* <div id="carouselExampleCaptions" className="carousel slide border border-black h-full" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/e1.jpg" className="d-block w-100" alt="not able " />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/e1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/e1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div> */}






           

                      </div >
                      <marquee id='new_feture' className="text-2xl font-semibold"> Newly Featured ! </marquee>
                      </div>
                     
                      

            )}
                      











                    </>
                    )

}


export default ShopList
