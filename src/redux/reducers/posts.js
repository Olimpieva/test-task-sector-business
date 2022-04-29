import { REQUEST, SUCCESS, FAILURE, GET_ALL_POSTS } from "../actions/actionTypes";

const initialState = {
    entities: null,
    settings: {
        page: 1,
    },
    loading: false,
    error: null,
};

const Tasks = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_POSTS + REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ALL_POSTS + SUCCESS:
            return { ...state, entities: action.payload, loading: false, error: null };
        case GET_ALL_POSTS + FAILURE:
            return { ...state, entities: null, loading: false, error: action.payload };
        default:
            return state;
    };
};

export default Tasks;