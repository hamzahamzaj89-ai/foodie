import { View, Text } from 'react-native'
import React from 'react'
import { Check, CircleCheckBig, Clock3, CookingPot, MapPin, PackageCheck } from 'lucide-react-native'

type OrderStatus =
   | "pending"
  | "confirmed"
  | "preparing"
  | "out_for_delivery"
  | "delivered";



interface StatusStep  {
  id: OrderStatus;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
};

const OrderStatusHeader = ({currentStep}: {currentStep: StatusStep}) => {

      const Icon = currentStep.icon


  return (
  <View className="items-center">
            {/* Status Circle */}

            <View
              className="h-[40px] w-[88px] items-center justify-center rounded-full"
              style={{
                backgroundColor: "#FF8A2B15",
              }}
            >
              <View className="h-[64px] w-[64px] items-center justify-center rounded-full bg-[#FF8A2B]">
                <Icon
                  size={34}
                  color="#050608"
                  strokeWidth={3}
                />
              </View>
            </View>

            {/* Status Title */}

            <Text className="mt-6 text-center font-poppins-bold text-[26px] text-white">
              {currentStep.title}
            </Text>

            {/* Description */}

            <Text className="mt-0 max-w-[280px] text-center font-poppins-medium text-sm leading-6 text-zinc-500">
              {currentStep.id === "pending"
                ? "Your order has been received and is waiting for confirmation."
                : currentStep.id === "confirmed"
                  ? "Your restaurant has accepted your order."
                  : currentStep.id === "preparing"
                    ? "Your food is being freshly prepared."
                    : currentStep.id ===
                        "out_for_delivery"
                      ? "Your rider is on the way with your order."
                      : "Your order has been delivered. Enjoy your meal!"}
            </Text>
          </View>

  )
}

export default OrderStatusHeader