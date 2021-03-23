import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import {
  IBerryListState,
  IBerryListWithDataState,
  IBerryState,
  berryListReducer,
  berryListWithDataReducer,
  berryReducer,
} from './reducers/BerryReducers';
import {
  IContestTypeListState,
  IContestTypeListWithDataState,
  IContestTypeState,
  IContestEffectListState,
  IContestEffectListWithDataState,
  IContestEffectState,
  contestTypeListReducer,
  contestTypeListWithDataReducer,
  contestTypeReducer,
  contestEffectListReducer,
  contestEffectListWithDataReducer,
  contestEffectReducer,
  superContestEffectListReducer,
  superContestEffectListWithDataReducer,
  superContestEffectReducer,
  ISuperContestEffectListState,
  ISuperContestEffectListWithDataState,
  ISuperContestEffectState,
} from './reducers/ContestReducers';

export interface IAppState {
  berryListState: IBerryListState;
  berryListWithDataState: IBerryListWithDataState;
  berryState: IBerryState;

  contestTypeListState: IContestTypeListState;
  contestTypeListWithDataState: IContestTypeListWithDataState;
  contestTypeState: IContestTypeState;
  contestEffectListState: IContestEffectListState;
  contestEffectListWithDataState: IContestEffectListWithDataState;
  contestEffectState: IContestEffectState;
  superContestEffectListState: ISuperContestEffectListState;
  superContestEffectListWithDataState: ISuperContestEffectListWithDataState;
  superContestEffectState: ISuperContestEffectState;
}

const rootReducer = combineReducers<IAppState>({
  berryListState: berryListReducer,
  berryListWithDataState: berryListWithDataReducer,
  berryState: berryReducer,

  contestTypeListState: contestTypeListReducer,
  contestTypeListWithDataState: contestTypeListWithDataReducer,
  contestTypeState: contestTypeReducer,
  contestEffectListState: contestEffectListReducer,
  contestEffectListWithDataState: contestEffectListWithDataReducer,
  contestEffectState: contestEffectReducer,
  superContestEffectListState: superContestEffectListReducer,
  superContestEffectListWithDataState: superContestEffectListWithDataReducer,
  superContestEffectState: superContestEffectReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
