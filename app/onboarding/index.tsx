import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import onboardingWelcome from "./onboarding-welcome";
import onboardingFeatures from "./onboarding-features";
import onboardingFinal from "./onboarding-final";

const Tab = createMaterialTopTabNavigator();

const OnboardingLayout = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      className="bg-[#ffffff]"
      initialRouteName="welcome"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#ffffff",
          marginHorizontal: 24,
        },
        tabBarIndicatorStyle: {
          marginBottom: 32,
          backgroundColor: "#2962FF",
          height: 10,
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen name="welcome" options={{}} component={onboardingWelcome} />
      <Tab.Screen
        name="features"
        options={{}}
        component={onboardingFeatures}
      ></Tab.Screen>
      <Tab.Screen
        name="final"
        options={{}}
        component={onboardingFinal}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default OnboardingLayout;
