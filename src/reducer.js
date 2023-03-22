
const initialState = {
    list : [],
}

const reducer = (state = initialState, action) => {

switch(action.type) {

    case 'ADD_ITEM' :
            return{
                ...state,
                list: [...state.list,action.payload]
            };

    case 'DELETE_ITEM': 
          //  const newList = [...state.list];
          //  newList.splice(actio.payload,1);
            return{
                ...state,
                list : state.list.filter((item,index) => index !== action.payload)
              //  list : newList
            };
    case 'CLEAR_ALL':
        return{
            ...state,
            list : []
        };
    default:
            return state;
}

}

export default reducer;