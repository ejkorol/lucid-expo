import { View, Text, TouchableOpacity } from "react-native";
import Chip from "./Chip";
import DreamCardModal from "./DreamCardModal";
import truncateText from "@/utils/truncateText";
import { useState } from "react";

const dream = {
  id: 1,
  title: 'fleeting memories',
  context: 'I find myself wandering barefoot through fields of green grass, there are horses all around me and I am galloping alongside them with the trees.',
  time: '4:15 am',
  tags: [
    {
      id: 1,
      tag: 'nostalgic trip'
    }
  ]
};

const DreamCard = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <TouchableOpacity
        onPress={ () => setModalVisible(!modalVisible)}
        className="flex flex-col justify-between bg-[#fafafa] px-6 py-4 rounded-[16px] shadow-sm"
      >
      <View className="flex flex-row items-center justify-between">
        <Text className="font-inter capitalize text-xl">{dream.title}</Text>
        <Text className="font-space uppercase tracking-wider">{dream.time}</Text>
      </View>
      <View className="flex my-4">
        <Text className="font-inter text-[#616161]">{truncateText(dream.context, 200)}</Text>
      </View>
      <View className="flex flex-row">
        {dream.tags.map(tag => (
          <Chip>{tag.tag}</Chip>
        ))}
      </View>
    </TouchableOpacity>
    <DreamCardModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
}

export default DreamCard;
