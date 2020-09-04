import { LIST_LEVY_TITLE } from '../actionTypes/levyTitle';

const BASE = {
  state: false,
  data: null,
};

const INITIAL_STATE = {
  listLevyTile: BASE,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_LEVY_TITLE:
      return { ...state, listLevyTile: action.payload };
    default:
      return state;
  }
};
