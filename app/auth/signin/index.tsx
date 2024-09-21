import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, View, KeyboardAvoidingView, Text } from "react-native";
import { Image } from "expo-image";
import { Label, Input, Button } from "@/components/ui";
import moonLogo from "@/assets/images/moon-logo-blue.svg";
import { Link } from "expo-router";
import { signin } from "@/auth/auth";

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signinController = async () => {
    try {
      const isSuccess = await signin({ email, password });
      console.log(isSuccess);
      if (isSuccess) {
        router.replace("/(tabs)/dashboard/");
      }
    } catch (e) {
      console.error(`An error occured at the Signin Screen: ${e}`);
    }
  };

  return (
    <SafeAreaView className="relative bg-[#ffffff] h-full">
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View className="px-6 h-full">
          <View className="flex flex-1 items-center justify-center">
            <Image
              source={moonLogo}
              className="h-[44] w-[44]"
              transition={1000}
            />
          </View>

          <View>
            <View>
              <Text className="font-medium text-2xl">Login</Text>
              <Text className="mt-4 text-xs text-[#757575]">
                Welcome back, sleepy head.
              </Text>
            </View>

            <View className="my-10">
              <View>
                <Label styles="mb-2" color="dark">
                  Email
                </Label>
                <Input
                  placeholder="janedoe@example.com"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View className="mt-4">
                <Label styles="mb-2" color="dark">
                  Password
                </Label>
                <Input
                  placeholder="* * * * * * * * "
                  type="password"
                  value={password}
                  onChangeText={setPassword}
                />
                <View className="flex w-full items-end">
                  <Link
                    className="text-sm font-roboto tracking-tighter mt-2 text-[#bdbdbd]"
                    href="/auth/forgot-password"
                  >
                    Forgotten password?
                  </Link>
                </View>
              </View>
              <Button
                styles="mt-8"
                radius="full"
                size="lg"
                onClick={signinController}
              >
                Login
              </Button>
              <View className="mt-4">
                <Button
                  variant="ghost"
                  color="none"
                  onClick={() => router.push("/auth/signup")}
                >
                  <View className="flex flex-row items-center">
                    <Text className="font-roboto text-xs tracking-tight mr-4 text-[#BDBDBD]">
                      Need an account?
                    </Text>
                    <Text className="font-roboto text-xs tracking-tight text-[#2962FF]">
                      Signup Instead
                    </Text>
                  </View>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signin;
