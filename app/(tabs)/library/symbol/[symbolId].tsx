import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Image } from "expo-image";
import { Label, Chip } from "@/components/ui";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Symbol = () => {
  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <ScrollView className="px-6">
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
          <Text className="font-inter font-medium text-2xl capitalize tracking-tighter">
            Apartment
          </Text>
        </View>

        <View className="mt-6">
          <Label styles="mb-2">In your context</Label>
          <Text className="font-inter text-sm tracking-tight text-[#212121] px-4 py-4 bg-[#F7F7F7] rounded-md">
            I find myself wandering through a vast, mist-covered forest
            illuminated by the soft glow of moonlight. As I traverse the winding
            pathways I am for some reason trying to capture the running horse
            that Jane is riding. She is a mongolian queen?
          </Text>
        </View>

        <View className="mt-4">
          <Label>Appears in</Label>
          <View className="mt-2 flex flex-row flex-wrap" style={{ gap: 12 }}>
            <Chip>Nostalgic Journey</Chip>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Symbol;
