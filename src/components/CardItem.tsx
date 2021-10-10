import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { StudySpaceType } from '../types/apiReponse'

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    height: 150,
    flexBasis: screenWidth / 2,
    // backgroundColor: 'white',
    flexGrow: 0,
  },
})

interface CardItemProps {
  data: StudySpaceType
}

const CardItem: React.FC<CardItemProps> = ({ data }) => (
  <View style={styles.card}>
    <Text>{data.name}</Text>
  </View>
)

export default CardItem
