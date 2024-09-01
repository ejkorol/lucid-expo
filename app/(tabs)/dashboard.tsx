import {
  View, 
  Text, 
  SafeAreaView 
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Clock from "@/components/Clock";
import DreamSearch from "@/components/DreamSearch";
import DreamFeed from "@/components/DreamFeed";

const Dashboard = () => {
  return (
    <>
    <StatusBar hidden />
    <SafeAreaView>
      <View className="px-6 py-8">
        <Clock name="jane" />
        <DreamSearch />
        <DreamFeed />
      </View>
    </SafeAreaView>
    </>
  );
}

export default Dashboard;
