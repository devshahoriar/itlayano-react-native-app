import React, { memo } from 'react'
import { StyleSheet, View } from 'react-native'

import { Radio, useTheme } from '@ui-kitten/components'
const RailSelected = () => {
  const theme = useTheme()
  return (
    <View
      style={{
        height: 4,
        backgroundColor: theme['color-primary-700'],
        borderRadius: 2,
      }}
    />
  )
}

export default memo(RailSelected)
