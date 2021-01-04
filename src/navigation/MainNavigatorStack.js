import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile/index';
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: 'Weather Details' }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default MainStackNavigator;
