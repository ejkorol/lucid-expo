import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex items-center justify-center h-full">
      <Text className="text-center font-inter text-4xl">{`Inter ->`}</Text>
      <Text className="font-space">{`Space Mono ->`}</Text>
    </View>
  );
}
