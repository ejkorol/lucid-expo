import {
  View,
  Text,
  SafeAreaView,
  Image
} from "react-native";
import Button from "@/components/Button";

const friendsList = [
  {
    id: 1,
    name: 'Yin',
    username: '@yinyinland',
    avatar: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png'
  },
  {
    id: 2,
    name: 'Kelsey',
    username: '@kelseyiscool',
    avatar: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png'
  },
  {
    id: 3,
    name: 'Connie',
    username: '@cchvger',
    avatar: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png'
  },
  {
    id: 4,
    name: 'Judy',
    username: '@judyung',
    avatar: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png'
  }
]

const messages = [
  {
    id: 1,
    avatar: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png',
    sender: 'Yin',
    message: 'Haha yeah thats def...',
    time: '11:27am'
  },
  {
    id: 2,
    avatar: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png',
    sender: 'Connie',
    message: 'Wow really I never would...',
    time: '12:40pm'
  },
  {
    id: 3,
    avatar: 'https://www.diamondawl.co.uk/wp-content/uploads/2022/04/Image-Placeholder-Dark.png',
    sender: 'Kelsey',
    message: 'Nice to see you!',
    time: '01:40pm'
  },
]

const Messages = () => {
  return (
    <SafeAreaView>
      <View className="px-6 py-8">

        <View>
          <Text className="text-4xl font-inter">Messages</Text>
        </View>
        <View className="mt-6 flex flex-row justify-between">
          <Button
            styles="flex-1 mr-6"
            size="sm"
            radius="md"
            variant="shadow"
          >
            Inbox
          </Button>
          <Button
            styles="flex-1"
            radius="md"
            size="sm"
            variant="shadow"
          >
            Requests
          </Button>
        </View>

        <View className="mt-6">
          {messages.map((message) => (
            <View
              key={message.id}
              className="flex flex-row items-center mb-6"
            >
              <Image
                className="h-[45] w-[45] rounded-lg"
                source={{ uri: message.avatar }}
              />
              <View className="ml-4 flex-1 flex">
                <View className="flex flex-row justify-between">
                  <Text className="font-inter text-xl">
                    {message.sender}
                  </Text>
                  <Text className="font-space text-sm text-[#bdbdbd]">
                    {message.time}
                  </Text>
                </View>
                <Text className="font-inter text-md text-[#bdbdbd]">
                  {message.message}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View className="mt-6">
          <View>
            <Text className="text-2xl font-inter">Friends List</Text>
          </View>
          <View className="mt-6">
            {friendsList.map((friend) => (
              <View
                key={friend.id}
                className="flex flex-row items-center mb-4"
              >
                <Image
                  className="h-[35] w-[35] rounded-lg"
                  source={{ uri: friend.avatar }}
                />
                <View className="ml-4">
                  <Text className="font-inter text-lg">
                    {friend.name}
                  </Text>
                  <Text className="font-inter text-md text-[#bdbdbd]">
                    {friend.username}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Messages;
