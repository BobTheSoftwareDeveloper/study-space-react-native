import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Theme } from 'react-native-paper/lib/typescript/types'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
import Navigation from './src/navigation/navigator'

import { AuthProvider, AuthContext } from './src/contexts/AuthContext'

const theme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6473FD',
    accent: '#FEE1D8',
  },
}

const App = () => {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const AuthObj = useContext(AuthContext)

  if (!isLoadingComplete || AuthObj.isLoading) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    )
  }
}

export default function Index() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
