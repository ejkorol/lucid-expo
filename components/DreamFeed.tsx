import { View, Text } from "react-native";
import DreamCard from "./DreamCard";

const DreamFeed = () => {
  return (
    <View className="mt-8">
      <Text className="font-inter text-2xl mb-4">Sun Mar 24</Text>
      <DreamCard />
    </View>
  );
}

export default DreamFeed;
