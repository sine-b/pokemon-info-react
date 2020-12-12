import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import thunk from 'redux-thunk';
import {
  IBerryListState,
  IBerryState,
  berryListReducer,
  berryReducer,
} from './reducers/BerryReducers';

export interface IAppState {
  berryListState: IBerryListState;
  berryState: IBerryState;
}

const rootReducer = combineReducers<IAppState>({
  berryListState: berryListReducer,
  berryState: berryReducer,
});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
