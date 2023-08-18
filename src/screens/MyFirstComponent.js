import React, { useState } from 'react'
import { SafeAreaView, Text} from 'react-native';
const MyFirstComponent = () => {

  const [userName, setUserName] = useState('')
  
  return (
    <SafeAreaView>
        <Text>My first component</Text>
    </SafeAreaView>
    
  )
}

export default MyFirstComponent
