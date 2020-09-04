import { axiosInstance as axios, axiosLogin } from '../lib/axios';
import Config from '../config/environments';
import { viewModelToModel, viewsModelToModels } from '../mapper/user';
import {
  AUTH_USER, LIST_USER, POST_USER, PUT_USER_STATUS,
} from '../actionTypes/user';
import { updateState } from '.';


export const getDataUser = (data, state) => async (dispatch) => {
  const base = {
    type: LIST_USER,
    payload: {},
  };
  base.state = true;

  const url = `${Config.USER.URL}?${data}`;

  axios.get(url).then((response) => {
    base.payload = updateState(response);
    base.payload.data = viewsModelToModels(base.payload.data, state);
  }).catch((error) => {
    base.payload = (error);
  }).finally(() => {
    dispatch(base);
  });

  dispatch(base);
};

export const authDataUser = data => async (dispatch) => {
  const base = {
    type: AUTH_USER,
    state: true,
    payload: {},
  };

  const url = Config.USER.AUTH;

  axiosLogin.post(url, data).then((response) => {
    base.payload = updateState(response);
    base.payload.data = viewModelToModel(base.payload.data);
  }).catch((error) => {
    base.payload = error;
  }).finally(() => {
    dispatch(base);
    if (base.payload.data) window.location.reload();
  });

  dispatch(base);
};

export const setStatusAuth = data => async (dispatch) => {
  const base = {
    type: AUTH_USER,
    payload: { data, state: false },
  };

  dispatch(base);
};

export const postDataUser = data => async (dispatch) => {
  const base = {
    type: POST_USER,
    payload: {},
  };

  base.state = true;

  const url = Config.USER.URL;

  axios.post(url, data).then((response) => {
    base.payload = updateState(response);
  }).catch((error) => {
    base.payload = (error);
  }).finally(() => {
    dispatch(base);
  });

  dispatch(base);
};

export const putDataUser = data => async (dispatch) => {
  const base = {
    type: POST_USER,
    payload: {},
  };

  base.state = true;

  const url = `${Config.USER.URL}/${data.uuid}`;

  axios.put(url, data).then((response) => {
    base.payload = updateState(response);
  }).catch((error) => {
    base.payload = (error);
  }).finally(() => {
    dispatch(base);
  });

  dispatch(base);
};

export const putStatusUser = uuid => async (dispatch) => {
  const base = {
    type: PUT_USER_STATUS,
    payload: {},
  };
  base.state = true;
  const url = `${Config.USER.CHANGE_STATUS}/${uuid}`;
  axios.put(url).then((response) => {
    base.payload = updateState(response);
  }).catch((error) => {
    base.payload = (error);
  }).finally(() => {
    dispatch(base);
  });
  dispatch(base);
};
