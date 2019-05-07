const initialState = {
    filterBy: 'Все',
    searchBy: '',
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_FILTER':
            return {
                ...state,
                filterBy: action.payload,
            };
        case 'CHANGE_SEARCH':
            return {
                ...state,
                searchBy: action.payload
            }    
        default:
            return state;
    }
}