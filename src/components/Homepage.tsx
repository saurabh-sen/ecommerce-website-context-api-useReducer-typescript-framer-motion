import { motion, useScroll, useSpring } from "framer-motion";
import { cartState } from "../Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";

const Homepage = () => {

  const { 
    state: { product },
   prodState : { byStock, byRating, bySearchQuery, byFastDelivery, sort } } = cartState();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const filteredProducts = () => {
    let sortedProducts = product;

    if(sort) {
      sortedProducts = sortedProducts.sort((a:any, b:any) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod : any) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod : any) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod : any) => prod.rating >= byRating
      );
    }

    if (bySearchQuery) {
      sortedProducts = sortedProducts.filter((prod : any) =>
        prod.name.toLowerCase().includes(bySearchQuery)
      );
    }

    return sortedProducts;

  };

  return (
    <>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 bg-red-500 h-1 rounded-full z-10"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <div className="cart flex gap-5 flex-wrap justify-evenly items-center mt-8">

        <Filter />

        {filteredProducts().map((item: any) => {
          return (
            <SingleProduct key={item._id} prod={item} />
          );
        })}

      </div>
    </>
  );
};

export default Homepage;
