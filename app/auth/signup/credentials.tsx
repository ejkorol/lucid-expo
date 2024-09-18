import { useRouter } from "expo-router";
import { KeyboardAvoidingView, SafeAreaView, View, Text } from "react-native";
import { Label, Input, Button } from "@/components/ui";

const Credentials = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View className="px-6 h-full">
          <View className="flex-1"></View>
          <View className="bottom-0">
            <View>
              <Label styles="mb-2" color="primary">
                Step 3
              </Label>
              <Text className="font-medium text-3xl tracking-tighter text-[#212121]">
                Let’s get personal
              </Text>
              <Text className="mt-4 text-xs text-[#757575]">
                Your birthday and personality type will be used to instantiate a
                Fingerprint to act as a Blueprint to analyze your dreams.
              </Text>
            </View>

            <View className="my-10"></View>

            <Button
              styles="mt-8"
              radius="full"
              size="lg"
              onClick={() => router.push("/auth/signup/credentials")}
            >
              Continue
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Credentials;
