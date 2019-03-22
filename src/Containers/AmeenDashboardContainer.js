import {
    connect
} from 'react-redux'
import {
    fetch,
    fetchSuccess,
    fetchFailure,
    preFetch,
    updateFilter
} from '../Actions/DashboardActions';
import DashboardRedux from '../Components/AmeenDashboardRedux';
const mapStateToProps = (state) => {
    //console.log("mapState to props state", state)
    return {
        succeededFetching: state.dashboard.succeededFetching,
        failedFetching: state.dashboard.failedFetching,
        loading: state.dashboard.loading,
        users: state.dashboard.users,
        filter: state.dashboard.filter
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (newFilter) => {
            dispatch(updateFilter(newFilter));
        },
        fetch: () => {
            dispatch(preFetch());
            dispatch(fetch())
                .then((response) => {
                    //console.log("responseeeeeeeeeeeeee", response);
                    //console.log("usersLISSSSSSSSSSSSSSSSSSSST", response.payload.data.usersList);
                    // //console.log(response.data.status);
                    if (response.payload.data.status === 'true') {
                        dispatch(fetchSuccess(response.payload.data));
                        // Navigate to dashboard after saving the token in a cookie.
                    } else {
                        dispatch(fetchFailure());
                        //conosole.log(hey)
                        //Show wrong email/password
                    }
                })
                .catch((err) => {
                    console.log(err);
                    dispatch(fetchFailure());
                });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardRedux);