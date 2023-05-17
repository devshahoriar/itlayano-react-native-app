import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Filter, Home, LogIn, Profile, Register, Status } from './src/scrine'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
import { default as theme } from './src/utils/custom-theme.json'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import Boot from './src/scrine/Boot'
import {
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator
            initialRouteName="Boot"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={LogIn} />
            <Stack.Screen name="Regsiter" component={Register} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="Boot" component={Boot} />
            <Stack.Screen name="Status" component={Status} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ApplicationProvider>
  )
}

export default gestureHandlerRootHOC(App)
