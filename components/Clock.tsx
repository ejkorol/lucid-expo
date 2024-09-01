import { View, Text } from "react-native";
import { useClock, useGreeting } from "@/hooks/useClock";

interface ClockProps {
  name: string;
}

const Clock = ({ name }: ClockProps) => {

  const { time } = useClock('hh:mm bb');
  const { greeting } = useGreeting(time);

  return (
    <View>
      <Text className="text-4xl font-inter">
        {time}
      </Text>
      <Text className="text-xl font-inter capitalize text-[#bdbdbd]">
        {greeting}, {name}
      </Text>
    </View>
  );
}

export default Clock;
