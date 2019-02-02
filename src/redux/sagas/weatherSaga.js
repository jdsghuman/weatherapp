import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getWeather(action) {
  try {
    const searchString = action.payload.replace(/\s+/g, '+');
    const weatherList = yield call(axios.get, `/api/search?q=${searchString}`);
    yield dispatch({ type: 'STORE_WEATHER', payload: weatherList });
  } catch (error) {
    console.log(`Weather featch failed ${error}`)
  }
}

function* weatherSaga() {
  yield takeEvery('FETCH_WEATHER', getWeather);
}

export default weatherSaga;