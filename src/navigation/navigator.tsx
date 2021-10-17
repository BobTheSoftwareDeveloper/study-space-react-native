import React, { useContext } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ColorSchemeName } from 'react-native'
import LandingScreen from '../views/LandingScreen'
import SignUpScreen from '../views/SignUpScreen'
import BottomNavigation from '../components/BottomNavigation'
import StudySpacePage from '../views/StudySpacePage'
import ForgotPassword from '../views/ForgotPassword'
import { AuthContext } from '../contexts/AuthContext'

export type RootStackParamList = {
  LandingPage: undefined
  HomePage: undefined
  SignUpPage: undefined
  StudySpacePage: undefined
  ForgotPasswordPage: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const navigationRef = useNavigationContainerRef()
  const AuthObj = useContext(AuthContext)

  if (AuthObj.isLoading) {
    return null
  }

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!AuthObj.isLoggedIn ? (
          <>
            <Stack.Screen name="LandingPage" component={LandingScreen} />
            <Stack.Screen name="SignUpPage" component={SignUpScreen} />
            <Stack.Screen name="ForgotPasswordPage" component={ForgotPassword} />
            <Stack.Screen name="StudySpacePage" component={StudySpacePage} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomePage" component={BottomNavigation} />
            <Stack.Screen name="LandingPage" component={LandingScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
