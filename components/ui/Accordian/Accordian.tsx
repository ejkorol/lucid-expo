import { useState, useRef } from "react";
import { Pressable, View, Animated } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Label } from "../Label/Label";

interface AccordianProps {
  label?: string,
  children?: React.ReactNode
};

const Accordian = ({
  label = 'Accordian',
  children
}: AccordianProps) => {

  const [expanded, setExpanded] = useState<boolean>(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const heightAnim = useRef(new Animated.Value(0)).current;

  const toggleAccordian = () => {
    const toValue = expanded ? 0 : 1;

    Animated.timing(rotateAnim, {
      toValue,
      duration: 150,
      useNativeDriver: true
    }).start();

    Animated.timing(heightAnim, {
      toValue,
      duration: 175,
      useNativeDriver: false
    }).start();

    setExpanded(!expanded);
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"]
  });

  const animatedHeight = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200]
  });

  return (
    <View>
      <Pressable
        className="flex flex-row w-full justify-between items-center"
        onPress={toggleAccordian}
      >
        <Label>
          {label}
        </Label>
        <Animated.View style={{ transform: [{ rotate }]}}>
          <ChevronRight color="#bdbdbd" size={20} strokeWidth={2.5} />
        </Animated.View>
      </Pressable>
      <Animated.View
        className="mt-4 w-full"
        style={{ height: animatedHeight, overflow: 'hidden' }}
      >
        {children}
      </Animated.View>
    </View>
  );
}

export { Accordian };
