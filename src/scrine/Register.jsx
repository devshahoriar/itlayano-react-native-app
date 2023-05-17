import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Input, Button, useTheme } from '@ui-kitten/components'
const LogIn = ({ navigation }) => {
  const theme = useTheme()
  return (
    <View>
      <StatusBar style="auto" />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Text style={{ fontSize: 50, marginBottom: 0, width: '90%' }}>Hi!</Text>
        <Text
          style={{ fontSize: 20, marginBottom: 60, width: '90%', opacity: 0.5 }}
        >
          Create new account.
        </Text>
        <View style={{ width: '90%', gap: 10 }}>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" secureTextEntry />
        </View>
        <Button style={{ marginTop: 20, width: '90%' }}>Sign Up</Button>
        <View
          style={{
            alignItems: 'flex-end',
            width: '90%',
            marginTop: 10,
            marginBottom: 10,
          }}
        ></View>
        <View style={{ width: '90%', flexDirection: 'row' }}>
          <Text>Do you have account?</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: theme['color-primary-600'] }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LogIn
