import {addItemToCart,removeItemFromCart} from './utils'
export const initialState = {
  basket: [],
  user: null,
  searchField :'',
  
};

export const getBasketTotal = (basket) => 
   basket.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
       
        basket : addItemToCart(state.basket, action.item)
      };
    
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: state.basket.filter(basket => basket.id !== action.item.id)
      }

    case "REMOVE_FROM_BASKET":
      
      return {
        ...state,
        basket: removeItemFromCart(state.basket, action.item)
      };
    
    case "CLEAR_BASKET":
      return{
        ...state,
        basket : action.item
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
      
    case "LOGOUT":
      return {
        ...state,
        user: action.user
      }
    case 'SEARCH':
    return {
      ...state,
      searchField : action.search
    }

    default:
      return state;
  }
};

export default reducer;
