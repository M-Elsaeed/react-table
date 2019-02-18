import { connect } from 'react-redux'
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from './PostsAction';
import PostsList from './PostsList';


const mapStateToProps = (state) => {
    return {
        postsList: state.postsList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts())
                .then((response) => {
                    !response.error ?
                        dispatch(fetchPostsSuccess(response.payload.data))
                        :
                        dispatch(fetchPostsFailure(response.payload.data));
                }
                );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);