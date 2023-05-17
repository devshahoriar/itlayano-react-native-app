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
        <Text style={{ fontSize: 50, marginBottom: 0, width: '90%' }}>
          Welcome!
        </Text>
        <Text
          style={{ fontSize: 20, marginBottom: 60, width: '90%', opacity: 0.5 }}
        >
          Sign in to continue
        </Text>
        <View style={{ width: '90%', gap: 10 }}>
          <Input placeholder="Email" />
          <Input placeholder="Password" secureTextEntry />
        </View>
        <Button style={{ marginTop: 20, width: '90%' }}>Sign In</Button>
        <View
          style={{
            alignItems: 'flex-end',
            width: '90%',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity>
            <Text>Forget password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:"90%",flexDirection:'row'}}>
          <Text>Don't have account?</Text>
          <TouchableOpacity style={{marginLeft: 5}} onPress={()=> navigation.navigate("Regsiter")}>
            <Text style={{color: theme['color-primary-600']}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LogIn
