import { useState } from "react";
import { useRouter } from "expo-router";
import { KeyboardAvoidingView, SafeAreaView, View, Text } from "react-native";
import { Label, Input, Button } from "@/components/ui";

const BirthDetails = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View className="px-6 h-full">
          <View className="flex-1"></View>
          <View className="bottom-0">
            <View>
              <Label styles="mb-2" color="primary">
                Step 2
              </Label>
              <Text className="font-medium text-3xl tracking-tighter text-[#212121]">
                You're doing great,
              </Text>
              <Text className="font-medium text-3xl tracking-tighter text-[#212121]">
                Jane
              </Text>
              <Text className="mt-4 text-xs text-[#757575]">
                You’ll need an email to log back in.
              </Text>
            </View>
            <View className="my-10">
              <View>
                <Label color="dark" styles="mb-2">
                  Email*
                </Label>
                <Input
                  placeholder="janedoe@example.com"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View className="mt-4">
                <Label color="dark" styles="mb-2">
                  Password*
                </Label>
                <Input
                  placeholder="* * * * * * * *"
                  type="password"
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <View className="mt-4">
                <Label color="dark" styles="mb-2">
                  Confirm Password*
                </Label>
                <Input
                  placeholder="* * * * * * * *"
                  type="password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>
            </View>
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

export default BirthDetails;
