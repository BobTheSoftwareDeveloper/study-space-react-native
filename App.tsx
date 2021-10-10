import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Theme } from 'react-native-paper/lib/typescript/types'

import useCachedResources from './src/hooks/useCachedResources'
import useColorScheme from './src/hooks/useColorScheme'
// import Navigation from './navigation'
import Navigation from './src/navigation/navigator'

import { AuthProvider } from './src/contexts/AuthContext'

const theme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6473FD',
    accent: '#FEE1D8',
  },
}

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <AuthProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </AuthProvider>
        </PaperProvider>
      </SafeAreaProvider>
    )
  }
}
