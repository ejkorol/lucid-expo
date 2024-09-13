import * as Haptics from "expo-haptics";
import { View } from "react-native";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import {
  LayoutDashboard,
  Library,
  CircleUserRound
} from "lucide-react-native";

const tabs = [
  {
    name: "dashboard",
    icon: LayoutDashboard
  },
  {
    name: "library",
    icon: Library
  },
  {
    name: "settings",
    icon: CircleUserRound
  }
];

const TabsLayout = () => {

  return (
    <>
      <Tabs
        sceneContainerStyle={{
          backgroundColor: '#ffffff'
        }}
        screenOptions={{
          tabBarBackground: () => (<BlurView tint="extraLight" className="bg-[#ffffff]"/>),
          headerShown: false,
          tabBarActiveTintColor: '#fafafa',
          tabBarInactiveTintColor: '#bdbdbd',
          tabBarStyle: {
            position: 'absolute',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: '#eeeeee',
            borderRadius: 100,
            marginLeft: 20,
            paddingTop: 24,
            width: 250,
            marginRight: 20,
            marginBottom: 32
          }
        }}
      >
        {tabs.map(({ name, icon: Icon }) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title: name,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color }) => (
                <View
                  onTouchEnd={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                  style={{
                    backgroundColor: focused ? '#2962FF' : '#eeeeee',
                    padding: 12,
                    borderRadius: 50
                  }}
                >
                  <Icon size={24} color={color} />
                </View>
              )
            }}
          />
        ))}
      </Tabs>
    </>
  );
}

export default TabsLayout;
