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
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 100,
    width: screenWidth / 2 - 20,
    backgroundColor: 'white',
  },
})

interface CardItemProps {
  data: StudySpaceType
}

const CardItem: React.FC<CardItemProps> = ({ data }) => (
  <View style={styles.card}>
    <View style={styles.image} />
    <Text>{data.name}</Text>
    <Text>{data.location.latitude}</Text>
  </View>
)

export default CardItem
