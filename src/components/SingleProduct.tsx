import { motion } from 'framer-motion'
import { cartState } from '../Context'
import Rating from './Rating'

const SingleProduct = ({ prod }: any) => {

  const { state: { cart }, dispatch } = cartState();

  return (
    <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="flex justify-center w-72 "
              key={prod._id}
            >
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img
                  className="rounded-t-lg"
                  src={prod.image}
                  alt="adfsf"
                />
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Name:- {prod.name}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">Price:- {prod.price}</p>
                  <div className="text-gray-700 text-base mb-4">Rating:- 
                  <Rating rate={prod.rating} />
                  </div>
                  <p className="text-gray-700 text-base mb-4">Fast Delivery:- {prod.fastDelivery ? "yes" : "No"}</p>
                  <p className="text-gray-700 text-base mb-4">In Stock:- {prod.inStock ? prod.inStock : "No"}</p>
                  { 
                    cart.some((c:any) => c._id === prod._id) ? 
                    <button onClick={() => dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod
                    })} className=' bg-red-400 p-2 rounded-md shadow-sm '>Remove from cart</button>
                    :
                    <button onClick={() => dispatch({
                      type: "ADD_TO_CART",
                      payload: prod
                    })} className={`bg-green-400 p-2 rounded-md shadow-sm ${!prod.inStock && 'bg-slate-400'} `} disabled={ !prod.inStock } >{ prod.inStock ? 'Add to cart' : 'Out of Stock'}</button>
                  }
                </div>
              </div>
            </motion.div>
  )
}

export default SingleProduct