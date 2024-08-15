import { Stack } from "expo-router";
import { useCustomFonts } from "@/hooks/useCustomFonts";

export default function RootLayout() {
  const { fontsLoaded, error } = useCustomFonts();

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
