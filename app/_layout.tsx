import { Stack } from "expo-router";
import { useCustomFonts } from "@/hooks/useCustomFonts";

export default function RootLayout() {
  const { fontsLoaded, error } = useCustomFonts();

  if (!fontsLoaded && !error) return null;

  return (
    <Stack
      screenOptions={{ headerShown: false }}
    />
  );
}
