import { useState } from "react";
import { SafeAreaView, View, Text, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import forgotPassword from "@/assets/images/forgot-password.svg";
import { Label, Button, Input } from "@/components/ui";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView className="relative bg-[#ffffff] h-full">
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View className="px-6 h-full">
          <View className="flex flex-1 items-center justify-center">
            <Image className="h-[294] w-[294]" source={forgotPassword} />
          </View>

          <View className="flex bottom-0 pb-6">
            <View>
              <Text className="font-medium text-2xl">Forgor password?</Text>
              <View className="mt-4">
                <Text className="text-xs text-[#757575]">
                  Happens to the best of us,
                </Text>
                <Text className="mt-2 text-xs text-[#757575]">
                  Just drop your email below and we’ll zap you an OTP for you to
                  get back and dreaming.
                </Text>
              </View>
            </View>

            <View className="my-10">
              <Label color="dark" styles="mb-2">
                Email
              </Label>
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
              />
            </View>

            <Button
              size="lg"
              radius="full"
              onClick={() => router.push("/auth/forgot-password/otp")}
            >
              Send Code
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
