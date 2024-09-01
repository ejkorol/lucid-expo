import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image
} from "react-native";
import Chip from "./Chip";

interface DreamCardModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

const dream = {
  id: 1,
  image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
  title: 'fleeting memories',
  context: 'I find myself wandering barefoot through fields of green grass, there are horses all around me and I am galloping alongside them with the trees.',
  analysis: 'This is an analysis of the dream',
  symbols: [
    {
      id: 1,
      symbol: 'Past Love',
    },
    {
      id: 2,
      symbol: 'The mirror'
    },
    {
      id: 3,
      symbol: 'An Old Friend'
    },
    {
      id: 4,
      symbol: 'A dog'
    }
  ],
  date: 'Wednesday, April 3rd',
  time: '4:15am',
  tags: [
    {
      id: 1,
      tag: 'nostalgic trip'
    },
    {
      id: 2,
      tag: 'old memories'
    },
    {
      id: 3,
      tag: 'partner'
    }
  ]
};

const DreamCardModal = ({ modalVisible, setModalVisible }: DreamCardModalProps) => {
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(!modalVisible) }}
      >
        <View className="flex h-full justify-between px-6 py-8">

          <View className="flex-1">

            <Image
              className="flex h-[100px] w-[100px] mb-4 rounded-lg shadow-lg"
              source={{ uri: dream.image }}
            />

            <Text className="text-4xl capitalize font-inter">
              {dream.title}
            </Text>

            <View className="mt-2 mb-8 flex flex-row items-center justify-between">
              <Text className="text-lg font-inter text-[#bdbdbd]">
                {dream.date}
              </Text>
              <Text className="text-lg font-space font-medium text-[#bdbdbd] tracking-wider uppercase">
                {dream.time}
              </Text>
            </View>

            <View className="flex gap-2">
              <Text className="font-inter text-lg">Analysis</Text>
              <View className="px-4 py-2 bg-[#f5f5f5] rounded-lg">
                <Text className="font-inter text-md text-[#757575]">
                  {dream.analysis}
                </Text>
              </View>
            </View>

            <View className="flex gap-2 mt-4">
              <Text className="font-inter text-lg">What you described</Text>
              <View className="">
                <Text className="font-inter text-md">
                  {dream.context}
                </Text>
              </View>
            </View>

            <View className="flex gap-2 mt-4">
              <Text className="font-inter text-lg">Symbols</Text>
              <View className="flex flex-row flex-wrap">
                {dream.symbols.map((symbol) => (
                  <Chip styles="mr-2 mb-2" key={symbol.id}>
                    {symbol.symbol}
                  </Chip>
                ))}
              </View>
            </View>

            <View className="flex gap-2 mt-4">
              <Text className="font-inter text-lg">Tags</Text>
              <View className="flex flex-row flex-wrap">
                {dream.tags.map((tag) => (
                  <Chip styles="mr-2 mb-2" key={tag.id} variant="secondary">
                    {tag.tag}
                  </Chip>
                ))}
              </View>
            </View>

          </View>

          <View className="mb-4">
            <TouchableOpacity
              onPress={ () => { setModalVisible(!modalVisible)}}
            >
              <Text className="font-inter text-xl">
                {`<-`}
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default DreamCardModal;
