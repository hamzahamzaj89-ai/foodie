import {
  BaseToastProps,
  ToastConfig,
} from "react-native-toast-message";

import { View, Text } from "react-native";
import {
  CircleCheckBig,
  CircleAlert,
  Info,
} from "lucide-react-native";

const ToastContainer = ({
  icon,
  title,
  message,
}: {
  icon: React.ReactNode;
  title: string;
  message?: string;
}) => (
  <View
    style={{
      width: "92%",
      minHeight: 72,
      borderRadius: 22,
      backgroundColor: "#111317",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 18,
      paddingVertical: 14,
      alignSelf: "center",
    }}
  >
    {icon}

    <View
      style={{
        marginLeft: 14,
        flex: 1,
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>

      {!!message && (
        <Text
          style={{
            color: "#A1A1AA",
            marginTop: 4,
            fontSize: 14,
          }}
        >
          {message}
        </Text>
      )}
    </View>
  </View>
);

export const toastConfig: ToastConfig = {
  success: ({ text1, text2 }: BaseToastProps) => (
    <ToastContainer
      title={text1 ?? ""}
      message={text2}
      icon={
        <CircleCheckBig
          color="#22C55E"
          size={28}
        />
      }
    />
  ),

  error: ({ text1, text2 }: BaseToastProps) => (
    <ToastContainer
      title={text1 ?? ""}
      message={text2}
      icon={
        <CircleAlert
          color="#FF8A2B"
          size={28}
        />
      }
    />
  ),

  info: ({ text1, text2 }: BaseToastProps) => (
    <ToastContainer
      title={text1 ?? ""}
      message={text2}
      icon={
        <Info
          color="#3B82F6"
          size={28}
        />
      }
    />
  ),
};