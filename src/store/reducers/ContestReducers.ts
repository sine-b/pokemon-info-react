import { Reducer } from 'redux';
import {
  IContestTypeListGetAction,
  IContestTypeListWithDataGetAction,
  IContestTypeGetAction,
  IContestEffectListGetAction,
  IContestEffectListWithDataGetAction,
  IContestEffectGetAction,
  ISuperContestEffectListGetAction,
  ISuperContestEffectListWithDataGetAction,
  ISuperContestEffectGetAction,
} from '../actions/ContestActions';
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
} from '../actions/actionTypes';

export interface IContestTypeListState {
  readonly contestTypeList: IResourceList;
}

export interface IContestTypeListWithDataState {
  readonly contestTypeList: IContestType[];
}

export interface IContestTypeState {
  readonly contestType: IContestType;
}

export interface IContestEffectListState {
  readonly contestEffectList: IResourceList;
}

export interface IContestEffectListWithDataState {
  readonly contestEffectList: IContestEffect[];
}

export interface IContestEffectState {
  readonly contestEffect: IContestEffect;
}

export interface ISuperContestEffectListState {
  readonly superContestEffectList: IResourceList;
}

export interface ISuperContestEffectListWithDataState {
  readonly superContestEffectList: ISuperContestEffect[];
}

export interface ISuperContestEffectState {
  readonly superContestEffect: ISuperContestEffect;
}

const initialContestTypeListState = {
  contestTypeList: {
    count: 0,
    next: '',
    previous: false,
  },
};
const initialContestTypeListWithDataState = {
  contestTypeList: [{ id: 0, name: '' }],
};
const initialContestTypeState = { contestType: { id: 0, name: '' } };

const initialContestEffectListState = {
  contestEffectList: {
    count: 0,
    next: '',
    previous: false,
  },
};
const initialContestEffectListWithDataState = {
  contestEffectList: [{ id: 0, name: '' }],
};
const initialContestEffectState = { contestEffect: { id: 0, name: '' } };

const initialSuperContestEffectListState = {
  superContestEffectList: {
    count: 0,
    next: '',
    previous: false,
  },
};
const initialSuperContestEffectListWithDataState = {
  superContestEffectList: [{ id: 0, name: '' }],
};
const initialSuperContestEffectState = {
  superContestEffect: { id: 0, name: '' },
};

/* Contest Type Reducers */
export const contestTypeListReducer: Reducer<
  IContestTypeListState,
  IContestTypeListGetAction
> = (state = initialContestTypeListState, action) => {
  switch (action.type) {
    case GET_CONTESTTYPELIST: {
      return {
        ...state,
        contestTypeList: action.contestTypeList,
      };
    }
    default:
      return state;
  }
};

export const contestTypeListWithDataReducer: Reducer<
  IContestTypeListWithDataState,
  IContestTypeListWithDataGetAction
> = (state = initialContestTypeListWithDataState, action) => {
  switch (action.type) {
    case GET_CONTESTTYPELIST_WITH_DATA: {
      return {
        ...state,
        contestTypeList: action.contestTypeList,
      };
    }
    default:
      return state;
  }
};

export const contestTypeReducer: Reducer<
  IContestTypeState,
  IContestTypeGetAction
> = (state = initialContestTypeState, action) => {
  switch (action.type) {
    case GET_CONTESTTYPE: {
      return {
        ...state,
        contestType: action.contestType,
      };
    }
    default:
      return state;
  }
};

/* Contest Effect Reducers */
export const contestEffectListReducer: Reducer<
  IContestEffectListState,
  IContestEffectListGetAction
> = (state = initialContestEffectListState, action) => {
  switch (action.type) {
    case GET_CONTESTEFFECTLIST: {
      return {
        ...state,
        contestEffectList: action.contestEffectList,
      };
    }
    default:
      return state;
  }
};

export const contestEffectListWithDataReducer: Reducer<
  IContestEffectListWithDataState,
  IContestEffectListWithDataGetAction
> = (state = initialContestEffectListWithDataState, action) => {
  switch (action.type) {
    case GET_CONTESTEFFECTLIST_WITH_DATA: {
      return {
        ...state,
        contestEffectList: action.contestEffectList,
      };
    }
    default:
      return state;
  }
};

export const contestEffectReducer: Reducer<
  IContestEffectState,
  IContestEffectGetAction
> = (state = initialContestEffectState, action) => {
  switch (action.type) {
    case GET_CONTESTEFFECT: {
      return {
        ...state,
        contestEffect: action.contestEffect,
      };
    }
    default:
      return state;
  }
};

/* Super Contest Effect Reducers */
export const superContestEffectListReducer: Reducer<
  ISuperContestEffectListState,
  ISuperContestEffectListGetAction
> = (state = initialSuperContestEffectListState, action) => {
  switch (action.type) {
    case GET_SUPERCONTESTEFFECTLIST: {
      return {
        ...state,
        superContestEffectList: action.superContestEffectList,
      };
    }
    default:
      return state;
  }
};

export const superContestEffectListWithDataReducer: Reducer<
  ISuperContestEffectListWithDataState,
  ISuperContestEffectListWithDataGetAction
> = (state = initialSuperContestEffectListWithDataState, action) => {
  switch (action.type) {
    case GET_SUPERCONTESTEFFECTLIST_WITH_DATA: {
      return {
        ...state,
        superContestEffectList: action.superContestEffectList,
      };
    }
    default:
      return state;
  }
};

export const superContestEffectReducer: Reducer<
  ISuperContestEffectState,
  ISuperContestEffectGetAction
> = (state = initialSuperContestEffectState, action) => {
  switch (action.type) {
    case GET_SUPERCONTESTEFFECT: {
      return {
        ...state,
        superContestEffect: action.superContestEffect,
      };
    }
    default:
      return state;
  }
};
