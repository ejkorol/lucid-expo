import { Stack } from "expo-router";
import { useCustomFonts } from "@/hooks/useCustomFonts";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const { fontsLoaded, error } = useCustomFonts();

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <StatusBar style="dark" />
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}
