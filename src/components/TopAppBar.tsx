import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { RootStackParamList } from '../navigation/navigator'

interface TopAppbarProps {
  title: string
  showBackButton?: boolean
  navigation?: NativeStackNavigationProp<RootStackParamList> | null
}

const TopAppbar: React.FC<TopAppbarProps> = ({ title, navigation = null, showBackButton = false }) => (
  <>
    <Appbar.Header>
      {showBackButton && (
        <Appbar.BackAction
          onPress={() => {
            navigation?.goBack()
          }}
        />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  </>
)

TopAppbar.defaultProps = {
  showBackButton: false,
  navigation: null,
}

export default TopAppbar
