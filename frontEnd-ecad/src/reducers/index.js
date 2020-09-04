import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import LevyTitleReducer from './levyTitleReducer';

export const reducers = asyncReducers => combineReducers({
  userState: UserReducer,
  levyTitleState: LevyTitleReducer,
  ...asyncReducers,
});
