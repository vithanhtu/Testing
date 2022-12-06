import {
  DETAIL_PRODUCTS,
  FILTER_CATEGORIES,
  FILTER_NEW_PRODUCT,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  SET_STATUS_PRODUCT,
} from "../constants";

const initState = {
  productsList: [],
  products: [],
  detailProducts: [],
  newProducts: [],
  statusShop: true,
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
        productsList: [...action.payload],
      };

    case FILTER_NEW_PRODUCT:
      return {
        ...state,
        newProducts: state.products.filter(
          (product) => product.newProduct === true
        ),
      };

    case FILTER_CATEGORIES:
      const cloneProduct = [...state.products];
      return {
        ...state,
        newProducts:
          action.payload === "All"
            ? cloneProduct.filter((product) => product.newProduct === true)
            : cloneProduct.filter(
                (product) => product.category === action.payload
              ),
      };

    case DETAIL_PRODUCTS:
      const detaiProduct = state.productsList.find(
        (prod) => prod._id === action.payload
      );
      return {
        ...state,
        detailProducts: detaiProduct,
      };

    case FILTER_PRODUCTS:
      if (action.payload == "Accessories" || "Cosmetic") {
        return {
          ...state,
          products: state.productsList.filter(
            (prod) => prod.category === action.payload
          ),
        };
      }
      const categoriesProducts = state.productsList.filter(
        (prod) =>
          prod.category === action.payload.cate &&
          prod.info === action.payload.item
      );
      if (categoriesProducts) {
        return {
          ...state,
          products: categoriesProducts,
        };
      }

    case SEARCH_PRODUCT:
      if (action.payload) {
        return {
          ...state,
          products: state.productsList.filter((item) => {
            return item.title
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }),
        };
      } else {
        return {
          ...state,
          products: [...state.productsList],
        };
      }

    case SET_STATUS_PRODUCT:
      return {
        ...state,
        products: [...state.productsList],
      };

    default:
      return state;
  }
};

export default ProductsReducer;
