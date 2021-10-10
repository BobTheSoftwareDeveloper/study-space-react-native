import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ColorSchemeName } from 'react-native'
import HomeScreen from '../views/HomeScreen'
import SignUpScreen from '../views/SignUpScreen'

export type RootStackParamList = {
  Home: undefined
  SignUp: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation
