import api from "../../utils/Api";
import handleError from "./errorHandler";
import {
    FAILURE,
    GET_ALL_POSTS,
    REQUEST,
    SUCCESS,
} from "./actionTypes";

export const getAllPosts = () => async (dispatch, getState) => {

    const { posts: { loading } } = getState();

    if (loading) {
        return;
    };

    dispatch({ type: GET_ALL_POSTS + REQUEST });

    try {
        const posts = await api.getAllPosts();
        console.log({ posts })

        dispatch({ type: GET_ALL_POSTS + SUCCESS, payload: posts })
    } catch (error) {
        dispatch(handleError({ errorCode: error.errorCode || 500, action: GET_ALL_POSTS }));
    };
};



