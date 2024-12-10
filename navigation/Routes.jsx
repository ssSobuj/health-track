import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';
import Home from '../components/screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootMap from '../components/common/RootMap';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: {
              backgroundColor: '#16f6ec', // Set background color
            },
            headerTitle: 'New Account',
            headerTintColor: '#fff', // Set text and icon color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#16f6ec', // Set background color
            },
            headerTintColor: '#fff', // Set text and icon color
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="RootMap"
          component={RootMap}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
