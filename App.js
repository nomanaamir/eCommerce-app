/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  LogBox,
  BackHandler
} from 'react-native';

// provider, store
import { Provider } from 'react-redux';
import store from './src/Store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import Home from './src/screens/home/index';
import Cart from './src/screens/cart/index';
import ProductDetails from './src/screens/product-details/index';


LogBox.ignoreLogs(['Setting a timer for a long period of time'])
const Stack = createStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
function App() {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="home" component={Home} options={{ headerShown: false, cardStyleInterpolator: forFade, }} />
          <Stack.Screen name="productDetails" component={ProductDetails} options={{
            headerTintColor: 'white', headerTitle: 'Sign Up', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#687089',
              elevation: 0,
              shadowOpacity: 0,
            }, cardStyleInterpolator: forFade
          }} />
          <Stack.Screen name="cart" component={Cart} options={{
            headerTintColor: 'white', headerTitle: 'Sign In', headerTitleAlign: 'center', headerStyle: {
              backgroundColor: '#687089',
              elevation: 0,
              shadowOpacity: 0,
            }, cardStyleInterpolator: forFade
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    backgroundColor: 'red',
    flex: 1,
  }
});

export default App;
