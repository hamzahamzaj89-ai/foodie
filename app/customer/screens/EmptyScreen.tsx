import Button from "@/app/shared/components/Button";
import { ShoppingBag, Utensils, ArrowRight, LucideProps, LucideIcon } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";


interface Props {
  title:string;
  description: string;
  onPress: () => void;
  MainIcon: LucideIcon;
  SecondaryIcon?: LucideIcon;
  left?: boolean;
  right?:boolean;
  buttonIcon: LucideIcon;
  buttonText: string;


}
export default function EmptyScreen({
  title,
  description,
  onPress,
  MainIcon,
  SecondaryIcon,
  buttonIcon,
  left,
  right,
  buttonText
}: Props) {

  
  return (
    <View className="flex-1 items-center justify-center bg-black px-6">
      
      {/* Icon Area */}
      <View className="mb-4 items-center justify-center">
        {/* Soft glow */}
        <View className="absolute h-46 w-46 rounded-full " />

        {/* Main icon */}
        <View className="h-36 w-36 items-center justify-center rounded-full bg-[#111214]">
          <MainIcon
            size={60}
            color="#FF8A2B"
            strokeWidth={1.6}
          />

          {/* Small food icon */}
            {
              SecondaryIcon && (<>
                <View className="absolute bottom-1 right-1 h-10 w-10 items-center justify-center rounded-full bg-[#18191C]">
            <SecondaryIcon
              size={19}
              color="#A1A1AA"
              strokeWidth={1.8}
            />
          </View>
              
              </>) 
            }
        </View>
      </View>

      {/* Heading */}
      <Text className="text-center font-poppins-bold text-2xl text-white">
          {title}
      </Text>

      {/* Description */}
      <Text className="mt-3 max-w-[300px] text-center font-poppins-medium text-sm leading-6 text-zinc-400">
      {description}
      </Text>

      {/* CTA */}
           <View className="w-[180px] mt-3">
             <Button 
         text={buttonText}
         left={left }
         right={right}
         Icon={buttonIcon}
         onPress={onPress}
         />
           </View>

    </View>
  );
}