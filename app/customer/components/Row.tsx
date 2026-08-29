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
            ? "text-xl font-poppins-bold text-white"
            : "text-base font-poppins-medium text-zinc-400"
        }`}
      >
    {label}
      </Text>

    

           
             <Text
        className={` ${
          highlight
            ? "text-xl font-poppins-semibold text-buttonBackground"
            : discount
            ? "text-base font-poppins-semibold text-[#22C55E]"
            : "text-base font-poppins-semibold text-white"
        }`}
      >
        {discount ? "-" : ""}${value.toFixed(2)}
      </Text>
          
     


    </View>

        
        
        
        </>)

  }