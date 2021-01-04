import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.margins}>
      <Button
        color="white"
        title="Tap to check weather details"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  margins: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 100,
  },
});
