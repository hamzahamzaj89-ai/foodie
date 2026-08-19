import React from "react";
import { Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";
import { X } from "lucide-react-native";

type ConfirmModalProps = {
  visible: boolean;
  title: string;
  message: string;

  primaryText: string;
  secondaryText: string;

  onPrimaryPress: () => void;
  onSecondaryPress: () => void;

  onClose?: () => void;
};

export default function InfoModal({
  visible,
  title,
  message,
  primaryText,
  secondaryText,
  onPrimaryPress,
  onSecondaryPress,
  onClose,
}: ConfirmModalProps) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      backdropOpacity={0.75}
      backdropColor="#000000"
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      animationInTiming={280}
      animationOutTiming={220}
      useNativeDriver
      hideModalContentWhileAnimating
      style={{
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      {/* Modal Container */}

      <View
        className="w-full overflow-hidden rounded-3xl border-0 border-[#25282E] bg-card p-6"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 20,
          },
          shadowOpacity: 0.45,
          shadowRadius: 35,
          elevation: 20,
        }}
      >
        {/* Header */}

        <View className="flex-row items-start justify-between">
          <View className="flex-1 pr-4">
            <Text className="font-poppins-bold text-[22px] leading-7 text-white">
              {title}
            </Text>

            <Text className="mt-2 font-poppins-medium text-sm leading-6 text-zinc-400">
              {message}
            </Text>
          </View>

          {onClose && (
            <Pressable
              onPress={onClose}
              hitSlop={10}
              className="h-9 w-9 items-center justify-center rounded-xl bg-secondaryCard"
              android_ripple={{
                color: "rgba(255,255,255,0.08)",
              }}
            >
              <X
                size={18}
                color="#a1a1aa"
                strokeWidth={2.3}
              />
            </Pressable>
          )}
        </View>

        {/* Divider */}

        <View className="my-6 h-[1px] bg-border" />

        {/* Buttons */}

        <View className="flex-row gap-3">
          {/* Secondary */}

          <Pressable
            onPress={onSecondaryPress}
            className="h-[54px] flex-1 items-center justify-center rounded-2xl border-0 border-[#30333A] bg-primaryCard"
            android_ripple={{
              color: "rgba(255,255,255,0.06)",
            }}
          >


            <Text className="font-poppins-bold text-md text-zinc-300">
              {secondaryText}
            </Text>

             

          </Pressable>

          {/* Primary */}

          <Pressable
            onPress={onPrimaryPress}
            className="h-[54px] flex-1 items-center justify-center rounded-2xl bg-[#FF8A2B]"
            android_ripple={{
              color: "rgba(0,0,0,0.12)",
            }}
          >
            <Text className="font-poppins-bold text-md text-black">
              {primaryText}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}