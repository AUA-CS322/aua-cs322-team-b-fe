import client from './client';

/*
  User Authentication
*/
export const signInApi = ({ params }) => {
  // TODO: remove this when the api is ready
  // simulate successful sign in
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          data: {
            success: true,
            data: 'token',
          },
        }),
      1000,
    );
  });
  client().post('/sign-in', params);
};
