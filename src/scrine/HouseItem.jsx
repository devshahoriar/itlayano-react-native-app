import { AntDesign } from '@expo/vector-icons'
import {
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native'
const HouseItem = ({ navigation }) => {
  const winHight = Dimensions.get('window').height
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <ImageBackground
        resizeMode="cover"
        style={{ height: winHight * 0.45 }}
        source={{
          uri: 'https://source.unsplash.com/random/?productivity,city',
        }}
      >
        <View
          style={{
            height: winHight * 0.4,
            // backgroundColor: 'blue',
            justifyContent: 'flex-end',
            paddingBottom: winHight * 0.05,
            marginHorizontal: 30,
          }}
        >
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <View>
              <Text style={{color: "white", fontWeight:'bold', fontSize: 30}}>Text Text</Text>
              <Text style={{color: "white", }}>Text Text</Text>
            </View>
            <View style={{flexDirection:'row', backgroundColor: "white", padding: 5, paddingHorizontal: 10, borderRadius: 30, alignItems:'center', justifyContent: 'center'}}>
              <Text style={{opacity: .6, marginRight: 5}}>(8.0)</Text>
              <AntDesign name="star" size={15} color="#F2B720" />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          height: winHight * 0.7,
          backgroundColor: 'white',
          zIndex: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          overflow: 'hidden',
        }}
      >
        <View>
          <TouchableOpacity>
            <Text>SHuvo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HouseItem
