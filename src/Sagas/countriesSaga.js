import {
  COUNTRIES_DATA,
  COUNTRIES_DATA_SUCCESS,
} from "../Actions/countriesActions";
import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
function* fetchData() {
  try {
    const result = yield call(axios.get, "https://restcountries.com/v2/all");
    yield put({ type: COUNTRIES_DATA_SUCCESS, data: result.data });
  } catch (error) {
    alert(error);
  }
}
function* watchUser() {
  yield takeEvery(COUNTRIES_DATA, fetchData);
}
export default watchUser;
