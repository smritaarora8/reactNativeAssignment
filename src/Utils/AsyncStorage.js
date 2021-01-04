/**
 * Async Storage Util
 */

import AsyncStorage from '@react-native-community/async-storage';

export const setAsync = async function setData(key, data) {
  try {
    let value = data;
    if (typeof value !== 'string') {
      value = JSON.stringify(data);
    }
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.warn('Async Error set error', error);
  }
};

export const getAsync = async function getData(key, isParsed = false) {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data && isParsed) {
      data = JSON.parse(data);
    }
    return data;
  } catch (error) {
    console.warn('Async Error get error', error);
  }
};

export const removeAsync = async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.warn('Async Error remove error', error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.warn('Async Error while clearing', error);
  }
  return {};
};
