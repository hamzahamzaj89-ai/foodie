   import { View, Text, Pressable } from 'react-native'
   import React from 'react'
import { Circle } from 'react-native-animated-spinkit'
import { LucideIcon } from 'lucide-react-native';



interface Props {

  text: string;
  Icon?: LucideIcon | null;
  left?: boolean;
  right?: boolean;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;

}
   
   const SecondaryButton = ({
            text,
  Icon,
  left,
  right,
  onPress,
  disabled = false,
  loading = false,

   }: Props) => {



     return (

        <>

          {loading ? (
                <>
                  <Pressable
                    disabled={loading}
                    onPress={onPress}
            className=" py-5 flex-row items-center justify-center rounded-2xl  bg-card"
                  >
                    <Circle size={20} color="#000" />
                  </Pressable>
                </>
              ) : (
                <>
                  <Pressable
            onPress={onPress}
            className="py-5 flex-row items-center justify-center rounded-2xl  bg-card"
            android_ripple={{
              color: "rgba(255,138,43,0.08)",
            }}
          >

                    {left && (
                      <>
            <Text className="ml-2 font-poppins-semibold text-sm text-[#FF8A2B]">
                          {text}
                        </Text>
        
                        {Icon && (<>
                        
            <View className="h-4 w-4 items-center justify-center rounded-xl ">
              <Icon
                size={18}
                color="#FF8A2B"
                strokeWidth={2.6}
              />
            </View>


                        </>
                        )}
                      </>
                    )}
        
                    {right && (
                      <>

                      
                        {Icon && (<>
                        
            <View className="h-4 w-4 items-center justify-center rounded-xl ">
              <Icon
                size={18}
                color="#FF8A2B"
                strokeWidth={2.6}
              />
            </View>


                        </>
                        )}
                                         
        
            <Text className="ml-2 font-poppins-semibold text-sm text-[#FF8A2B]">
                          {text}
                        </Text>
                      </>
                    )}
                  </Pressable>
                </>
              )}
        </>


     )
   }
   
   export default SecondaryButton