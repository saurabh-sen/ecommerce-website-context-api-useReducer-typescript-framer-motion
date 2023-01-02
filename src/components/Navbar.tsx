import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import { cartState } from '../Context'

const Navbar = () => {

  const { state : { cart }, prodDispatch } = cartState();

  const [navbar, setNavbar] = useState<Boolean>(false);

  return (
    <nav className="bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to='/'>
            <img src={logo} alt="logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(prev => !prev)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black transition-all duration-1000"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black transition-all duration-1000"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className=" flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-6 md:space-y-0">
              <input onChange={e => prodDispatch({
                type: 'FILTER_BY_SEARCH',
                payload: e.target.value
              })} type="search" name="search" id="search" placeholder='Search here...' className='outline p-4 rounded' />
            </ul>

            <div className=" flex flex-col justify-center items-center mt-3 space-y-2 md:hidden">
              <Link
                to="/cart"
                className="inline-block w-[9em] px-4 py-2 text-center text-white bg-[#C54680] rounded-md shadow hover:bg-[#e33684]"
              >
                cart (items-{cart.length})
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <Link
            to="/cart"
            className={`px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-[#e33684]`}
          >
            cart (items-{cart.length})
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar