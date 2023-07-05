import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import IniciarTransporte from '../screens/IniciarTransporte'

const Stack = createStackNavigator()

export default function IniciarTransporteStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Iniciar Transporte"
            component={IniciarTransporte}
            options={{title: "Iniciar Transporte"}}
        />
    </Stack.Navigator>
  )
}