import React, { useEffect, useState } from 'react'
import Shoppingg from './Shopping'
import ShopList from './ShopList'

const Cart = ({ setquantity, quantity, handleremove, cartitem = [] }) => {
 
 const [displayCart, setdisplayCart]=useState(false)
  const [total, settotal] = useState(0);
 
  useEffect(() => {
    let newtotal = 0;
    cartitem.forEach(item => {
      const itemQuntity = quantity[item.id] || 1;
      newtotal = newtotal + parseFloat(item.price) * itemQuntity;
    });
    settotal(newtotal);
    
  }, [cartitem, quantity])
  
useEffect(()=>{
  if(total>0){
    setcount(prevCount=>prevCount+1)
  }
 
},[])

  const handleplus = (item) => {

    setquantity(
      (quantity) => {
        const currentQuantity = quantity[item.id] || 1;
        return {
          ...quantity,
          [item.id]: currentQuantity + 1,

        }
      });
  };
  const handleminus = (item) => {
    setquantity(
      (quantity) => {
        const currentQuantity = quantity[item.id] || 1;
        if (currentQuantity > 0) {
          return {
            ...quantity,
            [item.id]: currentQuantity - 1,
          }
        }
        else {
          return quantity;

        }
      });
  }

  const handleCartDesign = () => {
    console.log("enter in cart")
    setdisplayCart(!displayCart)
  }
  const continue_shop=()=>{
    setdisplayCart(!displayCart)
  }

  return (
    <>

      <ul  className='absolute top-16 right-2 max-h-[80vh] overflow-y-auto  '>
        <li className='cursor-pointer' onClick={handleCartDesign}><lord-icon
          src="https://cdn.lordicon.com/pbrgppbb.json"
          trigger="hover">
         </lord-icon> </li>
      </ul>
         <li className={`absolute top-16 list-none right-1 rounded-full w-4 h-4 flex  justify-center items-center text-black bg-red-600  ${total==0? 'hidden': ''  } ` }>  </li>

      <div className={`fixed top-12 right-1 max-h-[80vh] overflow-y-auto  border border-violet-400 w-3/4  bg-violet-300  rounded-xl ${ displayCart? 'block': "hidden" }`}>
        <div className='flex   justify-center '>

           <div className='  grid lg:grid-cols-4 xl:grid-cols-4      rounded-lg  shadow-2xl  md:grid-cols-2 sm:grid-cols-2  '>

            {cartitem.map((item) => (
              <div key={item.id}  >
                 <img className='w-3/4 h-44  m-2 items-center shadow-xl shadow-violet-700/80  rounded-tr-3xl rounded-bl-3xl ' src={item.img} />
                <p className=' px-2 font-bold text-lg ml-1'>{item.title}</p>
                <p className='px-3 font-semibold text-xl'>Rs.{item.price}</p>
                <div className=' flex items-center   ml-3 '  >
                  <button className='border border-violet-700 font-bold w-8 rounded-l-md' onClick={() => handleminus(item)}>  - </button>
                  <p className='border border-violet-700 px-2  w-8 m-0 ' > {quantity[item.id] || 1} </p>
                  <button className='border border-violet-700 font-bold w-8 rounded-r-md' onClick={() => handleplus(item)}>  + </button>
                </div>
                 <button className=' border border-violet-500 rounded-xl py-1 px-4 my-1 text-lg font-semibold ml-3   ' onClick={() => handleremove(item.id)}> Remove  </button>
               </div>
            ))}
          </div>

        </div>
        <div className='flex justify-center'>
          <p className=' cursor-pointer p-2 text-blue-700 font-normal underline' onClick={continue_shop}>  Continue Shopping  </p>

        </div>
        <div className=' border border-violet-400 rounded-lg cursor-pointer  self-center p-3 bg-gradient-to-b from-violet-500 to-violet-200 text-md font-semibold   text-center'>
          <p className={`' font-bold font-sans text-lg'${total==0? "hidden": "block"}`}> Total: Rs.{total}</p>
        </div>
       </div>

    </>
  )
}

export default Cart

 