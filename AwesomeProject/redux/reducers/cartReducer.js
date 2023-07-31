const initialState = {
  selectedItems: {
    items: [],
    restaurantName: ""
  }
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");
        
        
        
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            items: [...state.selectedItems.items, action.payload],
            restaurantName: action.payload.restaurantName,
            image:action.payload.image
          }
        };
      }  else {
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.id !== action.payload.id
            ),
          ],
          restaurantName: action.payload.restaurantName,
          image:action.payload.image
        };
      }
      console.log(newState, "👉");
      return newState;
    }


    default:
      return state;
  }
}
