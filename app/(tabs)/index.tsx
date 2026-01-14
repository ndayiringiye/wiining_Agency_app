import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";

const Navbar = () => {
  return (
    <>
      <StatusBar style="dark" />

      <SafeAreaView className="bg-white">
        <View style={{ height: 60 }} className="flex-row items-center justify-between px-4">
          <Text className="text-blue-600 text-lg font-bold">
            LOGO
          </Text>

          <TouchableOpacity activeOpacity={0.7}>
            <AntDesign name="menu" size={24} color="#2563eb" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Navbar;
