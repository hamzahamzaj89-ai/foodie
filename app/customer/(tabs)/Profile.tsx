import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import {
  ChevronRight,
  Heart,
  LogInIcon,
  LogOut,
  MapPinned,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "../components/ProfileCard";
import ProfileItem from "../components/ProfileItem";
import StatusScreen from "../screens/StatusScreen";
import { router } from "expo-router";

export default function Profile() {


  return(<>
  
     <View className="flex-1 bg-black">
      
     <StatusScreen
     title="Your are not Signed In" 
     message="please click on button to sign in and see your profile "
     buttonTitle="Sign In"
     left={true}
     Icon={LogInIcon}
     onPress={() => router.push("/customer/(auth)/SignIn")}
     />
     </View>
  
  
  </>)


  return (
    <SafeAreaView className="flex-1 bg-[#050608]">
      <View className="flex-1 px-4 pt-0">
        {/* Header */}

        <Text className="text-3xl ml-2 font-poppins-bold text-white">
          My Profile
        </Text>

        {/* Profile Card */}

      

       <ProfileCard/>

        {/* Menu */}

        <View className="mt-8 gap-4">
          <ProfileItem
            Icon={MapPinned}
            title="Saved Addresses"
          />

          <ProfileItem
            Icon={Heart}
            title="Favorites"
          />

          <ProfileItem
            Icon={LogOut}
            title="Logout"
            danger
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

