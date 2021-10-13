import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomNavigation as BottomNavigationComponent } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import HomeScreen from '../views/HomeScreen'
import SearchPage from '../views/SearchPage'
import ProfileScreen from '../views/ProfileScreen'
import { RootStackParamList } from '../navigation/navigator'

type Props = NativeStackScreenProps<RootStackParamList>

const BottomNavigation: React.FC<Props> = ({ navigation, route }) => {
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
      renderScene={({ route: innerRoute, jumpTo }) => {
        switch (innerRoute.key) {
          case 'home':
            return <HomeScreen navigation={navigation} route={route} />
          case 'search':
            return <SearchPage navigation={navigation} route={route} />
          case 'profile':
            return <ProfileScreen navigation={navigation} route={route} />
          default:
            return <View />
        }
      }}
    />
  )
}

export default BottomNavigation
