import React, { useState } from "react";
import { motion } from "framer-motion";
// import { use } from "react";
import ShopList from "./ShopList";
import Shopping from "./Shopping";

const Home = (buyBtn) => {
  const [Buynow, setBuynow] = useState(false);
  const toggleBuy = () => {
    console.log("buy now ");
    console.log(Buynow);
    setBuynow(buyBtn);
  };

  return (
    <>
      <div className=" flex justify-end  items-center  lg:flex-row  md:flex-col-reverse sm:flex-col-reverse   xs:flex-col-reverse ">
        <div>
          <motion.p
            className="text-6xl font-sans ssm:text-5xl ssm:font-sans moreSmall:ml-7 moreSmall:
            mr-2 moreSmall:text-4xl "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            New one!
          </motion.p>

          <motion.p
            className="text-8xl font-bold ssm:text-6xl ssm:font-sans moreSmall:ml-7 moreSmall:mr-2 moreSmall:text-5xl "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A3 HeadPhone
          </motion.p>

          <motion.div
            className="flex justify-around w-3/4   ssm:justify-between "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button
              className="bg-violet-400  px-3 py-2 font-bold text-xl rounded-2xl text-white hover:bg-violet-700   cursor-pointer mt-10 moreSmall:ml-3 moreSmall:h-11 "
              onClick={toggleBuy}
            >
              Buy Now{" "}
            </button>
            <button className="bg-violet-400  px-3 py-2 font-bold text-xl rounded-2xl text-white hover:bg-violet-700 cursor-pointer mt-10 moreSmall:h-11 ml-5 ">
              {" "}
              Shop all{" "}
            </button>
          </motion.div>
        </div>

        <motion.img
          className="   mix-blend-darken"
          width={600}
          src="img/h3.jpg"
          alt="new product"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
      {/* <Shopping toggleShop={toggleShop} /> */}
    </>
  );
};

export default Home;
