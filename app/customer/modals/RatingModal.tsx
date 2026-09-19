import React, { useState } from "react";
import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Star, X } from "lucide-react-native";
import { useRateMenu } from "@/app/shared/hooks/useMenu";
import { Circle } from "react-native-animated-spinkit";

type RatingModalProps = {
  visible: boolean;
  rating: number;
  onPress: (star:number) => void;

  onClose: () => void;
  id: string;
};

export default function RatingModal({
  rating,
  onPress,
  visible,
  onClose,
  id
}: RatingModalProps) {


  const {mutate , isPending, error} = useRateMenu(id  as string , rating)

  const handleRate = () => {

    console.log(rating)
    if (rating === 0) return;

    mutate({
      menuId: id,
      rating
    })

    onClose();


  };



  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.7}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={350}
      animationOutTiming={300}
      useNativeDriver
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
    >
      <View className="rounded-t-[32px] bg-card px-6 pb-8 pt-5">

        {/* Handle */}

        <View className="mb-5 h-1.5 w-12 self-center rounded-full bg-[#30333A]" />

        {/* Header */}

        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-poppins-bold text-xl text-white">
              Rate Your Order
            </Text>

            <Text className="mt-1 font-poppins-medium text-xs text-zinc-500">
              How was your experience?
            </Text>
          </View>

          <Pressable
            onPress={onClose}
            className="h-10 w-10 bg-primaryCard items-center justify-center rounded-full "
          >
            <X
              size={19}
              color="white"
              strokeWidth={2.3}
            />
          </Pressable>
        </View>

        {/* Stars */}

        <View className="mt-8 flex-row items-center justify-center">
          {[1, 2, 3, 4, 5].map((star , index) => {
            const selected = star <= rating;

            return (
              <Pressable
                key={index}
                onPress={() => onPress(star)}
                hitSlop={8}
                className="mx-2"
              >
                <Star
                  size={42}
                  color={
                    selected
                      ? "#FFB020"
                      : "#4A4D54"
                  }
                  fill={
                    selected
                      ? "#FFB020"
                      : "transparent"
                  }
                  strokeWidth={1.8}
                />
              </Pressable>
            );
          })}
        </View>

        {/* Rating Label */}

        <View className="mt-5 h-7 items-center justify-center">
          {rating > 0 && (
            <Text className="font-poppins-semibold text-sm text-[#FFB020]">
              {rating === 1
                ? "Poor"
                : rating === 2
                  ? "Could be better"
                  : rating === 3
                    ? "Good"
                    : rating === 4
                      ? "Great"
                      : "Excellent!"}
            </Text>
          )}
        </View>

        {/* Rate Button */}

        <Pressable
        
          disabled={rating === 0 || isPending}
          onPress={handleRate}
          className={`mt-7 h-[56px] flex-row items-center justify-center rounded-2xl ${
            rating > 0
              ? "bg-[#FF8A2B]"
              : "bg-[#25282E]"
          }`}
        >
         {
          isPending ?  (<>

            <Circle size={20} color="#000" />
          </>) : (<>
           <Star
            size={19}
            color={
              rating > 0
                ? "#050608"
                : "#60636A"
            }
            fill={
              rating > 0
                ? "#050608"
                : "transparent"
            }
            strokeWidth={2.4}
          />

          <Text
            className={`ml-2 font-poppins-bold text-base ${
              rating > 0
                ? "text-black"
                : "text-zinc-600"
            }`}
          >
            Rate Order
          </Text>
          </>)
         }
        </Pressable>

      </View>
    </Modal>
  );
}