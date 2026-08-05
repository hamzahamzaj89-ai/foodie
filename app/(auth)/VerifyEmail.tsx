import { View, Text } from "react-native";
import * as Linking from "expo-linking";
import Button from "../shared/components/Button";
import StatusScreen from "../customer/screens/StatusScreen";

export default function VerifyEmailScreen() {
  return (
    <View className="flex-1 bg-black justify-center text-center px-5">


        <StatusScreen

          title="Verify Email"
          type="info"
          buttonTitle="Verify Email"
          message="Please Open Gmail To Verify E"
          
         left={true}
        
        
        />




    </View>
  );
}