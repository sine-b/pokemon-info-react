import {
  GET_CONTESTTYPELIST,
  GET_CONTESTTYPELIST_WITH_DATA,
  GET_CONTESTTYPE,
  GET_CONTESTEFFECTLIST,
  GET_CONTESTEFFECTLIST_WITH_DATA,
  GET_CONTESTEFFECT,
  GET_SUPERCONTESTEFFECTLIST,
  GET_SUPERCONTESTEFFECTLIST_WITH_DATA,
  GET_SUPERCONTESTEFFECT,
} from './actionTypes';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  IContestTypeListState,
  IContestTypeListWithDataState,
  IContestTypeState,
  IContestEffectListState,
  IContestEffectListWithDataState,
  IContestEffectState,
  ISuperContestEffectListState,
  ISuperContestEffectListWithDataState,
  ISuperContestEffectState,
} from '../reducers/ContestReducers';

import api from '../../services/api/api';

export interface IContestTypeListGetAction {
  type: typeof GET_CONTESTTYPELIST;
  contestTypeList: IResourceList;
}

export interface IContestTypeListWithDataGetAction {
  type: typeof GET_CONTESTTYPELIST_WITH_DATA;
  contestTypeList: IContestType[];
}

export interface IContestTypeGetAction {
  type: typeof GET_CONTESTTYPE;
  contestType: IContestType;
}

export interface IContestEffectListGetAction {
  type: typeof GET_CONTESTEFFECTLIST;
  contestEffectList: IResourceList;
}

export interface IContestEffectListWithDataGetAction {
  type: typeof GET_CONTESTEFFECTLIST_WITH_DATA;
  contestEffectList: IContestEffect[];
}

export interface IContestEffectGetAction {
  type: typeof GET_CONTESTEFFECT;
  contestEffect: IContestEffect;
}

export interface ISuperContestEffectListGetAction {
  type: typeof GET_SUPERCONTESTEFFECTLIST;
  superContestEffectList: IResourceList;
}

export interface ISuperContestEffectListWithDataGetAction {
  type: typeof GET_SUPERCONTESTEFFECTLIST_WITH_DATA;
  superContestEffectList: ISuperContestEffect[];
}

export interface ISuperContestEffectGetAction {
  type: typeof GET_SUPERCONTESTEFFECT;
  superContestEffect: ISuperContestEffect;
}

/* Contest Type Actions */
export const getContestTypes: ActionCreator<
  ThunkAction<
    Promise<any>,
    IContestTypeListState,
    null,
    IContestTypeListGetAction
  >
> = (limit = '100', offset = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(
        `/contest-type/?limit=${limit}&offset=${offset}`
      );
      dispatch({
        contestTypeList: response.data,
        type: GET_CONTESTTYPELIST,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
};

export const getContestTypesWithData: ActionCreator<
  ThunkAction<
    Promise<any>,
    IContestTypeListWithDataState,
    null,
    IContestTypeListWithDataGetAction
  >
> = (limit = '100', offset = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(
        `/contest-type/?limit=${limit}&offset=${offset}`
      );
      const responsePromises = response.data.results.map(
        async (contestTypeResult: IAPIResource) => {
          try {
            let contestTypeData = await api.get(contestTypeResult.url);
            return contestTypeData.data;
          } catch (error) {
            console.error(error);
          }
        }
      );
      let contestTypeDataList: IContestType[] = await Promise.all(
        responsePromises
      );
      contestTypeDataList = contestTypeDataList.filter((contestTypeObj) => {
        return !!contestTypeObj;
      });
      dispatch({
        contestTypeList: contestTypeDataList,
        type: GET_CONTESTTYPELIST_WITH_DATA,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getContestTypeByIdOrName: ActionCreator<
  ThunkAction<Promise<any>, IContestTypeState, null, IContestTypeGetAction>
> = (idOrName) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/contest-type/${idOrName}`);
      dispatch({
        resource: response.data,
        type: GET_CONTESTTYPE,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

/* Contest Effect Actions */
export const getContestEffects: ActionCreator<
  ThunkAction<
    Promise<any>,
    IContestEffectListState,
    null,
    IContestEffectListGetAction
  >
> = (limit = '100', offset = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(
        `/contest-effect/?limit=${limit}&offset=${offset}`
      );
      dispatch({
        contestEffectList: response.data,
        type: GET_CONTESTEFFECTLIST,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
};

export const getContestEffectsWithData: ActionCreator<
  ThunkAction<
    Promise<any>,
    IContestEffectListWithDataState,
    null,
    IContestEffectListWithDataGetAction
  >
> = (limit = '100', offset = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(
        `/contest-effect/?limit=${limit}&offset=${offset}`
      );
      const responsePromises = response.data.results.map(
        async (contestEffectResult: IAPIResource) => {
          try {
            let contestEffectData = await api.get(contestEffectResult.url);
            return contestEffectData.data;
          } catch (error) {
            console.error(error);
          }
        }
      );
      let contestEffectDataList: IContestEffect[] = await Promise.all(
        responsePromises
      );
      contestEffectDataList = contestEffectDataList.filter(
        (contestEffectObj) => {
          return !!contestEffectObj;
        }
      );
      dispatch({
        contestEffectList: contestEffectDataList,
        type: GET_CONTESTEFFECTLIST_WITH_DATA,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getContestEffectByIdOrName: ActionCreator<
  ThunkAction<Promise<any>, IContestEffectState, null, IContestEffectGetAction>
> = (idOrName) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/contest-effect/${idOrName}`);
      dispatch({
        resource: response.data,
        type: GET_CONTESTEFFECT,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

/* Super Contest Effect Actions */
export const getSuperContestEffects: ActionCreator<
  ThunkAction<
    Promise<any>,
    ISuperContestEffectListState,
    null,
    ISuperContestEffectListGetAction
  >
> = (limit = '100', offset = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(
        `/super-contest-effect/?limit=${limit}&offset=${offset}`
      );
      dispatch({
        superContestEffectList: response.data,
        type: GET_SUPERCONTESTEFFECTLIST,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
};

export const getSuperContestEffectsWithData: ActionCreator<
  ThunkAction<
    Promise<any>,
    ISuperContestEffectListWithDataState,
    null,
    ISuperContestEffectListWithDataGetAction
  >
> = (limit = '100', offset = '') => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(
        `/super-contest-effect/?limit=${limit}&offset=${offset}`
      );
      const responsePromises = response.data.results.map(
        async (superContestEffectResult: IAPIResource) => {
          try {
            let superContestEffectData = await api.get(
              superContestEffectResult.url
            );
            return superContestEffectData.data;
          } catch (error) {
            console.error(error);
          }
        }
      );
      let superContestEffectDataList: ISuperContestEffect[] = await Promise.all(
        responsePromises
      );
      superContestEffectDataList = superContestEffectDataList.filter(
        (superContestEffectObj) => {
          return !!superContestEffectObj;
        }
      );
      dispatch({
        superContestEffectList: superContestEffectDataList,
        type: GET_SUPERCONTESTEFFECTLIST_WITH_DATA,
      });
      console.log(superContestEffectDataList);
    } catch (error) {
      console.error(error);
    }
  };
};

export const getSuperContestEffectByIdOrName: ActionCreator<
  ThunkAction<
    Promise<any>,
    ISuperContestEffectState,
    null,
    ISuperContestEffectGetAction
  >
> = (idOrName) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.get(`/super-contest-effect/${idOrName}`);
      dispatch({
        resource: response.data,
        type: GET_SUPERCONTESTEFFECT,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
