import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { KeyboardAvoidingView, SafeAreaView, View, Text } from "react-native";
import { Label, Input, Button } from "@/components/ui";
import { useDispatch } from "react-redux";
import { updateSignup } from "@/redux/slices/signupSlice";

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isProgressable, setIsProgressable] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const saveAndContinue = (): void => {
    dispatch(updateSignup({ firstName, lastName }));
    router.push("/auth/signup/birth-details");
  };

  useEffect(() => {
    firstName === "" ? setIsProgressable(false) : setIsProgressable(true);
  }, [firstName, lastName]);

  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View className="px-6 h-full">
          <View className="flex-1"></View>
          <View className="bottom-0">
            <View>
              <Label styles="mb-2" color="primary">
                Step 1
              </Label>
              <Text className="font-medium text-3xl tracking-tighter text-[#212121]">
                Let's start with your name
              </Text>
              <Text className="mt-4 text-xs text-[#757575]">
                It'll be useful to get to know a little bit about each other
              </Text>
            </View>
            <View className="my-10">
              <View>
                <Label color="dark" styles="mb-2">
                  First name*
                </Label>
                <Input
                  placeholder="Jane"
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>
              <View className="mt-4">
                <Label color="dark" styles="mb-2">
                  Last name
                </Label>
                <Input
                  placeholder="Doe"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>
            <Button
              styles="mt-8"
              radius="full"
              size="lg"
              disabled={!isProgressable}
              onClick={saveAndContinue}
            >
              Continue
            </Button>
            <View className="mt-4">
              <Button
                variant="ghost"
                color="none"
                onClick={() => router.push("/auth/signin")}
              >
                <View className="flex flex-row items-center">
                  <Text className="font-roboto text-xs tracking-tight mr-4 text-[#BDBDBD]">
                    Have an account?
                  </Text>
                  <Text className="font-roboto text-xs tracking-tight text-[#2962FF]">
                    Login Instead
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

export default Signup;
