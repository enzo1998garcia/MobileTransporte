import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import TransporteStack from './TransporteStack'
import ListadoStack from './ListadoStack'
import GastosyObservacionesStack from './GastosyObservacionesStack'
import FinalizarTransporteStack from './FinalizarTransporteStack'
import IniciarTransporteStack from './IniciarTransporteStack'

const Tab = createBottomTabNavigator()

export default function Navegacion() {
  const screenOpcion=(route, color) => {
    let iconName
    switch (route.name) {
      case "transporte":
        iconName="home-outline"
        break;
      case "iniciarTransporte":
        iconName="go-kart"
        break;
      case "finalizarTransporte":
        iconName="stop-circle"
        break;
      case "gastosyObserbaciones":
        iconName="account-alert-outline"
        break;
      case "listado":
        iconName="format-list-checkbox"
        break;
    }
    return(
      <Icon
        type='material-community'
        name={iconName}
        size={22}
        color={color}
      />
    )
  }

  return (
    <NavigationContainer>
        <Tab.Navigator
          initialRouteName='transporte'
          tabBarOptions={{
            inactiveTintColor: "#a17dc3",
            activeTintColor: "#7b24cb"
          }}
          screenOptions={({route }) => ({
            tabBarIcon: ({ color }) => screenOpcion(route, color)
          })}
        >
            <Tab.Screen
                name="transporte"
                component={TransporteStack}
                options={{title: "Inicio"}}
            />
            <Tab.Screen
                name="iniciarTransporte"
                component={IniciarTransporteStack}
                options={{title: "Iniciar Transporte"}}
            />
             <Tab.Screen
                name="finalizarTransporte"
                component={FinalizarTransporteStack}
                options={{title: "Finalizar Transporte"}}
            />
            <Tab.Screen
                name="gastosyObserbaciones"
                component={GastosyObservacionesStack}
                options={{title: "Gastos y Obserbaciones"}}
            />
            <Tab.Screen
                name="listado"
                component={ListadoStack}
                options={{title: "Viajes"}}
            />
          </Tab.Navigator>
    </NavigationContainer>
  )
}