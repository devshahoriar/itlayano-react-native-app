import { Image, View, Dimensions, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
import Constants from 'expo-constants'
import { useState } from 'react'
import { Button } from '@ui-kitten/components/ui'

const Test = ({ navigation }) => {
  const [data, setData] = useState(null)

  const _addLinkingListener = () => {
    Linking.addEventListener('url', (e) => console.log('e', e))
  }

  const _removeLinkingListener = () => {
    Linking.removeEventListener('url', _handleRedirect)
  }

  const _openBrowserAsync = async () => {
    try {
      _addLinkingListener()
      let result = await WebBrowser.openBrowserAsync(
        
        `http://192.168.1.5:3000/?linkingUri=${Linking.createURL('/?')}`
      )
        console.log(`http://192.168.1.5:3000/?linkingUri=${Linking.createURL('/?')}`);
      if (Constants.platform.ios) {
        _removeLinkingListener()
      }
      console.log('46 result', result)
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <Button onPress={() => _openBrowserAsync()}>Shuvo</Button>
    </SafeAreaView>
  )
}

export default Test
