import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutUp,
  FadeInDown,
  FadeOutDown,
  FadeInLeft,
  FadeOutLeft,
  FadeInRight,
  FadeOutRight,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";

type Variant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "zoom";

interface AnimatedEntranceProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  style?: StyleProp<ViewStyle>;
}

export default function AnimatedEntrance({
  children,
  variant = "up",
  delay = 0,
  duration = 600,
  style,
}: AnimatedEntranceProps) {
  let entering;
  let exiting;

  switch (variant) {
    case "down":
      entering = FadeInDown.delay(delay).duration(duration);
      exiting = FadeOutDown.duration(duration);
      break;

    case "left":
      entering = FadeInLeft.delay(delay).duration(duration);
      exiting = FadeOutLeft.duration(duration);
      break;

    case "right":
      entering = FadeInRight.delay(delay).duration(duration);
      exiting = FadeOutRight.duration(duration);
      break;

    case "zoom":
      entering = ZoomIn.delay(delay).duration(duration);
      exiting = ZoomOut.duration(duration);
      break;

    default:
      entering = FadeInUp.delay(delay).duration(duration);
      exiting = FadeOutUp.duration(duration);
  }

  return (
    <Animated.View
      entering={entering}
      exiting={exiting}
      style={style}
    >
      {children}
    </Animated.View>
  );
}