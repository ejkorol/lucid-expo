import {
  View,
  Text,
  SafeAreaView
} from "react-native";

const entries = [
  {
    id: 1,
    title: 'Dream I had last night',
    date: '09/1/2024',
    content: 'It was crazy, I was a bird flying...'
  },
  {
    id: 2,
    title: 'Dreamt about my ex again...',
    date: '08/31/2024',
    content: 'Im so sick of seeing her everywhere'
  }
]

const Journal = () => {
  return (
    <SafeAreaView>
      <View className="px-6 py-8">
        <View>
          <Text className="font-inter text-4xl">Journal</Text>
        </View>
        <View className="mt-12">
          {entries.map((entry) => (
            <View
              key={entry.id}
              className="mb-6 border-b pb-6 border-solid border-[#bdbdbd]"
            >
              <View className="flex flex-row justify-between">
                <Text className="font-inter text-xl">
                  {entry.title}
                </Text>
                <Text className="font-space text-sm text-[#bdbdbd]">
                  {entry.date}
                </Text>
              </View>
              <Text className="font-inter text-sm text-[#757575]">
                {entry.content}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Journal;
