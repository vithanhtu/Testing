import {
  ADD_TO_CART,
  COUNT_CART_ITEMS,
  GET_CARTS,
  REMOVE_CART_ITEMS,
  STATUS_CART,
} from "../constants";

const initState = {
  products: [],
  status: false,
  cart: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
        products: [...action.payload],
      };

    case STATUS_CART:
      return {
        ...state,
        status: action.payload,
      };

    case ADD_TO_CART:
      const cartItems = state.products.find(
        (prod) => prod._id === action.payload
      );
      console.log(action.payload);
      const duplicate = state.cart.find((item) => item._id === action.payload);
      if (duplicate) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item._id === action.payload
              ? { ...duplicate, qty: duplicate.qty + 1 }
              : item;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...cartItems, qty: 1 }],
        };
      }

    case COUNT_CART_ITEMS:
      const duplicateProd = state.cart.find(
        (item) => item._id === action.payload
      );
      if (duplicateProd.qty > 1) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item._id === action.payload
              ? { ...duplicateProd, qty: duplicateProd.qty - 1 }
              : item;
          }),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item._id === action.payload
              ? { ...duplicateProd, qty: (duplicateProd.qty = 1) }
              : item;
          }),
        };
      }

    case REMOVE_CART_ITEMS:
      const finProduct = state.products.find(
        (prod) => prod._id === action.payload
      );
      if (finProduct) {
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== action.payload),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
