import { Text, View, SafeAreaView } from "react-native";
import { Button } from "@/components/ui";

export default function Index() {
  return (
    <>
    <SafeAreaView>
      <View className="flex h-full justify-center p-4 w-full">
        <View className="mb-8">
          {/* MOON LOGO */}
        </View>
        <View>
          <Text className="font-inter text-4xl font-medium">Why hello there.</Text>
          <Text className="font-inter text-2xl font-medium">Welcome to Lucid</Text>
        </View>
        <View className="mt-8">
          <Text className="font-space font-medium">Lucid helps you gain clarity and understanding of your dreams, empowering you to explore your subconscious mind and uncover hidden insights in your waking day.</Text>
        </View>
        <View className="flex items-center flex-row mt-8">
          <Button styles="mr-4" href="/auth/signup">{`Let's Get Started ->`}</Button>
          <Button variant="secondary" href="/auth/signin">Login Instead</Button>
        </View>
      </View>
    </SafeAreaView>
    </>
  );
}
