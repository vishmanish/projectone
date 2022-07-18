import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login/Login';

const StackNavigator = () => {

    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
   </Stack.Navigator>
  )
}

export default StackNavigator
