import {
  Image,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import BackButton from '../components/Shared/BackButton'
import RenderHtml from 'react-native-render-html'

const source = {
  html: `<h1>App Privacy Policy</h1>

  <h2>Information Collection and Usage</h2>
  <p>Describe what personal information your app collects and how it is used.</p>

  <h2>Log Data</h2>
  <p>Explain if your app collects any log data, such as IP addresses or device information.</p>

  <h2>Cookies</h2>
  <p>Specify if your app uses cookies and how they are utilized.</p>

  <h2>Third-Party Services</h2>
  <p>Disclose any third-party services or integrations used in your app and how they handle user data.</p>

  <h2>Data Security</h2>
  <p>Explain the measures taken to protect user data and ensure its security.</p>

  <h2>Children's Privacy</h2>
  <p>State if your app is intended for children and how you comply with children's privacy regulations.</p>

  <h2>Changes to this Policy</h2>
  <p>Inform users about the possibility of policy updates and how they will be notified.</p>

  <h2>Contact Us</h2>
  <p>Provide contact information for users to reach out with privacy-related concerns or questions.</p>
`,
}

const Privechi = ({ navigation }) => {
  const { width, height } = Dimensions.get('screen')
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{ marginHorizontal: 10, marginTop: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity>
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, marginLeft: 10 }}>Privacy policy</Text>
        </View>
        <ScrollView style={{marginBottom: 30}}>
          <RenderHtml  contentWidth={width} source={source} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Privechi
