import client from './client';
import userDetailsMock from './mocks/userDetails.mock.json';

/*
  User Authentication
*/
export const signInApi = ({ params }) => client().post('/sign-in', params);

/*
  User Details
*/
export const getUserApi = ({ params: { id } }) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          data: {
            success: true,
            data: userDetailsMock,
          },
        }),
      1000,
    );
  });
  //TODO: remove the upper chunck of code when the server endpoint is ready
  return client().get(`/users/${id}`);
};
