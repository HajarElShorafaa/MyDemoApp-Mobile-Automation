export const LOGIN_USERS = {
     LOCKED: {
       username: 'alice@example.com',
       password: '10203040',
       errorMessage: 'Sorry, this user has been locked out.',
     },
     NO_MATCH: {
       username: '1@2.com',
       password: 'f-o-o',
       errorMessage: 'Provided credentials do not match any user in this service.',
     },
     NO_USER_DETAILS: {
       username: '',
       password: '',
       errorMessage: 'Username is required',
     },
     NO_PASSWORD: {
       username: 'bob@example.com',
       password: '',
       errorMessage: 'Password is required',
     },
     STANDARD: {
       username: 'bob@example.com',
       password: '10203040',
       errorMessage: ''
     },
   };
   