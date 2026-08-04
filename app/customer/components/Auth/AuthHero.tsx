import React from "react";
import {
  Dimensions,
  ImageBackground,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  image: any;
};

const { width } = Dimensions.get("window");

export default function AuthHero({
  image,
}: Props) {
  return (
    <View
      style={{
        width,
        height: 300,
        overflow: "hidden",
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
      }}
    >
      <ImageBackground
        source={require("@/assets/images/burger.png")}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        {/* Dark Gradient */}

        <LinearGradient
          colors={[
            "rgba(0,0,0,0.05)",
            "rgba(0,0,0,0.20)",
            "rgba(5,6,8,0.95)",
            "black",
          ]}
          locations={[0, 0.45, 0.8, 1]}
          style={{
            flex: 1,
          }}
        />
      </ImageBackground>
    </View>
  );
}