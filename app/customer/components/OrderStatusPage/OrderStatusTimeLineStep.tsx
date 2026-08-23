import { View, Text } from 'react-native'
import React from 'react'
import { Check } from 'lucide-react-native';



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

const STATUS_INDEX: Record<OrderStatus, number> = {
  pending: 0,
  confirmed: 1,
  preparing: 2,
  out_for_delivery: 3,
  delivered: 4,
};


const OrderStatusTimeLineStep = ({stepIndex , currentIndex , step , totalSteps , index }: {stepIndex : number,  currentIndex: number , step:StatusStep , totalSteps:number , index:number}) => {


    
              const completed =
                stepIndex < currentIndex;

              const active =
                stepIndex === currentIndex;

              const upcoming =
                stepIndex > currentIndex;
               
              const Icon = step.icon;

                return(<>

                     <View
                                  key={step.id}
                                  className="flex-row"
                                >
                                  {/* Timeline */}
                
                                  <View className="mr-5 items-center">
                                    {/* Point */}
                
                                    <View
                                      className={`h-11 w-11 items-center justify-center rounded-full ${
                                        completed
                                          ? "bg-[#1C2621]"
                                          : active
                                            ? "bg-[#FF8A2B]"
                                            : "bg-[#17191D]"
                                      }`}
                                      style={{
                                        borderWidth: upcoming ? 1 : 0,
                                        borderColor: "#30333A",
                                      }}
                                    >
                                      {completed ? (
                                        <Check
                                          size={19}
                                          color="#44D17A"
                                          strokeWidth={3}
                                        />
                                      ) : (
                                        <Icon
                                          size={19}
                                          color={
                                            active
                                              ? "#050608"
                                              : "#52555C"
                                          }
                                          strokeWidth={2.2}
                                        />
                                      )}
                                    </View>
                
                                    {/* Connecting Line */}
                
                                    {index !==
                                      totalSteps -1 && (
                                      <View
                                        className="my-1 w-[2px]"
                                        style={{
                                          height: 58,
                                          backgroundColor:
                                            stepIndex < currentIndex
                                              ? "#44D17A"
                                              : "#292C31",
                                        }}
                                      />
                                    )}
                                  </View>
                
                                  {/* Step Content */}
                
                                  <View
                                    className="flex-1 relative"
                                    style={{
                                      minHeight:
                                        index !==
                                        totalSteps -1
                                          ? 73
                                          : 50,
                                    }}
                                  >
                                    <View className="flex-row items-center justify-between">
                                      <Text
                                        className={`font-poppins-semibold text-base ${
                                          active || completed
                                            ? "text-white"
                                            : "text-zinc-600"
                                        }`}
                                      >
                                        {step.title}
                                      </Text>
                
                                      {active && (
                                        <View className="rounded-full bg-[#FF8A2B]/15 px-3 py-1  absolute right-0 top-1">
                                          <Text className="font-poppins-semibold text-[10px] mt-[2px] text-[#FF8A2B]">
                                            CURRENT
                                          </Text>
                                        </View>
                                      )}
                                    </View>
                
                                    <Text
                                      className={`mt-0 font-poppins-medium text-xs leading-5 ${
                                        active || completed
                                          ? "text-zinc-500"
                                          : "text-zinc-700"
                                      }`}
                                    >
                                      {step.description}
                                    </Text>
                                  </View>
                                </View>
                
                
                </>)
}

export default OrderStatusTimeLineStep