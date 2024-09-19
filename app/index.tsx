import { Text, View, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { Button } from "@/components/ui";
import { useRouter } from "expo-router";
import misoHome from "@/assets/images/miso-home.svg";
import misoInline from "@/assets/images/miso-inline.svg";
import { Image } from "expo-image";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <View className="px-6 h-full">
        <View className="mt-10 items-center justify-center w-full">
          <Image
            className="w-[195] h-[44]"
            source={misoInline}
            transition={1000}
          />
        </View>

        <View className="flex-1 items-center justify-center">
          <Image
            className="h-[352] w-[352]"
            source={misoHome}
            transition={1000}
          />
        </View>

        <View className="bottom-0">
          <Text className="text-3xl font-inter font-medium tracking-tighter text-[#212121]">
            Welcome to Miso
          </Text>
          <Text className="mt-4 mb-4 text-xs text-[#757575]">
            Cutting-edge dream analysis tailored to you. Track recurring symbols
            and watch their meanings shift, offering fresh, intriguing insights
            into your waking world. Unlock the mysteries of your subconscious.
          </Text>

          <View className="flex flex-row">
            <Link href="/(tabs)/dashboard" className="mr-10">
              Dash
            </Link>
            <Link href="/onboarding">Onboard</Link>
          </View>

          <View className="border-t-[2.5px] border-[#eeeeee] pt-4 flex flex-row w-full">
            <Button
              color="primary"
              radius="full"
              size="lg"
              styles="flex-1 mr-4"
              onClick={() => router.push("/auth/signin")}
            >
              Login
            </Button>
            <Button
              color="secondary"
              radius="full"
              size="lg"
              styles="flex-1"
              onClick={() => router.push("/auth/signup")}
            >
              Signup
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
