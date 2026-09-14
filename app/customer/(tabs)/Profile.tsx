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
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileItem from "../components/Profile/ProfileItem";
import StatusScreen from "../screens/StatusScreen";
import { router } from "expo-router";
import { useAppStore } from "@/app/shared/store/useAppStore";
import { useSignOut } from "@/app/shared/hooks/Auth/useSignOut";
import TabHeader from "../components/TabHeader";

export default function Profile() {


  const session = useAppStore((state) => state.session)



  



  const {mutate:onLogOut , isPending} = useSignOut()

 





    if (!session) {


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

    }


      const user = session.user











  return (
    <SafeAreaView className="flex-1 bg-[#050608]">
      <View className="flex-1 px-4 pt-0">
        {/* Header */}

         <TabHeader
         title={"My Profile"}
         description={"Manage your profile, Addresses, Likes"}
         />
        {/* Profile Card */}

      

       <ProfileCard name={user.user_metadata.full_name} email={user.email as string} />

        {/* Menu */}

        <View className="mt-8 gap-4">
          <ProfileItem
            Icon={MapPinned}
            title="Saved Addresses"
            onPress={() => router.push("/customer/UserSavedAddress")}
          />

          <ProfileItem
            Icon={Heart}
            title="Favorites"
          />

          <ProfileItem
            Icon={LogOut}
            title="Logout"
            danger
            onPress={onLogOut}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

