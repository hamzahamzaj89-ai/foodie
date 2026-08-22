import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const LINES = 12;

interface ModernSpinnerProps {
  size?: number;
  color?: string;
}

export default function ModernSpinner({
  size = 45,
  color = "#FF8A2B",
}: ModernSpinnerProps) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 900,
      }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
        },
        animatedStyle,
      ]}
    >
      {Array.from({ length: LINES }).map((_, index) => {
        const angle = (360 / LINES) * index;

        return (
          <View
            key={index}
            style={{
              position: "absolute",

              width: size * 0.07,
              height: size * 0.22,

              left: size / 2 - size * 0.035,
              top: size * 0.03,

              backgroundColor: color,
              borderRadius: size,

              transform: [
                {
                  rotate: `${angle}deg`,
                },
                {
                  translateY: size * 0.36,
                },
              ],
            }}
          />
        );
      })}
    </Animated.View>
  );
}