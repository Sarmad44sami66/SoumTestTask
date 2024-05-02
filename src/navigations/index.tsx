import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsTree from 'screens/ProductsTree';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductsTree"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductsTree" component={ProductsTree} />
    </Stack.Navigator>
  );
};

export default HomeStack;
