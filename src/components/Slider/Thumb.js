import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Radio, useTheme } from '@ui-kitten/components'
const THUMB_RADIUS_LOW = 12
const THUMB_RADIUS_HIGH = 16

const Thumb = ({ name }) => {
  const theme = useTheme()
  return (
    <View
      style={{
        width: THUMB_RADIUS_HIGH * 2,
        height: THUMB_RADIUS_HIGH * 2,
        borderRadius: THUMB_RADIUS_HIGH,
        borderWidth: 3,
        borderColor: theme['color-primary-700'],
        backgroundColor: '#ffffff',
      }}
    />
  )
}

const styles = StyleSheet.create({
  rootHigh: {},
})

export default memo(Thumb)
