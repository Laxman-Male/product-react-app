import React, { useState } from 'react'
// import App from '../App'
import ShopList from './ShopList'
import Cart from './Cart'

const Shopping = ({ addcart }) => {

    //made it false to make image 3d
    const [shop, setshop] = useState(false)
    const handleshop = () => {
        setshop(!shop);

        console.log(shop)
    }



    const [quantity, setquantity] = useState({});


    const [removeItem, setremoveItem] = useState(false)
    const [backToCart, setbackToCart] = useState(true)


    const [cart, setcart] = useState([])
    const AddtoCart = (product) => {

        setcart(prevCart => {
            if (prevCart.some(item => item.id === product.id)) {
                // alert("Already added product!")
                // return <div className='hidden'> </div>
                return prevCart
            }
            else {
                console.log("adding new product")


                setquantity(prev => ({
                    ...prev,
                    [product.id]: 1
                }));




                return [...prevCart, product];
            }
        })
        // setcart([...cart, product]);

    };

    const handleremove = (itemid) => {
        setcart((prevCart) => prevCart.filter(item => item.id !== itemid));



        //quantity of product will re-initialize to 1 after  re-render

        setquantity(prev => {
            const updatedQuantities = { ...prev };

            // Remove quantity tracking for removed item
            delete updatedQuantities[itemid];

            return updatedQuantities;
        });


      




        //         setremoveItem(!removeItem)
        // setbackToCart(!backToCart)
        // }) )
        // addcart=(true)
        // setremoveItem(!removeItem)
    }

  

    const productData = [
        { id: "1", title: "EarPhone", review: "⭐⭐⭐⭐", img: "img/e1.jpg", price: "100" },
        { id: "2", title: "HeadPhone", review: "⭐⭐⭐", img: "img/h1.jpg", price: "699" },
        { id: "3", title: "Wireless", review: "⭐⭐⭐⭐", img: "img/we1.jpg", price: "599" },
        { id: "4", title: "SmartWatch", review: "⭐⭐⭐⭐", img: "img/ww1.jpeg", price: "799" },
        { id: "5", title: "EarPhone", review: "⭐⭐⭐⭐⭐", img: "img/e3.jpg", price: "299" },

        { id: "6", title: "HeadPhone", review: "⭐⭐⭐⭐", img: "img/h3.jpg", price: "899" },
        { id: "7", title: "Wireless", review: "⭐⭐⭐", img: "img/we3.jpg", price: "699" },
        { id: "8", title: "SmartWatch", review: "⭐⭐", img: "img/ww3.png", price: "1999" },
        { id: "9", title: "EarPhone", review: "⭐⭐⭐", img: "img/e4.jpg", price: "199" },
        { id: "10", title: "HeadPhone", review: "⭐⭐⭐⭐⭐", img: "img/h4.jpg", price: "1099" },
        { id: "11", title: "Wireless", review: "⭐⭐", img: "img/we4.jpg", price: "799" },
        { id: "12", title: "SmartWatch", review: "⭐⭐⭐", img: "img/ww4.jpg", price: "1299" },
        { id: "13", title: "EarPhone", review: "⭐⭐⭐", img: "img/e5.jpg", price: "329" },
        { id: "14", title: "HeadPhone", review: "⭐⭐⭐⭐", img: "img/h5.jpg", price: "749" },
        { id: "15", title: "Wireless", review: "⭐⭐⭐⭐", img: "img/we5.jpg", price: "659" },
        { id: "16", title: "SmartWatch", review: "⭐⭐⭐⭐", img: "img/ww5.jpg", price: "999" },
    ];

    const [filter,setFilter]= useState('All ')

    const filterEarphone=(e)=>{
        // console.log(e.target)
        setFilter('EarPhone')
        console.log(filter)
        console.log(productData)
        console.log(productData)

    }

    return (

        <>
            <section>
                <div className='   '>
                    <div className='font-bold text-4xl flex  justify-center py-3'>
                        Shop by Category
                    </div>
                    {/* <div className='border border-black' >
                        <ul className='flex gap-3 justify-start px-5 m-0 '>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2 py-1  font-semibold cursor-pointer '>All </li>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2 py-1 font-semibold cursor-pointer '> EarPhone </li>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2 py-1  font-semibold cursor-pointer '> HeadPhone </li>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2 py-1  font-semibold cursor-pointer '> Wireless </li>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2  py-1 font-semibold cursor-pointer '> SmartWatch </li>
                        </ul>
                    </div> */}
                    {shop && (



                        <div className='flex justify-center flex-col'>



                             <div className='border border-black sm:overflow-x-scroll ssm:overflow-x-scroll' >
                        <ul className='flex gap-3 justify-start px-5 m-0 '>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2 py-1  font-semibold cursor-pointer '>All </li>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2 py-1 font-semibold cursor-pointer ' onClick={filterEarphone}> EarPhone </li>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2 py-1  font-semibold cursor-pointer '> HeadPhone </li>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2 py-1  font-semibold cursor-pointer '> Wireless </li>
                            <li className='border border-violet-600 bg-violet-400 rounded-md px-2  py-1 font-semibold cursor-pointer '> SmartWatch </li>
                        </ul>
                    </div>
                            <div className={" grid lg:grid-cols-3 xl:grid-cols-4   gap-2   rounded-lg  shadow-2xl  md:grid-cols-2 sm:grid-cols-1 ssm:grid-cols-1   p-5"}>

                                {productData.map((pro) => (
                                    <ShopList
                                        key={pro.id}
                                        id={pro.id}
                                        product={pro}
                                        shop={shop}
                                        AddtoCart={AddtoCart}
                                        handleremove={handleremove}
                                        cart={cart}
                                    />
                                ))}

                            </div>
                        </div>
                    )}

 

                    

                    {!shop && (
                        <div className=''>

                            <div className={"  "}>

                                {productData.slice(0, 1).map((pro) => (
                                    <ShopList
                                        key={pro.id}
                                        id={pro.id}
                                        product={pro}
                                        shop={shop}
                                        AddtoCart={AddtoCart}
                                        handleremove={handleremove}
                                        cart={cart}
                                    />
                                ))}

                            </div>
                        </div>

                    )}




                    <Cart cartitem={cart} removeItem={removeItem} handleremove={handleremove} cart={cart} quantity={quantity} setquantity={setquantity} />
                </div>
                <div className='flex  justify-center'>

                    <button className='border border-violet-500 text-cyan-100 font-bold w-40 h-10 rounded-full bg-violet-400 items-center mt-20 text-xl hover:bg-violet-500' onClick={handleshop}> {shop ? "Show Less" : "Show All"}  </button>
                    {/* <Cart cartitem={cart}/> */}
                </div>
            </section>
        </>
    )
}

export default Shopping



















































































