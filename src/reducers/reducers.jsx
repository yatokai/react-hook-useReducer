import { ADD_ITEM, DEL_ITEM } from './../actions/actions';

export const myReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                itemList: [
                    ...state.itemList,
                    action.payload
                ]
            }
        case DEL_ITEM:
            return {
                itemList: [
                    ...state.itemList.slice(0, action.id),
                    ...state.itemList.slice(action.id + 1, state.itemList.length)
                ]
            }
        default: 
            return state;
    }
}