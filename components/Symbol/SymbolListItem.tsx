import { Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const SymbolListItem = () => {
  const router = useRouter();

  return (
    <Pressable
      className="flex flex-row items-center"
      onTouchEnd={() => router.navigate("/(tabs)/library/symbol/1")}
    >
      <Image
        className="mr-4 rounded-md h-[32px] w-[32px]"
        placeholder={{ blurhash }}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="cover"
        transition={1000}
      />
      <Text className="font-inter text-xl tracking-tight text-[#212121]">
        Apartment
      </Text>
    </Pressable>
  );
};

export default SymbolListItem;
