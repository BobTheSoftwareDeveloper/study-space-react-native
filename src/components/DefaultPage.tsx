import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FEE1D8',
    padding: 20,
  },
})

const DefaultPage: React.FC = ({ children }) => <View style={styles.view}>{children}</View>

export default DefaultPage
