import {
  GET_BERRYLIST,
  GET_BERRYLIST_WITH_DATA,
  GET_BERRY,
} from './actionTypes';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  IBerryListState,
  IBerryListWithDataState,
  IBerryState,
} from '../reducers/BerryReducers';

import api from '../../services/api/api';

export interface IBerryListGetAction {
  type: typeof GET_BERRYLIST;
  berryList: IResourceList;
}

export interface IBerryListWithDataGetAction {
  type: typeof GET_BERRYLIST_WITH_DATA;
  berryList: IBerry[];
}

export interface IBerryGetAction {
  type: typeof GET_BERRY;
  berry: IBerry;
}

export const getBerries: ActionCreator<
  ThunkAction<Promise<any>, IBerryListState, null, IBerryListGetAction>
> = (limit = '100', offset = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/berry/?limit=${limit}&offset=${offset}`);
      dispatch({
        berryList: response.data,
        type: GET_BERRYLIST,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
};

export const getBerriesWithData: ActionCreator<
  ThunkAction<
    Promise<any>,
    IBerryListWithDataState,
    null,
    IBerryListWithDataGetAction
  >
> = (limit = '100', offset = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/berry/?limit=${limit}&offset=${offset}`);
      const responsePromises = response.data.results.map(
        async (berryResult: IAPIResource) => {
          try {
            let berryData = await api.get(berryResult.url);
            return berryData.data;
          } catch (error) {
            console.error(error);
          }
        }
      );
      const berryDataList = await Promise.all(responsePromises);
      dispatch({
        berryList: berryDataList,
        type: GET_BERRYLIST_WITH_DATA,
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
