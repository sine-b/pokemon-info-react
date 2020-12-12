import { Reducer } from 'redux';
import { IBerryListGetAction, IBerryGetAction } from '../actions/BerryActions';
import { GET_BERRYLIST, GET_BERRY } from '../actions/actionTypes';

export interface IBerryListState {
  readonly berryList: IResourceList;
}

export interface IBerryState {
  readonly berry: IBerry;
}

const initialBerryListState = {
  berryList: {
    count: 0,
    next: '',
    previous: false,
  },
};
const initialBerryState = { berry: { id: 0, name: '' } };

export const berryListReducer: Reducer<IBerryListState, IBerryListGetAction> = (
  state = initialBerryListState,
  action
) => {
  switch (action.type) {
    case GET_BERRYLIST: {
      return {
        ...state,
        berryList: action.berryList,
      };
    }
    default:
      return state;
  }
};

export const berryReducer: Reducer<IBerryState, IBerryGetAction> = (
  state = initialBerryState,
  action
) => {
  switch (action.type) {
    case GET_BERRY: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
