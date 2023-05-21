import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@ui-kitten/components';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { gray } from '../utils/th';

const Item = ({ icon, title = 'This is title', onClick }) => {
  const theme = useTheme()
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: gray,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 5,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon}
        <Text style={{ fontSize: 18, marginLeft: 10 , color: theme['text-light-gray']  }}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color={theme['text-light-gray']}/>
    </TouchableOpacity>
  )
}

const Support = ({ navigation }) => {
  const { width, height } = Dimensions.get('window')
  const theme = useTheme()
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="support" size={width * 0.45} color="black" />
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            width: '70%',
            marginTop: 30,
            fontWeight:400,
          }}
        >
          Hello. How can we help you?
        </Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 40, gap: 20 }}>
        <Item
          icon={<MaterialIcons name="support-agent" size={24} color="black" />}
          title="Contact live support"
        />
        <Item
          icon={<MaterialCommunityIcons name="email" size={24} color="black" />}
          title="Sent us a message"
          onClick={() => navigation.navigate('Chat')}
        />
        <Item
          icon={<MaterialIcons name="help-outline" size={24} color='black' />}
          title="FAQs"
        />
      </View>
    </SafeAreaView>
  )
}

export default Support
