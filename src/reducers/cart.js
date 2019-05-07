const initialState = {
    itemsCart: [
       
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                itemsCart: [...state.itemsCart, action.payload]
            }
         case 'REMOVE_FROM_CART':
            return {
                ...state,
                itemsCart: state.itemsCart.filter(itemCart => itemCart.id != action.payload)
            }
            break;
        default:
            return state;
    }
}