import { AUTH_USER, POST_USER, LIST_USER, PUT_USER_STATUS } from '../actionTypes/user';

const BASE = {
  state: false,
  data: null,
};

const INITIAL_STATE = {
  statePostUser: BASE,
  listUser: BASE,
  authUser: BASE,
  userStatus: BASE,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authUser: action.payload };
    case POST_USER:
      return { ...state, statePostUser: action.payload };
    case LIST_USER:
      return { ...state, listUser: action.payload };
    case PUT_USER_STATUS:
      return { ...state, userStatus: action.payload };
    default:
      return state;
  }
};
