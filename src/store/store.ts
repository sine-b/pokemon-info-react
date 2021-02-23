import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import {
  IBerryListState,
  IBerryListWithDataState,
  IBerryState,
  berryListReducer,
  berryReducer,
  berryListWithDataReducer,
} from './reducers/BerryReducers';

export interface IAppState {
  berryListState: IBerryListState;
  berryListWithDataState: IBerryListWithDataState;
  berryState: IBerryState;
}

const rootReducer = combineReducers<IAppState>({
  berryListState: berryListReducer,
  berryListWithDataState: berryListWithDataReducer,
  berryState: berryReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
