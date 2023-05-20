import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '@ui-kitten/components'
import {
  Dimensions,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { darkGray, gray } from '../utils/th'

const NavidationButton = ({ title, go, icon }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{ marginVertical: 15 }}
      onPress={() => navigation.navigate(go)}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {icon}
          <Text style={{ fontSize: 18, marginLeft: 15 }}>{title}</Text>
        </View>
        <MaterialIcons name="arrow-right" size={24} color={darkGray} />
      </View>
    </TouchableOpacity>
  )
}

const Status = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const th = useTheme()
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View
        style={{
          marginHorizontal: 15,
          height: windowHeight,
          paddingTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: gray,
            borderBottomWidth: 1,
            paddingBottom: 30,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: 'https://source.unsplash.com/random/?man' }}
              style={{
                width: windowWidth * 0.16,
                height: windowWidth * 0.16,
                borderRadius: 200,
              }}
              resizeMode="cover"
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: darkGray }}>Welcome</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 21 }}>
                Md. Shuvo Vai
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="logout" size={27} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 35 }}>
          <NavidationButton
            title="Transfer Money"
            go="Boot"
            icon={
              <MaterialIcons name="compare-arrows" size={20} color="black" />
            }
          />
          <NavidationButton
            title="Your Cards"
            go="Boot"
            icon={<FontAwesome5 name="credit-card" size={20} color="black" />}
          />
          <NavidationButton
            title="Profile"
            go="Profile"
            icon={<AntDesign name="profile" size={20} color="black" />}
          />
          <NavidationButton
            title="Settings"
            go="Boot"
            icon={<AntDesign name="setting" size={20} color="black" />}
          />
        </View>
        <TouchableOpacity>
          <View
            style={{
              marginTop: windowHeight * 0.17,
              backgroundColor: th['color-primary-200'],
              paddingVertical: 23,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}
          >
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={20}
              color={th['color-primary-800']}
            />
            <Text
              style={{
                color: th['color-primary-800'],
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              How we can help you?
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ position: 'absolute', bottom: 15, width: '100%' }}>
          <Text style={{ textAlign: 'center', fontSize: 18, color: darkGray }}>
            ©Company Name™
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Status
