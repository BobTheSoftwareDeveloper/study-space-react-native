import React, { useContext } from 'react'
import { Alert, Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StudySpaceType } from '../types/apiReponse'
import { getNoiseLevelAcceptance } from '../utils/noiseLevel'
import { AuthContext } from '../contexts/AuthContext'
import { RootStackParamList } from '../navigation/navigator'

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 180,
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
    borderRadius: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
})

interface CardItemProps {
  data: StudySpaceType
  navigation: NativeStackNavigationProp<RootStackParamList>
}

type NoiseLevelColourType = 'red' | 'green'

const CardItem: React.FC<CardItemProps> = ({ data, navigation }) => {
  const firstImageUrl = data?.images?.[0] ?? ''
  const noiseLevelColour: NoiseLevelColourType =
    getNoiseLevelAcceptance(data.noiseLevel) === 'acceptable' ? 'green' : 'red'

  const AuthObj = useContext(AuthContext)

  return (
    <View style={styles.card}>
      {/* <View style={styles.image} /> */}
      <Pressable
        onPress={() => {
          AuthObj.setCurrentStudySpace(data)
          navigation.navigate('StudySpacePage')
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: firstImageUrl,
          }}
        />
      </Pressable>
      <Text style={styles.titleText}>{data.name}</Text>
      <Text style={{ color: 'black' }}>
        {`Noise level: `}
        <Text
          style={{
            color: noiseLevelColour,
          }}
        >
          {data.noiseLevel}
        </Text>
        {` dBA`}
      </Text>
      <Text>{`Occupancy: ${data.occupancyLevel} / ${data.maxOccupancyLevel}`}</Text>
    </View>
  )
}

export default CardItem
