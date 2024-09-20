import { Stack } from "expo-router";
import { useCustomFonts } from "@/hooks/useCustomFonts";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout() {
  const { fontsLoaded, error } = useCustomFonts();

  if (!fontsLoaded && !error) return null;

  return (
    <>
      <StatusBar style="dark" />
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Provider store={store}>
            <Stack screenOptions={{ headerShown: false }} />
          </Provider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}
