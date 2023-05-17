import { useTheme } from '@ui-kitten/components'
import React from 'react'
import {
  Text,
  View,TouchableOpacity
} from 'react-native'
import { darkGray, gray } from '../../utils/th'
import { memo } from 'react'

const Box = ({ selected, title = '1' }) => {
  const theme = useTheme()
  return (
    <TouchableOpacity
      style={{
        borderColor: gray,
        borderWidth: 1,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 20,
        backgroundColor: selected ? theme['color-primary-700'] : 'white',
      }}
    >
      <Text style={{ color: selected ? 'white' : darkGray }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default memo(Box)