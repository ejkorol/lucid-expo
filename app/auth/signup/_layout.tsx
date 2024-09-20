import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import moonLogo from "@/assets/images/moon-logo-blue.svg";
import { useRouter } from "expo-router";

const SignupLayout = () => {
  const router = useRouter();
  const handleHome = () => {
    router.replace("/");
  };

  return (
    <Stack
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={handleHome}>
            <Image className="h-[44] w-[44]" source={moonLogo} />
          </TouchableOpacity>
        ),
        title: "",
        headerTransparent: true,
        headerBlurEffect: "regular",
        headerStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    ></Stack>
  );
};

export default SignupLayout;
