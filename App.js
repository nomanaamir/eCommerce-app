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
  BackHandler,
  View,
} from 'react-native';

// provider, store
import { Provider } from 'react-redux';
import store from './src/Store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// pages
import Home from './src/screens/home/index';
import Cart from './src/screens/cart/index';
import ProductDetails from './src/screens/product-details/index';

// components
import Navbar from './src/components/navbar/index';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
function App(props) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])


  return (
    <Provider store={store}>
      {/* <View > */}
      <Navbar />

      <NavigationContainer>
        <Drawer.Navigator initialRouteName="home">
          <Drawer.Screen name="home" component={Home} options={{ headerShown: false, cardStyleInterpolator: forFade, drawerLabel: 'Home' }} />
          <Drawer.Screen name="productDetails" component={ProductDetails} options={{
            drawerLabel: 'Product Details',
            headerTintColor: '#e0474a', headerTitle: 'Back', headerTitleAlign: 'left', headerStyle: {
              backgroundColor: 'white',
              elevation: 0,
              shadowOpacity: 0,
            }, cardStyleInterpolator: forFade
          }} />
          <Drawer.Screen name="cart" component={Cart} options={{ headerShown: false, cardStyleInterpolator: forFade, drawerLabel: 'Cart', }} />

        </Drawer.Navigator>
      </NavigationContainer>


      {/* </View> */}
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
