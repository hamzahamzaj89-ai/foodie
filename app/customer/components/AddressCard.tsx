import { capitalize } from "@/app/shared/utils/helpingFunctions";
import { IAddress } from "@/interface/IAddress";
import { BriefcaseBusiness, Check, ChevronRight, Home, MapPin, UserRound } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";




type AddressCardProps = {
  address: IAddress;
  selected: boolean;
  onPress: () => void;
  onEdit: () => void;
};

export default function AddressCard({
  address,
  selected,
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
      className={`mb-4 overflow-hidden rounded-3xl border p-4 ${
        selected
          ? "border-[#FF8A2B] bg-[#17130F]"
          : " bg-card"
      }`}
      android_ripple={{
        color: "rgba(255,138,43,0.08)",
      }}
    >
      {/* Top */}

      <View className="flex-row items-center">
        {/* Icon */}

        <View
          className={`h-11 w-11 items-center justify-center rounded-2xl ${
            selected
              ? "bg-[#FF8A2B]/15"
              : "bg-primaryCard"
          }`}
        >
          <Icon
            size={21}
            color={
              selected
                ? "#FF8A2B"
                : "#A1A1AA"
            }
            strokeWidth={2.2}
          />
        </View>

        {/* Title */}

        <View className="ml-3 flex-1">
          <Text className="font-poppins-semibold text-base text-white">
            {capitalize(address.type )}
          </Text>

          <View className="mt-0.5 flex-row items-center">
            <UserRound
              size={11}
              color="#71717A"
              strokeWidth={2}
            />

            <Text className="ml-1 font-poppins-medium text-[10px] text-zinc-500">
              {capitalize(address.name)}
            </Text>
          </View>
        </View>

        {/* Selection */}

        <View
          className={`h-6 w-6 items-center justify-center rounded-full border-2 ${
            selected
              ? "border-[#FF8A2B] bg-[#FF8A2B]"
              : "border-[#3F4147]"
          }`}
        >
          {selected && (
            <Check
              size={14}
              color="#050608"
              strokeWidth={3}
            />
          )}
        </View>
      </View>

      {/* Address */}

      <View className="mt-4 rounded-2xl bg-[#0D0F12] px-4 py-3">
        <Text
          numberOfLines={2}
          className="font-poppins-medium text-xs leading-5 text-zinc-300"
        >
          {address.address}
        </Text>

        <Text className="mt-1 font-poppins-medium text-xs text-zinc-500">
          {address.city}
        </Text>
      </View>

      {/* Bottom */}

      <View className="mt-3 flex-row items-center justify-between">
        <Text className="font-poppins-medium text-[11px] text-zinc-600">
          {address.phone_number}
        </Text>

        <Pressable
          onPress={onEdit}
          hitSlop={8}
          className="flex-row items-center"
        >
          <Text className="font-poppins-semibold text-xs text-[#FF8A2B]">
            Edit
          </Text>

          <ChevronRight
            size={14}
            color="#FF8A2B"
            strokeWidth={2.4}
            style={{
              marginLeft: 2,
            }}
          />
        </Pressable>
      </View>
    </Pressable>
  );
}