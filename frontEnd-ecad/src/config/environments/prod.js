export default {
  END_POINT: 'http://localhost:51154/api',
  EXPIRATION_AUTH: 2000, // Minuts
  EXPIRATION_FORM: 5, // Minuts
  DEBUG: {
    LEVEL: 'debug',
    AVAILABLE: true,
    LOCAL: true,
  },
  USER: {
    PVT: {
      GET_LOAD: '/user/pvt/load',
      POST_SAVEORUPDATE: '/user/pvt/saveorupdate',
      GET_LIST: '/user/pvt/list',
      DELETE: '/user/pvt/delete',
      AUTH: '/user/pvt/auth',
    },
    PUB: {
      GET_LOAD: '/user/pub/load',
    },
  },
};
