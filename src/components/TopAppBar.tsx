import React from 'react'
import { Appbar } from 'react-native-paper'

interface TopAppbarProps {
  title: string
}

const TopAppbar: React.FC<TopAppbarProps> = ({ title }) => (
  <>
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  </>
)

export default TopAppbar
