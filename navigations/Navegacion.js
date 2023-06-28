import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Transporte from '../screens/Transporte'
import IniciarTransporte from '../screens/IniciarTransporte'
import GastosyObservaciones from '../screens/GastosyObservaciones'
import Listado from '../screens/Listado'
const Tab = createBottomTabNavigator()

export default function Navegacion() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="Transporte"
                component={Transporte}
            />
            <Tab.Screen
                name="Iniciar Transporte"
                component={IniciarTransporte}
            />
            <Tab.Screen
                name="Gastos y Obserbaciones"
                component={GastosyObservaciones}
            />
            <Tab.Screen
                name="Listado"
                component={Listado}
            />
          </Tab.Navigator>
    </NavigationContainer>
  )
}