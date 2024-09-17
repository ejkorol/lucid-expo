import { View, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { CirclePlus, Mailbox } from "lucide-react-native";

const LibraryLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Symbols",
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerSearchBarOptions: {
            placeholder: "Search...",
          },
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerRight: () => (
            <View style={{ gap: 10 }} className="flex flex-row">
              <TouchableOpacity>
                <CirclePlus />
              </TouchableOpacity>
              <TouchableOpacity>
                <Mailbox />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default LibraryLayout;
