import { useState } from "react";
import { SafeAreaView, View, Text, KeyboardAvoidingView } from "react-native";
import { OTP as OneTimePassword, Button, Label } from "@/components/ui";
import { useRouter } from "expo-router";

const OTPScreen = () => {
  const router = useRouter();
  const [OTP, setOTP] = useState("");

  const handleOTPChange = (value: string) => {
    setOTP(value);
  };

  return (
    <SafeAreaView className="relative bg-[#ffffff] h-full">
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View className="px-6 h-full">
          <View className="flex-1"></View>

          <View className="flex bottom-0 pb-6">
            <View>
              <Label styles="mb-2" color="primary">
                Step 2
              </Label>
              <Text className="font-medium text-2xl">OTP Verification</Text>
              <View className="mt-4">
                <Text className="text-xs text-[#757575]">
                  Enter the one time password sent to your email, and you’ll be
                  able to reset your password.
                </Text>
              </View>
            </View>
            <View className="my-10 w-full">
              <OneTimePassword length={6} onChange={handleOTPChange} />
            </View>
            <Button
              size="lg"
              radius="full"
              onClick={() =>
                router.push("/auth/forgot-password/create-password")
              }
            >
              Verify
            </Button>
            <View className="mt-4">
              <Button variant="ghost" color="none">
                <View className="flex flex-row items-center">
                  <Text className="font-roboto text-xs tracking-tight mr-4 text-[#BDBDBD]">
                    Didn't get anything?
                  </Text>
                  <Text className="font-roboto text-xs tracking-tight text-[#2962FF]">
                    Resend OTP
                  </Text>
                </View>
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPScreen;
