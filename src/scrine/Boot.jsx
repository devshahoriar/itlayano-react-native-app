import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '@ui-kitten/components'
const Boot = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView style={{ gap: 10, marginHorizontal: 10 }}>
        <Button onPress={() => navigation.navigate('Login')}>Login</Button>
        <Button onPress={() => navigation.navigate('Regsiter')}>
          Register
        </Button>
        <Button onPress={() => navigation.navigate('Status')}>Status</Button>
        <Button onPress={() => navigation.navigate('Home')}>Home</Button>
        <Button onPress={() => navigation.navigate('Profile')}>Profile</Button>
        <Button onPress={() => navigation.navigate('Filter')}>Filter</Button>
        <Button onPress={() => navigation.navigate('AddPropaty')}>
          AddPropaty
        </Button>
        <Button onPress={() => navigation.navigate('Chat')}>Chat</Button>
        <Button onPress={() => navigation.navigate('Support')}>Support</Button>
        <Button onPress={() => navigation.navigate('Privechy')}>
          Privechy
        </Button>
      </SafeAreaView>
    </View>
  )
}

export default Boot
