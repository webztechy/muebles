export const pagesReducer = ( state = '', action ) =>{
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


export const isloggedinReducer = ( state = 0, action ) =>{
    switch (action.type) {
        case 'ISLOGGEDIN':
                state = action.payload;
                return state;
            break;
    
        default:
            return state;
            break;
    }
}
