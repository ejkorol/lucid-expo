import { Tabs } from "expo-router";

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
            borderRadius: 24,
            bottom: 20,
            width: '90%',
            alignItems: 'center',
            alignContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        }}
      >
        <Tabs.Screen
          name="dashboard"
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;
