import { AntDesign, Ionicons } from '@expo/vector-icons'
import {
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { gray } from '../utils/th'
import { useTheme } from '@ui-kitten/components'
import Carousel from 'react-native-reanimated-carousel'

const slides = [
  'https://source.unsplash.com/random/?productivity',
  'https://source.unsplash.com/random/?city',
  'https://source.unsplash.com/random/?man',
  'https://source.unsplash.com/random/?woman',
  'https://source.unsplash.com/random/?citys',
  'https://source.unsplash.com/random/?village',
]

const box = [
  {
    title: 'The Cozy Place',
    place: 'New York',
    star: 4.5,
    img: 'https://source.unsplash.com/random/?citys',
  },
  {
    title: 'The Cozy Place',
    place: 'New York',
    star: 4.5,
    img: 'https://source.unsplash.com/random/?village',
  },
]

const Houses = ({ navigation }) => {
  const theme = useTheme()
  const width = Dimensions.get('window').width
  return (
    <View>
      <SafeAreaView>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 30 }}>DIscover Howses</Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: gray,
              marginHorizontal: 0,
              paddingHorizontal: 5,
              paddingVertical: 5,
              marginTop: 15,
              borderRadius: 10,
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Ionicons
              name="search"
              size={24}
              color={theme['color-primary-700']}
            />
            <TextInput
              placeholder="Search"
              style={{ fontSize: 20, marginLeft: 5, paddingBottom: 2, flex: 1 }}
            />
          </View>
          <View>
            <Carousel
              loop
              width={width - 20}
              height={width / 2}
              autoPlay={true}
              data={slides}
              autoPlayInterval={1000}
              scrollAnimationDuration={1400}
              style={{ marginTop: 10 }}
              // onSnapToItem={(index) => console.log('current index:', index)}
              renderItem={({ index }) => (
                <View
                  style={{
                    flex: 1,
                    borderRadius: 20,
                    overflow: 'hidden',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={{ uri: slides[index] }}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode="cover"
                  />
                </View>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 25 }}>Most Popular</Text>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: theme['color-primary-800'],
                  }}
                >
                  View All
                </Text>
                <AntDesign
                  name="right"
                  size={18}
                  color={theme['color-primary-800']}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, flexDirection: 'row', gap: 10 }}>
            {box.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  elevation: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.img }}
                    style={{
                      width: '100%',
                      height: width * 0.3,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                  <View style={{ margin: 10, gap: 5 }}>
                    <Text style={{ fontSize: 17, fontWeight: '600' }}>
                      {item.title}
                    </Text>
                    <Text style={{ opacity: 0.5 }}>{item.place}</Text>
                    <View style={{ flexDirection: 'row', opacity: 0.5 }}>
                      <Text style={{ marginRight: 5 }}>({item.star})</Text>
                      <AntDesign name="star" size={17} color="yellow" />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Houses
