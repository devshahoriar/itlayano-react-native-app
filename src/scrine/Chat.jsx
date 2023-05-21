import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useTheme } from '@ui-kitten/components'
import { useRef } from 'react'
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { darkGray, gray } from '../utils/th'

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
          fontSize: 15,
          marginHorizontal: 15,
          maxWidth: '70%',
          backgroundColor: side ? '#eee' : theme['color-primary-600'],
          padding: 15,
          borderTopLeftRadius: side ? 0 : 15,
          borderTopRightRadius: side ? 15 : 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          color: side ? '#555' : 'white',
          borderWidth: 1,
          borderColor: theme['color-primary-400'],
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid autem
        omnis, laboriosam laudantium voluptates quos blanditiis modi iure
        dolorum, sequi ad
      </Text>
    </View>
  )
}

const Chat = ({ navigation }) => {
  const scrollView = useRef()
  const { width, height } = Dimensions.get('screen')
  const theme = useTheme()
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ImageBackground
        resizeMode="repeat"
        style={{ width: '100%', height: '100%' }}
        source={{
          uri: 'https://www.toptal.com/designers/subtlepatterns/uploads/sun-pattern.png',
        }}
      >
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
              paddingHorizontal: 10,
              alignItems: 'center',
              paddingVertical: 15,
              backgroundColor: 'white',
            }}
          >
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <Image
                style={{ height: 35, width: 35, borderRadius: 5 }}
                resizeMode="cover"
                source={{
                  uri: 'https://source.unsplash.com/random/?productivity,city',
                }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                Jhon Dow
              </Text>
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
            <ScrollView
              style={{ marginBottom: 20 }}
              ref={scrollView}
              onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
              <ChatItem side />
              <ChatItem />
              <ChatItem side />
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                justifyContent: 'space-between',
                paddingVertical: 15,
                paddingHorizontal: 15,
                borderRadius: 15,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: theme['color-primary-600'],
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
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Chat
