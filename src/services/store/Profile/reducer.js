import {GET_WEATHER_DATA} from './types';

const initialState = {
  weatherData: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload,
      };
    default:
      return state;
  }
}
