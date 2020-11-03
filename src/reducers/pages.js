const pagesReducer = ( state = '', action ) =>{
    switch (action.type) {
        case 'UPDATETITLE':
                state = action.payload;
                return state;
            break;
    
        default:
            return state;
            break;
    }
}

export default pagesReducer;