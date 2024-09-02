import { Tabs, Redirect } from "expo-router";
import {
  BedSingle,
  Scroll,
  Search,
  Mailbox,
  CircleUserRound
} from "lucide-react-native";
import { useAuth } from "@/hooks/useAuth";
import { View, Text } from "react-native";

const tabs = [
  {
    name: "dashboard",
    icon: BedSingle
  },
  {
    name: "journal",
    icon: Scroll
  },
  {
    name: "symbols",
    icon: Search
  },
  {
    name: "messages",
    icon: Mailbox
  },
  {
    name: "settings",
    icon: CircleUserRound
  }
]

const TabsLayout = () => {

  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    );
  };

  if (!isAuthenticated) {
    return <Redirect href="/" />
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#212121',
          tabBarInactiveTintColor: '#BDBDBD',
          tabBarStyle: {
            backgroundColor: '#e0e0e0',
            borderRadius: 16,
            alignItems: 'center',
            alignContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        }}
      >
        {tabs.map(({ name, icon: Icon }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color }) => <Icon size={24} color={color} />
            }}
          />
        ))}
      </Tabs>
    </>
  );
}

export default TabsLayout;
