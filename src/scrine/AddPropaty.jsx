import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Body = ({ children }) => {
  return <View>{children}</View>
}

const AddPropaty = ({ navigation }) => {
  const [stape, setStape] = useState(0)

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       { text: 'YES', onPress: () => BackHandler.exitApp() },
  //     ])
  //     return true
  //   }

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction
  //   )

  //   return () => backHandler.remove()
  // }, [])

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" style="dark" />
      <SafeAreaView>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 20 }}>Add propaty</Text>
          <Body>
            <Text>Body</Text>
          </Body>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default AddPropaty
