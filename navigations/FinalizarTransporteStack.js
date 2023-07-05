import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FinalizarTransporte from '../screens/FinalizarTransporte'

const Stack = createStackNavigator()

export default function FinalizarTransporteStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="FinalizarTransporte"
            component={FinalizarTransporte}
            options={{title: "Finalizar Transporte"}}
        />
    </Stack.Navigator>
  )
}