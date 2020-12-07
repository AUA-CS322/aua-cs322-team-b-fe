import client from './client';

/*
  User Authentication
*/
export const signInApi = ({ params }) => client().post('/sign-in', params);

/*
  User Details
*/
export const getUserApi = ({ params: { id } }, cancelToken) => {
  return client().get(`/users${id ? `/${id}` : ''}`, { cancelToken });
};

/*
  Search User
*/
export const searchUserApi = ({ params }, cancelToken) => {
  return client().get(`/users/search/${params.query}`, { cancelToken });
};

/*
  User Chart
*/
export const getUserChartApi = ({ params }, cancelToken) => {
  return client().get('/users/chart', { params, cancelToken });
};
