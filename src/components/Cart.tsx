import { cartState } from "../Context";
import { motion } from "framer-motion";
import Rating from "./Rating";
import { useEffect, useState } from "react";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = cartState();

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(
      (prev) =>
        (prev = cart.reduce(
          (acc: any, curr: any) => acc + Number(curr.price) * curr.qty,
          0
        ))
    );
  }, [cart]);

  return (
    <>
      <div className="bg-gray-400">
        <h1 className="text-3xl font-bold text-center">Cart</h1>
        <p className="pl-10">total :- 💲{total}</p>
        <button className="ml-10 bg-green-300 p-2 rounded-lg text-white mt-4">
          checkout to payment
        </button>
      </div>
      <div className="cart flex gap-5 flex-wrap justify-center items-center mt-8">
        {cart.map((prod: any) => {
          return (
            <motion.div
              className="flex gap-8 justify-center items-center flex-wrap"
              key={prod._id}
            >
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={prod.image} alt="adfsf" />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Name:- {prod.name}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Price:- {prod.price}
                  </p>
                  <div className="text-gray-700 text-base mb-4">
                    <Rating rate={prod.rating} />
                  </div>
                  <p className="text-gray-700 text-base mb-4">
                    Fast Delivery:- {prod.fastDelivery ? "yes" : "No"}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    In Stock:- {prod.inStock ? prod.inStock : "No"}
                  </p>
                  <div className="m-4 border">
                    <select name="qty" id="qty" onChange={(e) => dispatch({
                      type: "CHANGE_QTY",
                      payload: {
                        id : prod._id,
                         qty: Number(e.target.value)
                        }
                    })} defaultValue={prod.qty}>
                      {[...Array(prod.inStock)].map((_, i:number) => <option key={i} value={i+1}>{i+1}</option>)}
                    </select>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                    className=" bg-red-400 p-2 rounded-md shadow-sm "
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
