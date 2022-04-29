import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPosts } from '../../redux/actions';
import { allPostsSelector } from '../../redux/selectors';
import Preloader from '../Preloader/Preloader';

import './PostList.css';

function PostList() {

    const dispatch = useDispatch();
    const { entities: posts, loading } = useSelector(allPostsSelector);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    if (!posts || loading) {
        return <div className="task-list">
            <Preloader />
        </div>
    }

    return (
        <div className="post-list">
            <ul className='post-list__list'>

            </ul>
        </div>
    );
};

export default PostList;