import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { KeyboardAvoidingView, SafeAreaView, View, Text } from "react-native";
import { Label, Input, Button } from "@/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { updateSignup } from "@/redux/slices/signupSlice";
import { RootState } from "@/redux/store";

const BirthDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const firstName = useSelector((state: RootState) => state.signup.firstName);

  const [isProgressable, setIsProgressable] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPasswordsValid, setIsPasswordsValid] = useState<boolean>(false);

  const validateEmail = (input: string) => {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
  };

  useEffect(() => {
    if (email === "") {
      setIsEmailValid(true);
      setIsProgressable(false);
    } else {
      const emailValid = validateEmail(email);
      setIsEmailValid(emailValid);

      if (!emailValid) {
        setIsProgressable(false);
      } else if (password === "" && confirmPassword === "") {
        setIsPasswordsValid(true);
        setIsProgressable(true);
      } else if (password !== confirmPassword) {
        setIsPasswordsValid(false);
        setIsProgressable(false);
      } else {
        setIsPasswordsValid(true);
        setIsProgressable(true);
      }
    }
  }, [email, password, confirmPassword]);

  const saveAndContinue = (): void => {
    dispatch(updateSignup({ email, password, confirmPassword }));
    router.push("/auth/signup/credentials");
  };

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
                {firstName}
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
                  error={!isEmailValid}
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
                  error={!isPasswordsValid}
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
                  error={!isPasswordsValid}
                  onChangeText={setConfirmPassword}
                />
              </View>
            </View>
            <Button
              styles="mt-8"
              radius="full"
              size="lg"
              onClick={saveAndContinue}
              disabled={!isProgressable}
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
