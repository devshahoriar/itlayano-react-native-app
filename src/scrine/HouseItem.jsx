import { AntDesign } from '@expo/vector-icons'
import {
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { gray } from '../utils/th'
import { useTheme } from '@ui-kitten/components'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

const TabBtn = ({ title, set, state}) => {
  const active = state === title
  const theam = useTheme()
  return (
    <TouchableOpacity
      onPress={() => set(title)}
      style={{
        paddingVertical: 25,
        paddingHorizontal: 25,
        borderBottomColor: theam['color-success-700'],
        borderBottomWidth: active ? 2 : 0,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '500' }}>{title}</Text>
    </TouchableOpacity>
  )
}

const HouseItem = ({ navigation }) => {
  const winHight = Dimensions.get('screen').height
  const [active, setActive] = useState('Description')
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar style='auto' />
      <ImageBackground
        resizeMode="cover"
        style={{ height: winHight * 0.35 }}
        source={{
          uri: 'https://source.unsplash.com/random/?productivity,city',
        }}
      >
        <View
          style={{
            height: winHight * 0.35 - 60,
            // backgroundColor: 'blue',
            justifyContent: 'flex-end',
            marginHorizontal: 30,
          }}
        >
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <View>
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}
              >
                Text Text
              </Text>
              <Text style={{ color: 'white' }}>Text Text</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ opacity: 0.6, marginRight: 5 }}>(8.0)</Text>
              <AntDesign name="star" size={15} color="#F2B720" />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          height: winHight * 0.65,
          backgroundColor: 'white',
          zIndex: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            // paddingHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: gray,
            borderBottomWidth: 1,
          }}
        >
          <TabBtn title="Description" set={setActive} state={active} />
          <TabBtn title="Review" set={setActive} state={active} />
          <TabBtn title="Direction" set={setActive} state={active} />
        </View>
        <View style={{marginHorizontal: 20}}>
          {active === 'Description' && (
            <Text style={{fontSize: 35}}>Description tab</Text>
          )}
          {active === 'Review' && (
            <Text  style={{fontSize: 35}}>Review tab</Text>
          )}
          {active === 'Direction' && (
            <Text  style={{fontSize: 35}}>Direction tab</Text>
          )}
        </View>
      </View>
    </View>
  )
}

export default HouseItem
