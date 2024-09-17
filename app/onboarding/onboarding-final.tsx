import { SafeAreaView, View, Text } from "react-native";
import { Image } from "expo-image";
import onboardingPictureThree from "@/assets/images/miso-onboarding-3.svg";
import { Label, Button } from "@/components/ui";

const OnboardingWelcome = () => {
  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <View className="px-6 h-full">
        <View className="flex flex-1 items-center justify-center">
          <Image
            className="h-[354] w-[354]"
            source={onboardingPictureThree}
            transition={1000}
          />
        </View>
        <View className="pb-10 bottom-0">
          <Label styles="mb-2" color="primary">
            Beyond Your Dreams
          </Label>
          <Text className="font-inter text-3xl font-medium tracking-tighter text-[#212121]">
            Track recurring symbols in your dreams
          </Text>
          <View className="mt-4">
            <Text className="text-sm font-inter tracking-tight text-[#757575]">
              As your dreams evolve, so do the meanings of your symbols
            </Text>
            <Text className="mt-2 text-sm font-inter tracking-tight text-[#757575]">
              Fresh, updated interpretations that reflect your current state of
              mind and life experiences.
            </Text>
          </View>
          <View className="mt-8 flex w-full">
            <Button size="lg" radius="full">
              Get Started With Miso
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingWelcome;
