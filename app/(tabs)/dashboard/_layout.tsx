import { View } from "react-native";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CircleEllipsis, CirclePlus, Edit, Mailbox } from "lucide-react-native";

const DashboardLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Your Dreams",
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

      <Stack.Screen
        name="dream/[dreamId]"
        options={{
          headerTitle: "",
          headerBackTitle: "Your dreams",
          headerTransparent: true,
          headerBlurEffect: "regular",
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerRight: () => (
            <View style={{ gap: 10 }} className="flex flex-row">
              <TouchableOpacity>
                <Edit />
              </TouchableOpacity>
              <TouchableOpacity>
                <CircleEllipsis />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default DashboardLayout;
