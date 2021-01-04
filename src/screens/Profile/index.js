import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Profile from './Profile';
import {getWeatherData} from '../../services/store/Profile/actions';

const mapStateToProps = (state) => ({
  weatherForecast: state.weatherReport.weatherData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getWeatherData,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
