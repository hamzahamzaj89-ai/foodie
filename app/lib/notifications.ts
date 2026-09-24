import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export async function getExpoPushToken() {
  // Push notifications require a physical device
  if (!Device.isDevice) {
    throw new Error("Push notifications require a physical device.");
  }

  // 1. Check current permission
  const { status: existingStatus } =
    await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;





  // 2. Ask if we haven't received permission yet
  if (existingStatus !== "granted") {
    const { status } =
      await Notifications.requestPermissionsAsync();

    finalStatus = status;
  }

  // 3. Stop if permission wasn't granted
  if (finalStatus !== "granted") {

  return {
    token: null,
    permission: finalStatus
  };



  

  }

  // 4. Get your EAS project ID
  const projectId =
    Constants.expoConfig?.extra?.eas?.projectId;

  if (!projectId) {
    throw new Error("EAS projectId not found.");
  }

  // 5. Get the Expo Push Token
  const token = (
    await Notifications.getExpoPushTokenAsync({
      projectId,
    })
  ).data;


  return {
    token,
    permission: finalStatus
  };


}