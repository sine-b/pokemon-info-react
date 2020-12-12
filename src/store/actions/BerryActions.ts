import { GET_BERRYLIST, GET_BERRY } from './actionTypes';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IBerryListState, IBerryState } from '../reducers/BerryReducers';

import api from '../../services/api/api';

export interface IBerryListGetAction {
  type: typeof GET_BERRYLIST;
  berryList: IResourceList;
}

export interface IBerryGetAction {
  type: typeof GET_BERRY;
  berry: IBerry;
}

export const getBerries: ActionCreator<
  ThunkAction<Promise<any>, IBerryListState, null, IBerryListGetAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get('/berry/');
      dispatch({
        resource: response.data,
        type: GET_BERRYLIST,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getBerryByIdOrName: ActionCreator<
  ThunkAction<Promise<any>, IBerryState, null, IBerryGetAction>
> = (idOrName) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/berry/${idOrName}`);
      dispatch({
        resource: response.data,
        type: GET_BERRY,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
