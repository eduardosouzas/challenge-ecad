import axiosInstance from '../lib/axios';
import { LIST_LEVY_TITLE } from '../actionTypes/levyTitle';
import Model from '../model/levyTitle';
import { updateState } from '.';

export const getDataLevyTitle = () => async (dispatch) => {
  const base = {
    type: LIST_LEVY_TITLE,
    payload: {},
    state: true,
  };

  const url = '/api/levy_title/';

  axiosInstance.get(url).then((response) => {
    base.payload = updateState(response);
    base.payload.data = this.viewsModelToModels(base.payload.data);
  }).catch((error) => {
    base.payload = (error);
  }).finally(() => {
    dispatch(base);
  });

  dispatch(base);
};

export const viewsModelToModels = (models) => {
  try {
    if (!models) return null;

    const views = [];

    models.forEach(async (model) => {
      const view = this.viewModelToModel(model);

      views.push(view);
    });

    return views;
  } catch (error) {
    throw new Error(`LevyMapper - viewsModelToModels = ${error}`);
  }
};

export const viewModelToModel = (view) => {
  try {
    if (!view) return null;

    const model = Object.assign({}, Model);

    model.id = view.id;
    model.competenceAt = view.competenceAt;
    model.levyValue = view.levyValue;
    model.installmentQt = view.installmentQt;
    model.cancelJustify = view.cancelJustify;
    model.user = view.user;
    model.systemUser = view.systemUser;
    model.installments = view.installments;
    model.level = view.level;
    return model;
  } catch (error) {
    throw new Error(`LevyMapper - viewModelToModel = ${error}`);
  }
};
