import {
  View,
  SafeAreaView,
  Text
} from "react-native";
import { Input, Button } from "@/components/ui";
import { useState } from "react";
import { signin } from "@/utils/auth";
import { useRouter } from "expo-router";

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const success = await signin({ email, password });
      setIsLoading(false);

      if (success) {
        router.replace('/dashboard')
      } else {
        throw new Error(`Sign-in Failed.`)
      };

    } catch(e) {
      console.error(`An error occured handling the signin: ${e}`);
    };
  };

  return (
    <SafeAreaView>
      <View className="px-6 py-8 h-full justify-center">
        <View>
          <Text className="text-4xl font-inter">Welcome back,</Text>
          <Text className="mt-2 text-4xl font-inter">Sleepy head.</Text>
        </View>
        <View className="my-6">
          <Input
            size="lg"
            styles="mb-4"
            radius="xl"
            placeholder="Email"
            type="text"
            onChange={setEmail}
          />
          <Input
            size="lg"
            radius="xl"
            placeholder="Password"
            type="password"
            onChange={setPassword}
          />
        </View>
        <View className="flex flex-row items-center justify-between">
          <Button
            styles=""
            variant="secondary"
          >
            Forgotten password?
          </Button>
          <Button
            styles=""
            variant="shadow"
            onPress={handleSignIn}
          >
            {`Login ->`}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Signin;
