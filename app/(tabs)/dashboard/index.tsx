import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { DreamListItem } from "@/components/Dream/DreamListItem";
import { Divider, Label } from "@/components/ui";

const Dashboard = () => {
  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <View className="px-6">
        <ScrollView>
          <Label styles="mb-2">August 30th</Label>
          <DreamListItem />
          <Divider />
          <DreamListItem />
          <Divider />
          <DreamListItem />
          <Divider />
          <DreamListItem />
          <Divider />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
