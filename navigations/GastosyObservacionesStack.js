import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GastosyObservaciones from '../screens/GastosyObservaciones'

const Stack = createStackNavigator()

export default function GastosyObservacionesStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="GastosyObservaciones"
            component={GastosyObservaciones}
            options={{title: "Gastos y Observaciones"}}
        />
    </Stack.Navigator>
  )
}