import {
  View,
  Text,
  SafeAreaView,
  Image
} from "react-native";

const symbols = [
  {
    id: 1,
    symbol: 'apple',
    image: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png',
  },
  {
    id: 2,
    symbol: 'amazon',
    image: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png',
  }
]

const Symbols = () => {
  return (
    <SafeAreaView>
      <View className="px-6 py-8">
        <View className="">
          <Text className="text-4xl font-inter ">Symbols</Text>
        </View>
        <View className="mt-12">
          {symbols.map((symbol) => (
            <View
              key={symbol.id}
              className="mb-6"
            >
              <Text className="mb-4 font-space">A</Text>
              <View className="flex flex-row items-center">
                <Image
                  className="h-[45] w-[45] mr-6 rounded-lg"
                  source={{ uri: symbol.image }}
                />
                <Text className="text-xl font-inter capitalize">
                  {symbol.symbol}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Symbols;
