import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Listado from '../screens/Listado'

const Stack = createStackNavigator()

export default function ListadoStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Listado"
            component={Listado}
            options={{title: "Listado"}}
        />
    </Stack.Navigator>
  )
}