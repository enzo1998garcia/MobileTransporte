import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Transporte from '../screens/account/Transporte'

const Stack = createStackNavigator()

export default function TransporteStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="transporte"
            component={Transporte}
            options={{title: "Transportes"}}
        />
    </Stack.Navigator>
  )
}