import { Text, View, SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text>src</Text>
        <Link href="/dashboard">dashboard</Link>
      </View>
    </SafeAreaView>
  );
}
