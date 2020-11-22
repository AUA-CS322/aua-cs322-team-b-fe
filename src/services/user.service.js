import client from './client';

/*
  User Authentication
*/
export const signInApi = ({ params }) => client().post('/sign-in', params);
