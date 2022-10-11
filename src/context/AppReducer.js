import { SET_LOADING, SET_JOKE } from './_actions';

const AppReducer = (state, action) => {
    switch (action.type) {
        case SET_JOKE:
            return({
                ...state,
                question: action.payload.question,
                punchline: action.payload.punchline,
                loading: false
            })
        case SET_LOADING:
            return({
                ...state,
                loading: action.payload
            })
        default:
            return state;
    }
}

export default AppReducer;