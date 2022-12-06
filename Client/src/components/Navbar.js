import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import logo from "../image/logo_ft.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { statusCart } from "../redux/actions/cartActions";
import Cart from "../Pages/Cart";

const Navbar = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.cartReducer.status);
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div>
      <header className="border-b-2 border-gray-200 lg:py-0 py-6">
        <nav className="w-full smallTablet:w-full smallTablet:ml-3 md:w-4/5 mx-auto h-36 lg:h-20 flex justify-center md:justify-between flex-wrap items-center">
          <div className="logo">
            <Link to="/">
              <img src={logo} className="logo"></img>
            </Link>
          </div>
          <div>
            <ul className="header-menu flex justify-between my-5">
              <Link to="/" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  HOME
                </li>
              </Link>
              <Link to="/about" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  ABOUT
                </li>
              </Link>
              <Link to="/shop" className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  SHOP
                </li>
              </Link>
              <Link to={"/blog"} className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  BLOG
                </li>
              </Link>
              <Link to={"/contact"} className="pr-7">
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  CONTACT
                </li>
              </Link>
              <Link to={"/admin"}>
                <li className="text-sm iphone5:text-xs md:text-base header-menu-item font-medium hover:text-yellow-500">
                  ADMIN
                </li>
              </Link>
            </ul>
          </div>
          <div className="header-info flex justify-center md:justify-end items-center font-medium">
            <div>
              <Link to={"/login"} className="login hover:text-yellow-500">
                Login
              </Link>
              <span> / </span>
              <Link to={"/register"} className="Register hover:text-yellow-500">
                Register
              </Link>
            </div>
            <div
              className="cart ml-5"
              onClick={() => dispatch(statusCart(true))}
            >
              <button className="cart">
                <span className="cart-quality text-sm text-black">
                  {cart.length}
                </span>
                <BsFillCartPlusFill className="text-2xl hover:text-yellow-500" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {status ? <Cart /> : ""}
    </div>
  );
};

export default Navbar;
