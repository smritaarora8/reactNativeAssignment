/* eslint-disable import/prefer-default-export */

import callWebService, {callTypes} from '../../../Utils/NetworkHandler';
import Config from '../../Config';
import {GET_WEATHER_DATA} from './types';
import {setAsync} from '../../../Utils/AsyncStorage';

export const getWeatherData = (code) => async (dispatch) => {
  try {
    const response = await callWebService(
      callTypes.get,
      '',
      `${Config.URL.weatherForecastApi}?zip=${code},in&appid=${Config.AppId}`,
    );
    if (response && response.data) {
      await setAsync('weatherData', response.data);

      dispatch({
        type: GET_WEATHER_DATA,
        payload: response.data,
      });
    } else {
      dispatch({
        type: GET_WEATHER_DATA,
        payload: '',
      });
    }
  } catch (error) {
    dispatch({
      type: GET_WEATHER_DATA,
      payload: '',
    });
  }
};
