import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex h-full w-full items-center justify-center bg-[#fafafa]">
      <Text className="text-center font-inter text-4xl">Why hello there.</Text>
      <Text className="font-space">Welcome to lucid</Text>
      <Link href="/dashboard">dashboard</Link>
    </View>
  );
}
