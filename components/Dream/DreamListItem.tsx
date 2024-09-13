import {
  TouchableOpacity,
  View,
  Text
} from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Chip } from "../ui";

type Variant = 'ghost' | 'light';

interface DreamListItemProps {
  variant?: Variant
};

const VARIANT_STYLES = {
  ghost: {
    container: 'bg-[#F7F7F7] px-4 py-3 rounded-lg'
  },
  light: {
    container: 'bg-transparent rounded-lg'
  }
};

const BASE_STYLES = {
  container: 'flex w-full'
};

const DreamListItem = ({
  variant = 'light'
}: DreamListItemProps) => {

  const variantStyles = VARIANT_STYLES[variant];

  return (
    <TouchableOpacity className={`${BASE_STYLES.container} ${variantStyles.container}`}>
      <View>
        <View className="flex flex-row items-center justify-between">
          <Text className="font-inter font-medium text-xl text-[#212121] tracking-tighter">
            Lovers Long Ago
          </Text>
          <View className="flex flex-row items-center">
            <Text className="font-inter text-sm font-medium text-[#bdbdbd] mr-1">
              {`08/30 -> 18:36`}
            </Text>
            <ChevronRight
              stroke="#bdbdbd"
              size={20}
              strokeWidth={2.25}
            />
          </View>
        </View>
        <View className="my-4">
          <Text className="font-inter text-sm text-[#757575] tracking-tighter">
            I find myself wandering through a vast, mist-covered forest illuminated by the soft glow of moonlight. As I traverse the winding pathways I am for some ...
          </Text>
        </View>
        <View className="flex flex-row flex-wrap">
          <Chip styles="mr-4">
            Nostalgic Journey
          </Chip>
          <Chip>
            Memories
          </Chip>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export { DreamListItem };
