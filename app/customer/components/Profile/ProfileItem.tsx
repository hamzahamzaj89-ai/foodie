import { ChevronRight, LucideIcon } from "lucide-react-native";
import { Pressable, Text } from "react-native";

type ProfileItemProps = {
  Icon: LucideIcon;
  title: string;
  danger?: boolean;
  onPress?:() => void
};

export default function ProfileItem({
  Icon,
  title,
  danger,
  onPress
}: ProfileItemProps) {
  return (
    <Pressable onPress={onPress} className="flex-row items-center rounded-2xl   bg-card px-5 py-5">
      <Icon
       size={22}
        color="#FF8A2B"
      
      />

      <Text
        className={`ml-4 flex-1 text-base font-poppins-semibold ${
          danger ? "text-red-400" : "text-white"
        }`}
      >
        {title}
      </Text>

      <ChevronRight
        size={20}
        color="#a1a1aa"
      />
    </Pressable>
  );
}