import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@ui-kitten/components'
import React, { memo } from 'react'
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const Item = () => {
  const theme = useTheme()
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 8,
        flexDirection: 'row',
        backgroundColor: "white",
        alignItems: 'center',
        borderRadius: 10,
      elevation:10,
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          height: windowWidth * 0.25,
          width: windowWidth * 0.35,
          borderRadius: 10,
          margin: 10,
        }}
        source={{
          uri: 'https://source.unsplash.com/random/?productivity,city',
        }}
      />
      <View style={{ marginLeft: 10, position: 'relative', flex: 1 }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            // top: 5,
            right: 10,
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 20,
            zIndex: 100,

          }}
        >
          <AntDesign name="heart" size={18} color="red" />
          {/* <AntDesign name="hearto" size={18} color="red" /> */}
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>Propaty name</Text>
        <Text style={{ fontSize: 16, color: theme['color-primary-600'] }}>
          $500
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="star" size={10} color="#E8CF5F" />
          <AntDesign name="star" size={10} color="#E8CF5F" />
          <AntDesign name="star" size={10} color="#E8CF5F" />
          <AntDesign name="star" size={10} color="#E8CF5F" />
          <AntDesign name="star" size={10} color="#E8CF5F" />
          <Text style={{ fontSize: 10, marginLeft: 5 }}>5 (53)</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              borderRightColor: '#E0E1E4',
              borderRightWidth: 1,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{ textAlign: 'center', color: '#757F8B', fontSize: 13 }}
            >
              3
            </Text>
            <Text
              style={{ textAlign: 'center', color: '#757F8B', fontSize: 13 }}
            >
              Beds
            </Text>
          </View>
          <View
            style={{
              borderRightColor: '#E0E1E4',
              borderRightWidth: 1,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{ textAlign: 'center', color: '#757F8B', fontSize: 13 }}
            >
              3
            </Text>
            <Text
              style={{ textAlign: 'center', color: '#757F8B', fontSize: 13 }}
            >
              Beds
            </Text>
          </View>
          <View
            style={{
              borderRightColor: '#E0E1E4',
              borderRightWidth: 1,
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={{ textAlign: 'center', color: '#757F8B', fontSize: 13 }}
            >
              3
            </Text>
            <Text
              style={{ textAlign: 'center', color: '#757F8B', fontSize: 13 }}
            >
              Beds
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default memo(Item)