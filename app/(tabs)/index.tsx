import {View, Text, StatusBar, TouchableHighlight} from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

const index = () => {
  return (
   <View>
     <StatusBar className="flex-row justify-between items-center p-4">
      <Text>LOGO</Text>
      <View><AntDesign name="menu" size={24} color="black" /></View>
     </StatusBar>
   </View>
  )
}

export default index
