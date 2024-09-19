import { SafeAreaView, View, Text } from "react-native";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Dream = () => {
  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <View className="px-6">
        <View className="mt-4">
          <Image
            className="mr-4 rounded-lg h-[240] w-full"
            placeholder={{ blurhash }}
            source="https://picsum.photos/seed/696/3000/2000"
            contentFit="cover"
            transition={1000}
          />
        </View>

        <View className="mt-4">
          <Text className="font-inter font-medium text-2xl capitalize tracking-tighest">
            Lovers long ago
          </Text>
        </View>

        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Dream;
