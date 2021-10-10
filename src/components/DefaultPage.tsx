import React from 'react'
import { View, StyleSheet } from 'react-native'

const outterStyles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FEE1D8',
    padding: 20,
  },
})

type DefaultPageType = React.ComponentProps<typeof View>

interface DefaultPageProps {
  // eslint-disable-next-line
  styles?: any
}

const DefaultPage: React.FC<DefaultPageProps> = ({ children, styles }) => (
  <View style={[outterStyles.view, styles ?? {}]}>{children}</View>
)

export default DefaultPage
