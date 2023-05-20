import {
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../components/Shared/BackButton'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { darkGray, gray } from '../utils/th'
import { useTheme } from '@ui-kitten/components'
import { useRef } from 'react'

const ChatItem = ({ image, messate, side }) => {
  const theme = useTheme()
  return (
    <View
      style={{
        flexDirection: side ? 'row' : 'row-reverse',
        marginVertical: 10,
        marginHorizontal: 5,
      }}
    >
      <Image
        style={{ height: 30, width: 30, borderRadius: 30 }}
        resizeMode="cover"
        source={{
          uri: 'https://source.unsplash.com/random/?productivity,city',
        }}
      />
      <Text
        style={{
          fontSize: 17,
          marginHorizontal: 10,
          maxWidth: '70%',
          backgroundColor: (side ? gray  : theme['color-primary-400']),
          padding: 5,
          borderRadius: 5,
        }}
      >
        Shuvo
      </Text>
    </View>
  )
}

const Chat = ({ navigation }) => {
  const scrollView = useRef()
  const { width, height } = Dimensions.get('screen')
  return (
    <SafeAreaView style={{backgroundColor: "white"}}>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
      <KeyboardAvoidingView
        style={{
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            alignItems: 'center',
            marginTop:10
          }}
        >
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image
              style={{ height: 35, width: 35, borderRadius: 5 }}
              resizeMode="cover"
              source={{
                uri: 'https://source.unsplash.com/random/?productivity,city',
              }}
            />
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>User Name</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginBottom: 10,
            justifyContent: 'flex-end',
            maxHeight: '90%',
          }}
        >
          <ScrollView style={{ marginBottom: 20 }} ref={scrollView} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
           
           
            <ChatItem side />
            <ChatItem />
            <ChatItem side />
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: gray,
              justifyContent: 'space-between',
              paddingVertical: 5,
              paddingHorizontal: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}
          >
            <TextInput
              placeholder="Send Message..."
              style={{ flex: 1, fontSize: 20 }}
            />
            <TouchableOpacity style={{ marginRight: 5 }}>
              <FontAwesome name="send" size={20} color={darkGray} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Chat
