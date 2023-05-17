import { Entypo } from '@expo/vector-icons'
import { Datepicker, Input, useTheme } from '@ui-kitten/components'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PropatyRadio from '../components/forFilter/PropatyRadio'
import { darkGray, gray } from '../utils/th'

const TitleInput = ({ title, placeholder }) => {
  return (
    <View>
      <Text style={{ marginBottom: 5, fontSize: 18, color: darkGray }}>
        {title}
      </Text>
      <Input placeholder={placeholder} />
    </View>
  )
}

const Profile = () => {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const th = useTheme()
  const [gender, setGender] = useState('Male')
  const [bDate, setBDte] = useState(new Date())
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              width: '100%',
              marginTop: 20,
              position: 'relative',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: th['color-primary-600'],
                padding: 8,
                borderRadius: 300,
                borderColor: gray,
                borderWidth: 5,
                position: 'absolute',
                zIndex: 1,
                right: '30%',
              }}
            >
              <Entypo name="camera" size={24} color="white" />
            </TouchableOpacity>
            <Image
              source={{ uri: 'https://source.unsplash.com/random/?man' }}
              style={{
                width: windowWidth * 0.4,
                height: windowWidth * 0.4,
                borderRadius: 200,
                borderColor: gray,
                borderWidth: 10,
              }}
              resizeMode="cover"
            />
          </View>

          <View
            style={{
              marginHorizontal: 15,
              marginTop: 20,
              gap: 20,
              paddingBottom: 30,
            }}
          >
            <TitleInput title="Name" placeholder="Ex. MD. Shuvo Vai" />
            <TitleInput title="Address" placeholder="Ex. Bagha, Rajsahi" />
            <TitleInput title="Email" placeholder="Ex. shuvo@gnma.com" />
            <TitleInput title="Id" placeholder="Ex. 436456456" />
            <View>
              <Text style={{ marginBottom: 5, fontSize: 18, color: darkGray }}>
                Date of birth
              </Text>
              <Datepicker date={bDate} onSelect={(nd) => setBDte(nd)} />
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 18,
                  color: darkGray,
                  marginTop: 20,
                }}
              >
                Gender
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  gap: 30,
                }}
              >
                <PropatyRadio
                  active={gender}
                  set={setGender}
                  title="Male"
                  w="50%"
                />
                <PropatyRadio
                  active={gender}
                  set={setGender}
                  title="Female"
                  w="50%"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Profile
