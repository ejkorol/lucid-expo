import { Text, View, SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text>src</Text>
        <Link href="/dashboard">dashboard</Link>
        <Link href="/auth/forgot-password">Forgot password?</Link>
        <Link href="/auth/signin">Sign in</Link>
      </View>
    </SafeAreaView>
  );
}
