import { Tabs } from "expo-router";
import {
  House,
  Search,
  ReceiptText,
  UserRound,
} from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          position: "absolute",

          left: 0,

          right: 0,

          bottom: 0,

          height: 90,

          paddingTop: 10,

          paddingBottom: 16,

          backgroundColor: "black",

         borderColor: "black",
          elevation: 0,

          shadowColor: "#000",

          shadowOffset: {
            width: 0,
            height: -6,
          },

          shadowOpacity: 0.15,

          shadowRadius: 16,
        },

        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarLabelStyle: {
          marginTop: 3,
          fontSize: 12,
          fontWeight: "600",
        },

        tabBarActiveTintColor: "#FF8A2B",

        tabBarInactiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <House
              size={26}
              color={color}
              strokeWidth={focused ? 2.8 : 2.4}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused, color }) => (
            <Search
              size={26}
              color={color}
              strokeWidth={focused ? 2.8 : 2.4}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ focused, color }) => (
            <ReceiptText
              size={26}
              color={color}
              strokeWidth={focused ? 2.8 : 2.4}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <UserRound
              size={26}
              color={color}
              strokeWidth={focused ? 2.8 : 2.4}
            />
          ),
        }}
      />
    </Tabs>
  );
}