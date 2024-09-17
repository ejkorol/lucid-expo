import { SafeAreaView, View, Text } from "react-native";
import { Image } from "expo-image";
import onboardingPictureOne from "@/assets/images/miso-onboarding-1.svg";
import { Label } from "@/components/ui";

const OnboardingWelcome = () => {
  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <View className="px-6 h-full">
        <View className="flex flex-1 items-center justify-center">
          <Image
            className="h-[354] w-[354]"
            source={onboardingPictureOne}
            transition={1000}
          />
        </View>
        <View className="pb-10 bottom-0">
          <Label styles="mb-2" color="primary">
            Welcome!
          </Label>
          <Text className="font-inter text-3xl font-medium tracking-tighter text-[#212121]">
            What is Miso?
          </Text>
          <Text className="mt-4 text-sm font-inter tracking-tight text-[#757575]">
            Miso helps you gain clarity and understanding of your dreams,
            empowering you to explore your subconscious mind and uncover hidden
            insights in your waking day.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingWelcome;
