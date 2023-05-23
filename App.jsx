import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApplicationProvider } from '@ui-kitten/components'
import 'react-native-gesture-handler'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  AddPropaty,
  Chat,
  Faq,
  Filter,
  Home,
  HouseItem,
  Houses,
  LogIn,
  Privechi,
  Profile,
  Register,
  Status,
  Support,
} from './src/scrine'
import Boot from './src/scrine/Boot'
import { default as theme } from './src/utils/custom-theme.json'
import 'react-native-reanimated'
import 'react-native-gesture-handler'

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
            <Stack.Screen name="AddPropaty" component={AddPropaty} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Privechy" component={Privechi} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="Faq" component={Faq} />
            <Stack.Screen name="Howeses" component={Houses} />
            <Stack.Screen name="HouseItem" component={HouseItem} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ApplicationProvider>
  )
}

export default gestureHandlerRootHOC(App)
