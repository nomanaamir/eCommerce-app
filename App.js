
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
  Text,
  Button,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

// provider, store
import { Provider } from 'react-redux';
import store from './src/Store/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const { height, fontScale, width } = Dimensions.get('window')
import Feather from 'react-native-vector-icons/Feather';

// pages
import Home from './src/screens/home/index';
import Cart from './src/screens/cart/index';
import ProductDetails from './src/screens/product-details/index';
import CategoryDetails from './src/screens/category-details/index';
// components
// import Navbar from './src/components/navbar/index';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])
const Stack = createStackNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flexDirection: 'row', height: height / 8, backgroundColor: '#f7f7f7', justifyContent: 'space-between', paddingRight: 10, alignItems: 'center' }}>
        <View style={{
          height: height / 10, width: '50%',
          // backgroundColor: 'black'
        }}>
          <Image style={{ height: '100%', width: '100%' }} resizeMode="center" source={require('./assets/logo-removebg.png')} />
        </View>

        <View style={{
          height: height / 14, width: width / 7,
          // backgroundColor: 'black',
          borderWidth: 2,
          borderColor: '#cccccc',
          borderStyle: 'solid',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Feather name="user" color="#cccccc" size={30} />
        </View>

      </View>
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
      <DrawerItemList {...props} />

      <TouchableOpacity style={{
        height: height / 12,
        width: '90%',
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#c85657',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto'


      }}>
        <Text
          style={{
            fontSize: fontScale * 14,
            fontWeight: 'bold'
          }}
        >
          My Account
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
function bestSellers({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function MyDrawer() {
  return (

    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="home" component={Home} options={{
        headerShown: false, cardStyleInterpolator: forFade,
        drawerLabel: 'Home', drawerIcon: () => <Feather name="home" color="#c85657" size={28} />
      }} />
      <Drawer.Screen name="productDetails" component={ProductDetails} options={{
        drawerLabel: 'Shop',
        cardStyleInterpolator: forFade,
        drawerIcon: () => <Feather name="shopping-bag" color="#c85657" size={28} />
      }} />
      <Drawer.Screen name="categoryDetails" component={CategoryDetails} options={{
        drawerLabel: 'Categories',
        cardStyleInterpolator: forFade,
        drawerIcon: () => <Feather name="list" color="#c85657" size={28} />

      }} />
      <Drawer.Screen name="bestSellers" component={bestSellers} options={{
        drawerLabel: 'Best Sellers',
        cardStyleInterpolator: forFade,
        drawerIcon: () => <Feather name="gift" color="#c85657" size={28} />

      }} />

      <Drawer.Screen name="novelties" component={CategoryDetails} options={{
        drawerLabel: 'Novelties',
        cardStyleInterpolator: forFade,
        drawerIcon: () => <Feather name="gift" color="#c85657" size={28} />

      }} />

      <Drawer.Screen name="flashSale" component={bestSellers} options={{
        drawerLabel: 'Flash Sale',
        cardStyleInterpolator: forFade,
        drawerIcon: () => <Feather name="gift" color="#c85657" size={28} />

      }} />

      <Drawer.Screen name="discoveries" component={bestSellers} options={{
        drawerLabel: 'Discoveries',
        cardStyleInterpolator: forFade,
        drawerIcon: () => <Feather name="book-open" color="#c85657" size={28} />

      }} />

      <Drawer.Screen name="faq" component={bestSellers} options={{
        drawerLabel: 'FAQ',
        cardStyleInterpolator: forFade,
        drawerIcon: () => <Feather name="gift" color="#c85657" size={28} />

      }} />

      <Drawer.Screen name="cart" component={Cart} options={{
        headerShown: false, cardStyleInterpolator: forFade,
        drawerLabel: 'Cart',
        drawerIcon: () => <Feather name="shopping-cart" color="#c85657" size={28} />

      }} />

    </Drawer.Navigator>

  );
}
function App() {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true)
  }, [])


  return (
    <Provider store={store}>
      {/* <Navbar /> */}

      <NavigationContainer>
        <MyDrawer />
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