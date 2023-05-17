import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import {
  TouchableOpacity
} from 'react-native'


const BackButton = () => {
  return( <TouchableOpacity
    style={{
      position: 'absolute',
      top: 45,
      left: 15,
      zIndex: 100,
      backgroundColor: 'white',
      padding: 6,
      borderRadius: 10,
      elevation: 10,
    }}
  >
    <AntDesign name="leftcircleo" size={23} color="#757F8B" />
  </TouchableOpacity>);
};

export default BackButton;