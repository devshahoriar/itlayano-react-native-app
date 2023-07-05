import { View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '@ui-kitten/components'
import { StatusBar } from 'expo-status-bar'
const Boot = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='white'  />
      <ScrollView>
        <View style={{ gap: 10, marginHorizontal: 10 }}>
          <Button onPress={() => navigation.navigate('Login')}>Login</Button>
          <Button onPress={() => navigation.navigate('Regsiter')}>
            Register
          </Button>
          <Button onPress={() => navigation.navigate('Status')}>Status</Button>
          <Button onPress={() => navigation.navigate('Home')}>Home</Button>
          <Button onPress={() => navigation.navigate('Profile')}>
            Profile
          </Button>
          <Button onPress={() => navigation.navigate('Filter')}>Filter</Button>
          <Button onPress={() => navigation.navigate('AddPropaty')}>
            AddPropaty
          </Button>
          <Button onPress={() => navigation.navigate('Chat')}>Chat</Button>
          <Button onPress={() => navigation.navigate('HouseItem')}>
            HouseItem
          </Button>
          <Button onPress={() => navigation.navigate('Howeses')}>Houses</Button>
          <Button onPress={() => navigation.navigate('Faq')}>Faq</Button>
          <Button onPress={() => navigation.navigate('Test')}>Test</Button>
          <Button onPress={() => navigation.navigate('Support')}>
            Support
          </Button>
          <Button onPress={() => navigation.navigate('Privechy')}>
            Privechy
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Boot
