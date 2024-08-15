import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";

SplashScreen.hideAsync();

export const useCustomFonts = () => {

  const [fontsLoaded, error] = useFonts({
    'inter': require('../assets/fonts/inter-variable.ttf'),
    'spaceMono': require('../assets/fonts/space-mono-regular.ttf')
  })

  useEffect(() => {
    if (fontsLoaded || error) SplashScreen.hideAsync()
  }, [fontsLoaded, error]);

  return {fontsLoaded, error}

}
