import jsonPlaceHolder from '../api/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost());
    const userId = _.uniq(_.map(getState().post, 'userId'));

    userId.forEach(id => dispatch(fetchUser(id)))
};

export const fetchPost = () => async dispatch => {
    const respone = await jsonPlaceHolder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: respone.data
    })
};

// C1:Lap lai nhieu lan 1 phan tu
/*export const fetchUser = (id) => async dispatch => {
   const respone = await jsonPlaceHolder.get(`/users/${id}`);

   dispatch({
       type: 'FETCH_USER',
       payload: respone.data
   })
};*/

//C2:Su dung thu vien lodash(nhung khi update api cua id thi se ko hien thi cai moi dc)
/*export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const respone = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: respone.data
    })
});*/

//C3:su dung fetchPostAndUsers
export const fetchUser = (id) => async dispatch => {
    const respone = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: respone.data
    })
};