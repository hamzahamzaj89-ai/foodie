import { Tabs } from "expo-router";
import {
  House,
  Search,
  ShoppingCart,
  ReceiptText,
  UserRound,
  Compass,
  CompassIcon,
} from "lucide-react-native";
import { useEffect } from "react";
import { View, Text } from "react-native";

type TabIconProps = {
  focused: boolean;
  Icon: any;
  label: string;
};
function TabIcon({
  focused,
  Icon,
  label,
}: TabIconProps) {


  
  return (
    <View
      style={{
        marginTop: focused ? 0 : 9,
        alignItems: "center",
        justifyContent: "center",
        width: 60,
      }}
    >
      {/* Fixed-height icon container */}
      <View
        style={{
          width: 44,
          height: 44,
          borderRadius: 22,

          alignItems: "center",
          justifyContent: "center",

          backgroundColor: focused ? "#1B1E23" : "transparent",

          borderWidth: focused ? 1 : 0,

          borderColor: focused ? "#FF8A2B" : "transparent",
        }}
      >
        <Icon
          size={22}
          color={focused ? "#FF8A2B" : "#FFFFFF"}
          strokeWidth={focused ? 2.8 : 2.4}
        />
      </View>

      {/* Fixed-height label container */}
      <View
        style={{
           position: "relative",
           top : focused ? 1: -7,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 0,
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: "600",
            color: focused ? "#FF8A2B" : "#FFFFFF",
          }}
        >
          {label}
        </Text>
      </View>
    </View>
  );
}

export default function TabLayout() {




  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          position: "absolute",

          left: 0,
          right: 0,
          bottom: 0,

          height: 80,

          paddingTop: 8,
          paddingBottom: 14,

          backgroundColor: "#111317",

          borderTopWidth: 0,

          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,

          elevation: 0,

          shadowColor: "#000",

          shadowOpacity: 0.3,

          shadowRadius: 20,

          shadowOffset: {
            width: 0,
            height: -8,
          },
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={House}
              label="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={CompassIcon}
              label="Explore"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={ShoppingCart}
              label="Cart"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Orders"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={ReceiptText}
              label="Orders"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              Icon={UserRound}
              label="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}