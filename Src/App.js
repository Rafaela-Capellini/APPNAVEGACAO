import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "./views/HomeScreen";
import SobreScreen from "./views/SobreScreen";
import ProdutosScreen from "./views/ProdutosScreen";
import ContatoScreen from "./views/ContatoScreen";


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({color, size}) => ( <MaterialCommuityIcons name="home" color={color} size={size} /> ),}} />
        <Tab.Screen name="Sobre" component={SobreScreen} options={{ tabBarIcon: ({color, size}) => ( <MaterialCommuityIcons name="account-question" color={color} size={size} /> ),}} />
        <Tab.Screen name="Produtos" component={ProdutosScreen} options={{ tabBarIcon: ({color, size}) => ( <MaterialCommuityIcons name="basket" color={color} size={size} /> ),}} />
        <Tab.Screen name="Contato" component={ContatoScreen} options={{ tabBarIcon: ({color, size}) => ( <MaterialCommuityIcons name="phone" color={color} size={size} /> ),}} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;