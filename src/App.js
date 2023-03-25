import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import PaymentScreen from './screens/PaymentScreen';
import MiniCart from './components/MiniCart';

import store from './redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
        </Stack.Navigator>
        <MiniCart />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
