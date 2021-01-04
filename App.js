import 'react-native-gesture-handler';
import React from 'react';
import MainStackNavigator from './src/navigation/MainNavigatorStack';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import configStore from './src/services/store/configStore';

const store = configStore();

const App = () => (
  <View style={{flex: 1}}>
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  </View>
);

export default App;
