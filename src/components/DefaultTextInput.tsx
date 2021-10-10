import React from 'react'
import { TextInput } from 'react-native-paper'

type TextInputProps = React.ComponentProps<typeof TextInput>

const DefaultTextInput: React.FC<TextInputProps> = (props) => <TextInput theme={{ roundness: 15 }} {...props} />

export default DefaultTextInput
