import React, {useState} from 'react';
import propTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import {getAsync} from '../../Utils/AsyncStorage';

import NetInfo from '@react-native-community/netinfo';

const Profile = ({getWeatherData, weatherForecast}) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [asyncData, setAsyncData]= useState('');
  let city = '';
  let country = '';
  let listData = [];
  let sectionListData = [];

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    NetInfo.addEventListener(async (state) => {
      if (!state.isConnected) {
        const asyncForecastData = await getAsync('weatherData', true);
        setAsyncData(asyncForecastData);
      } else {
        getWeatherData(enteredGoal);
      }
    });
  };

  if (weatherForecast) {
    city = weatherForecast.city.name;
    country = weatherForecast.city.country;
    listData = weatherForecast.list;
    listData.forEach((item) => {
      const mainData = item.main;
      let mainDataArray = [];
      for (var key in mainData) {
        if (mainData.hasOwnProperty(key)) {
          mainDataArray.push({label: key, value: mainData[key]});
        }
      }
      sectionListData.push({title: item.dt_txt, data: mainDataArray});
    });
  } else if (asyncData) {
    city = asyncData.city.name;
    country = asyncData.city.country;
    listData = asyncData.list;
    listData.forEach((item) => {
      const mainData = item.main;
      let mainDataArray = [];
      for (var key in mainData) {
        if (mainData.hasOwnProperty(key)) {
          mainDataArray.push({label: key, value: mainData[key]});
        }
      }
      sectionListData.push({title: item.dt_txt, data: mainDataArray});
    });
  }

  const renderItemList = (item) => {
    let labelString;
    const {label, value} = item;

    switch (label) {
      case 'temp':
        labelString = 'Temperature';
        break;
      case 'feels_like':
        labelString = 'Feels Like';
        break;
      case 'humidity':
        labelString = 'Humidity';
        break;
      case 'pressure':
        labelString = 'Pressure';
        break;
      case 'temp_max':
        labelString = 'Maximum Temperature';
        break;
      case 'temp_min':
        labelString = 'Minimum Temperature';
        break;
      case 'temp_kf':
        labelString = 'KF Temperature';
        break;
      case 'grnd_level':
        labelString = 'Ground Temperature';
        break;
      case 'sea_level':
        labelString = 'Sea Level';
        break;

      default:
        break;
    }
    if (
      label === 'temp' ||
      label === 'pressure' ||
      label === 'humidity' ||
      label === 'sea_level'
    ) {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.labelStyle}>{labelString}: </Text>
          <Text style={styles.valueStyle}>{value}</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your Zip Code here"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <TouchableOpacity onPress={addGoalHandler} style={styles.buttonColor}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      {city ? (
        <Text style={styles.cityData}>
          {city}, {country}
        </Text>
      ) : null}
      <SectionList style={styles.sectionListBottom}
        sections={sectionListData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => renderItemList(item)}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonColor: {
    width: '20%',
    backgroundColor: '#5ebde4',
    borderRadius: 4,
  },
  buttonText: {
    padding: 7,
  },
  labelStyle: {
    fontSize: 16,
    paddingBottom: 4,
    fontWeight: 'bold',
  },
  valueStyle: {
    fontSize: 16,
    paddingBottom: 4,
  },
  titleContainer: {
    borderTopWidth: 0.5,
    borderColor: 'black',
  },
  titleText: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  cityData: {
    marginVertical: 20,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionListBottom: {
    marginBottom: 100,
  },
});

Profile.propTypes = {
  weatherForecast: propTypes.any,
  getWeatherData: propTypes.func,
};
export default Profile;
