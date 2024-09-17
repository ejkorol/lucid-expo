import { SafeAreaView, View } from "react-native";
import SymbolListItem from "@/components/Symbol/SymbolListItem";
import { Divider, Label } from "@/components/ui";

const Library = () => {
  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <View className="px-6">
        <View>
          <Label styles="mb-4">A</Label>
          <SymbolListItem />
          <Divider />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Library;
