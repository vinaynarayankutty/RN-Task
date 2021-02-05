import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import EventFormScreen from '@screens/EventFormScreen/EventFormScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Stack.Screen name="EventForm" component={EventFormScreen} />
    </Stack.Navigator>
  );
}
