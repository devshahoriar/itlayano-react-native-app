import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useTheme } from '@ui-kitten/components'
import React, { useRef } from 'react'
import {
  Dimensions,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import MapView from 'react-native-maps'

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { useState } from 'react'
import BackButton from '../components/Shared/BackButton'
import Sliderr from '../components/Slider'
import Box from '../components/forFilter/Box'
import Item from '../components/forFilter/Item'
import PropatyRadio from '../components/forFilter/PropatyRadio'
import { gray } from '../utils/th'
import { StatusBar as St } from 'expo-status-bar'

const Filter = () => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const scrHeight = Dimensions.get('screen').height
  const theme = useTheme()
  const [high, setHigh] = useState()
  const [low, setLow] = useState()
  const [shitIsV, setShetIsV] = useState(false)
  const [radioSelected, setRadioState] = useState('')

  const bottomSheetModalRef = useRef(null)

  const handlePresentModalPress = () => {
    if (shitIsV) {
      bottomSheetModalRef.current?.close()
    } else {
      bottomSheetModalRef.current?.present()
    }
  }
  const handleSheetChanges = (index) => {
    if (index === 0) {
      setShetIsV(true)
    } else {
      setShetIsV(false)
    }
  }

  return (
    <BottomSheetModalProvider>
      <St style='auto'/>
      <View
        style={{
          height: scrHeight - StatusBar.currentHeight,
          backgroundColor: 'white',
        }}
      >
        <BackButton />
        <TouchableOpacity
          onPress={handlePresentModalPress}
          style={{
            position: 'absolute',
            top: 45,
            right: 15,
            zIndex: 100,
            backgroundColor: 'white',
            padding: 6,
            borderRadius: 10,
            elevation: 10,
          }}
        >
          {shitIsV ? (
            <AntDesign name="close" size={23} color="#757F8B" />
          ) : (
            <Ionicons name="ios-filter-sharp" size={23} color="#757F8B" />
          )}
        </TouchableOpacity>

        <BottomSheetModal
          enableContentPanningGesture={false}
          ref={bottomSheetModalRef}
          // index={1}
          snapPoints={['80%']}
          onChange={handleSheetChanges}
          $modal = {true}
          
        >
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Filters</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <MaterialCommunityIcons
                name="home-search"
                size={30}
                color={theme['color-primary-700']}
                style={{
                  backgroundColor: '#E0E1E4',
                  padding: 8,
                  borderRadius: 10,
                }}
              />
              <Text style={{ color: '#757F8B', width: '70%', marginLeft: 10 }}>
                Please fill your information to help us to fing filtering good
                apartment for you
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 20, marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Rooms</Text>
          </View>
          <View style={{ height: 60, marginTop: 10 }}>
            <BottomSheetScrollView
              style={{
                flexDirection: 'row',
                paddingLeft: 10,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <PropatyRadio
                title="Apartment"
                set={setRadioState}
                active={radioSelected}
              />
              <PropatyRadio
                title="House"
                set={setRadioState}
                active={radioSelected}
              />
              <PropatyRadio
                title="Villa"
                set={setRadioState}
                active={radioSelected}
              />
              <PropatyRadio
                title="Office"
                set={setRadioState}
                active={radioSelected}
              />
              <PropatyRadio
                title="Land"
                set={setRadioState}
                active={radioSelected}
              />
              <PropatyRadio
                title="Other"
                set={setRadioState}
                active={radioSelected}
              />
            </BottomSheetScrollView>
          </View>
          <View style={{ marginTop: 20, marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Rooms</Text>
          </View>
          <View style={{ height: 60 }}>
            <BottomSheetScrollView
              directionalLockEnabled
              style={{
                flexDirection: 'row',
                paddingLeft: 10,
                marginTop: 10,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {Array(7)
                .fill(1)
                .map((_, i) => (
                  <Box key={i} selected={i === 1} />
                ))}
            </BottomSheetScrollView>
          </View>
          <View style={{ marginTop: 20, marginLeft: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Tenants</Text>
          </View>
          <View style={{ height: 60 }}>
            <BottomSheetScrollView
              directionalLockEnabled
              style={{
                flexDirection: 'row',
                paddingLeft: 10,
                marginTop: 10,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Box selected />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </BottomSheetScrollView>
          </View>
          <View style={{ width: '100%' }}>
            <View style={{ marginTop: 20, marginLeft: 15 }}>
              <Text style={{ fontWeight: 'bold' }}>Range</Text>
            </View>
            <View style={{ marginHorizontal: 15 }}>
              <Sliderr setL={setLow} setH={setHigh} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              gap: 20,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                backgroundColor: gray,
                paddingVertical: 14,
                fontSize: 25,
                borderRadius: 15,
              }}
            >
              {low}
            </Text>
            <Text style={{ paddingVertical: 14, fontSize: 25 }}>-</Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                backgroundColor: gray,
                paddingVertical: 14,
                fontSize: 25,
                borderRadius: 15,
              }}
            >
              {high}
            </Text>
          </View>
        </BottomSheetModal>

        <MapView
          initialRegion={{
            latitude: 51.5285262,
            longitude: -0.2664042,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{ width: '100%', height: windowHeight * 0.4 }}
        />

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: gray,
            marginHorizontal: 10,
            paddingHorizontal: 5,
            paddingVertical: 5,
            marginTop: 10,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Ionicons
            name="search"
            size={24}
            color={theme['color-primary-700']}
          />
          <TextInput
            placeholder="Search"
            style={{ fontSize: 20, marginLeft: 5, paddingBottom: 2, flex: 1 }}
          />
        </View>
        <ScrollView style={{ backgroundColor: 'white' }}>
          <Item />
          <Item />
          <Item />
          <Item />
        </ScrollView>
      </View>
    </BottomSheetModalProvider>
  )
}

export default Filter
