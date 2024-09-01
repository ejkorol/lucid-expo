import { Tabs } from "expo-router";
import {
  BedSingle,
  Scroll,
  Search,
  Mailbox,
  CircleUserRound
} from "lucide-react-native";

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
