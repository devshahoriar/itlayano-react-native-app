import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import img1 from '../../assets/img/house.png'
import { Button } from '@ui-kitten/components'

const Home = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginTop: windowHeight * 0.08,
        }}
      >
        <Image
          source={img1}
          style={{ width: windowWidth * 0.5, height: windowHeight * 0.4 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 40 }}>Hello!</Text>
        <Text style={{ width: '90%', fontSize: 17, textAlign: 'center' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed
          provident eveniet?
        </Text>
        <Button
          style={{ width: '90%', marginTop: 15 }}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Button>
        <Button
          style={{ width: '90%', marginTop: 15 }}
          appearance="outline"
          onPress={() => navigation.navigate('Regsiter')}
        >
          Register
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Home
