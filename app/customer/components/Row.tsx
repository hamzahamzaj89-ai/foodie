import { Text, View } from "react-native";

 export default function Row  ({
    label,
    value,
    highlight = false,
    discount = false,
  }: {
    label: string;
    value: number;
    highlight?: boolean;
    discount?: boolean;
  }) {


    return (<>
        
         
    <View className="mb-4 w-[100%] flex-row flex-wrap items-center  justify-between">
   
          <Text
        className={`font-poppins-medium ${
          highlight
            ? "text-lg text-white"
            : "text-base text-zinc-400"
        }`}
      >
    {label}
      </Text>

    

           
             <Text
        className={`font-poppins-semibold ${
          highlight
            ? "text-xl text-white"
            : discount
            ? "text-base text-[#22C55E]"
            : "text-base text-white"
        }`}
      >
        {discount ? "-" : ""}${value.toFixed(2)}
      </Text>
          
     


    </View>

        
        
        
        </>)

  }