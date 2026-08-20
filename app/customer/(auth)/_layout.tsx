import Loader from "@/app/shared/components/Loader";
import { useAppStore } from "@/app/shared/store/useAppStore";
import { Redirect, router, Stack } from "expo-router";

export default function AuthLayout() {

const session = useAppStore((state) => state.session);
  const loading = useAppStore((state) => state.loading);


    
  if (loading) {
    return <Loader />;
  }

      if (session) {
    return router.replace("/customer/(tabs)/Home");
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#050608",
        },
      }}
    />
  );
}