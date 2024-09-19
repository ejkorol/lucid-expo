import { SafeAreaView, View, Text } from "react-native";
import { Image } from "expo-image";
import onboardingPictureTwo from "@/assets/images/miso-onboarding-2.svg";
import { Label } from "@/components/ui";

const OnboardingWelcome = () => {
  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <View className="px-6 h-full">
        <View className="flex flex-1 items-center justify-center">
          <Image
            className="h-[354] w-[354]"
            source={onboardingPictureTwo}
            transition={1000}
          />
        </View>
        <View className="pb-10 bottom-0">
          <Label styles="mb-2" color="primary">
            Advanced Features
          </Label>
          <View>
            <Text className="font-inter text-3xl font-medium tracking-tighter text-[#212121]">
              Personalized
            </Text>

            <Text className="font-inter text-3xl font-medium tracking-tighter text-[#212121]">
              dream analysis
            </Text>
          </View>
          <View className="mt-4">
            <Text className="text-sm font-inter tracking-tight text-[#757575]">
              Dream analysis based on birth chart and personality type. 
            </Text>
            <Text className="text-sm font-inter tracking-tight text-[#757575]">
              By connecting these insights, Miso reveals how your dreams relate
              to your waking life, providing a deeper understanding tailored
              uniquely to you.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingWelcome;
