import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, RESET_INITIAL_STATE, SET_PRODUCTS } from './actionTypes';

const initialState = {
  products: [],
  cart: {},
};

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART || ADD_TO_CART:
      const { productId } = action.payload;
      const productIndex = state.findIndex((product) => product.id === productId);

      if (productIndex === -1) {
        return state;
      }

      const product = state[productIndex];

      return [
        ...state.slice(0, productIndex),
        {
          ...product,
          quantity: action.type === ADD_TO_CART ? (product.quantity || 0) + 1 : (product.quantity || 1) - 1,
        },
        ...state.slice(productIndex + 1),
      ];
		case SET_PRODUCTS: 
			return action.payload
    default:
      return state;
  }
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productId = action.payload;

      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };

    case REMOVE_FROM_CART:
      const removedProductId  = action.payload;

			if (state[removedProductId] === 1) {
				delete state[removedProductId];
				return state;
			} else if(!state[removedProductId]){
				return state;
			}

      return {
        ...state,
        [removedProductId]: state[removedProductId] - 1,
      };

		case RESET_INITIAL_STATE:
			const productsNoQty = initialState.products.map(({ quantity, ...item }) => item);
			return {
				...state,
				products: productsNoQty,
			};

    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
