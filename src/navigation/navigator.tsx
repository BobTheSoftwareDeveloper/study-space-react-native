import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ColorSchemeName } from 'react-native'
import LandingScreen from '../views/LandingScreen'
import SignUpScreen from '../views/SignUpScreen'
import HomePage from '../views/HomeScreen'
import BottomNavigation from '../components/BottomNavigation'

export type RootStackParamList = {
  LandingPage: undefined
  HomePage: undefined
  SignUpPage: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => (
  <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomePage" component={BottomNavigation} />
      <Stack.Screen name="LandingPage" component={LandingScreen} />
      <Stack.Screen name="SignUpPage" component={SignUpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation
