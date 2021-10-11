import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomNavigation as BottomNavigationComponent } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import HomeScreen from '../views/HomeScreen'
import { RootStackParamList } from '../navigation/navigator'

type Props = NativeStackScreenProps<RootStackParamList>

const BottomNavigation: React.FC<Props> = ({ navigation }) => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      icon: 'home',
    },
    {
      key: 'search',
      title: 'Search',
      icon: 'magnify',
    },
    {
      key: 'profile',
      title: 'Profile',
      icon: 'account-outline',
    },
  ])

  return (
    <BottomNavigationComponent
      style={{
        flex: 1,
      }}
      navigationState={{
        index,
        routes,
      }}
      onIndexChange={setIndex}
      renderScene={({ route, jumpTo }) => {
        switch (route.key) {
          case 'home':
            return <HomeScreen />
          case 'search':
            return <HomeScreen />
          case 'profile':
            return <HomeScreen />
          default:
            return <View />
        }
      }}
    />
  )
}

export default BottomNavigation
