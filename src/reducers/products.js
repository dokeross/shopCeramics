const initialState = {
    items: [],
    isReady: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
                isReady: true,
            };
            break;

        default:
            return state;    
    }
}