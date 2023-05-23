import { useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import { SafeAreaView } from 'react-native-safe-area-context'
import { gray } from '../utils/th'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@ui-kitten/components'

const ItemFaq = ({ title, content, k, active, set }) => {
  const theme =useTheme()
  return (
    <View
      style={{
        borderBottomColor: gray,
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: active ? theme['color-primary-100'] : null,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          if (active) {
            set(-1)
          } else {
            set(k)
          }
        }}
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', width: '80%',color : theme['color-primary-700'] }}>
          {title}
        </Text>
        {
          active ? <AntDesign name="up" size={24} color={theme['color-primary-700']} /> : <AntDesign name="down" size={24} color={theme['color-primary-700']} />
        }
      </TouchableOpacity>
      {active && <Text style={{ fontSize: 15, marginTop: 10 }}>{content}</Text>}
    </View>
  )
}

const faqss = [
  {
    title: 'What is the purpose of this product?',
    content:
      'The purpose of this product is to provide a solution for.lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'How does this product work?',
    content:
      'This product works by lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Is this product suitable for everyone?',
    content:
      'This product is designed to be suitable for lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'What are the key features of this product?',
    content:
      'The key features of this product include lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'How can I get started with this product?',
    content:
      'To get started with this product, you need to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Can I customize this product to my needs?',
    content:
      'Yes, this product allows customization according to user needs. You can lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'What kind of support is available for this product?',
    content:
      'We provide  for assistance with this product. You can reach out to us for lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Is there a refund policy?',
    content:
      'Yes, we have a refund policy in place. Please refer to our lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'How can I contact customer support?',
    content:
      'You can contact our customer support team by lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Are software updates provided?',
    content:
      'Yes, we provide regular software updates to enhance the performance and add new features to this product.',
  },
]

const Faq = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState(-1)

  return (
    <View style={{height: "100%", backgroundColor: "white"}}>
      <SafeAreaView style={{ marginTop: 10 }}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
          FAQ
        </Text>
        <ScrollView style={{ marginBottom: 100 }}>
          {faqss.map((faq, index) => (
            <ItemFaq
              title={faq.title}
              content={faq.content}
              key={index}
              k={index}
              active={activeSections === index}
              set={setActiveSections}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
    </View>
  )
}

export default Faq
