import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MemberResult from './pages/MemberResult';
import MemberSign from './pages/MemberSign';
import WelcomeScreen from './pages/WelcomeScreen';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='MemberSign' component={MemberSign}/>
        <Stack.Screen name='MemberResult' component={MemberResult}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;