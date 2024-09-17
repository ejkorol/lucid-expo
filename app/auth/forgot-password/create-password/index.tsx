import { useState } from "react";
import { SafeAreaView, View, Text, KeyboardAvoidingView } from "react-native";
import { Label, Input, Button } from "@/components/ui";

const CreatePasswordScreen = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <SafeAreaView className="relative bg-[#ffffff] h-full">
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View className="px-6 h-full">
          <View className="flex-1"></View>

          <View className="flex bottom-0 pb-6">
            <View>
              <Label styles="mb-2" color="primary">
                Step 3
              </Label>
              <Text className="font-medium text-2xl">Create new password</Text>
              <View className="mt-4">
                <Text className="text-xs text-[#757575]">
                  Don’t forget this one! You’ll use this password to sign back
                  into your account from now on.
                </Text>
              </View>
              <View className="my-10 w-full">
                <View>
                  <Label styles="mb-2" color="dark">
                    New Password
                  </Label>
                  <Input
                    value={password}
                    placeholder="* * * * * * * *"
                    onChangeText={setPassword}
                    type="password"
                  />
                </View>
                <View className="mt-4">
                  <Label styles="mb-2" color="dark">
                    Confirm Password
                  </Label>
                  <Input
                    placeholder="* * * * * * * *"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    type="password"
                  />
                </View>
              </View>
              <Button size="lg" radius="full">
                Save Password
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreatePasswordScreen;
