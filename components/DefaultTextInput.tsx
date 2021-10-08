import React from 'react'
import { TextInputProps } from 'react-native'
import { TextInput } from 'react-native-paper'

const DefaultTextInput: React.FC<TextInputProps | any> = (props) => <TextInput theme={{ roundness: 15 }} {...props} />

export default DefaultTextInput
