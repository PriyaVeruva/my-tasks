import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import countries from "../Reducers/countries";
import watchUser from "../Sagas/countriesSaga";
const SagaMiddleWare = createSagaMiddleware();
const configureStore = () => {
  const store = createStore(
    combineReducers({
      countries: countries,
    }),
    applyMiddleware(SagaMiddleWare)
  );
  SagaMiddleWare.run(watchUser);
  return store;
};
export default configureStore;
