import { capitalize } from "@/app/shared/utils/helpingFunctions";
import { IAddress } from "@/interface/IAddress";
import {
  BriefcaseBusiness,
  Home,
  MapPin,
  MessageSquareText,
  Phone,
  UserRound,
} from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type AddressCardProps = {
  address: IAddress;
  selected?: boolean;
  onPress?: () => void;
  onEdit?: () => void;
};

export default function AddressCard({
  address,
  selected = false,
  onPress,
  onEdit,
}: AddressCardProps) {
  const Icon =
    address.type === "home"
      ? Home
      : address.type === "work"
        ? BriefcaseBusiness
        : MapPin;

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      className={`overflow-hidden rounded-3xl border-0 p-5 ${
        selected
          ? "border-[#2E6B4F] bg-[#101A15]"
          : "border-[#1C2922] bg-[#0E1511]"
      }`}
    >
      {/* Header */}
      <View className="flex-row items-center">
        {/* Address Icon */}
        <View className="h-10 w-10 items-center justify-center rounded-xl bg-[#173025]">
          <Icon
            size={19}
            color="#63A987"
            strokeWidth={2}
          />
        </View>

        {/* Address Type + Name */}
        <View className="ml-3 flex-1">
          <Text className="font-poppins-semibold text-sm text-white">
            {capitalize(address.type)}
          </Text>

          <View className="mt-0.5 flex-row items-center">
            <UserRound
              size={11}
              color="#6F8278"
              strokeWidth={2}
            />

            <Text className="ml-1 font-poppins-medium text-[10px] text-[#82968B]">
              {capitalize(address.name)}
            </Text>
          </View>
        </View>
      </View>

      <View className="px-2">
          {/* Address */}
      <View className="mt-4">
        <View className="flex-row">
          <MapPin
            size={15}
            color="#5F8E78"
            strokeWidth={2}
            style={{
              marginTop: 2,
            }}
          />

          <View className="ml-2 flex-1">
            <Text
              numberOfLines={2}
              className="font-poppins-medium text-xs leading-5 text-[#D0DAD4]"
            >
              {address.address}
            </Text>

            <Text className="mt-0.5 font-poppins-medium text-[11px] text-[#718279]">
              {address.city}
            </Text>
          </View>
        </View>
      </View>

      {/* Phone */}
      <View className="mt-3 flex-row items-center">
        <Phone
          size={13}
          color="#5F8E78"
          strokeWidth={2}
        />

        <Text className="ml-2 font-poppins-medium text-[11px] text-[#82968B]">
          {address.phone_number}
        </Text>
      </View>
      </View>

      {/* Special Instruction */}
      {address.special_instruction?.trim() && (
        <View className="mt-4 rounded-2xl border border-[#1C3026] bg-[#111D17] px-3 py-2.5">
          <View className="flex-row items-center">
            <MessageSquareText
              size={14}
              color="#63A987"
              strokeWidth={2}
            />

            <Text className="ml-2 font-poppins-semibold text-[10px] uppercase tracking-wide text-[#63A987]">
              Special instruction
            </Text>
          </View>

          <Text
            numberOfLines={3}
            className="mt-1.5 font-poppins-medium text-[11px] leading-4 text-[#A8B8AF]"
          >
            {address.special_instruction}
          </Text>
        </View>
      )}
    </Pressable>
  );
}