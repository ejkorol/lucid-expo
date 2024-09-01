import { View, Text, TouchableOpacity } from "react-native";

type Variants = 'primary' | 'secondary';

interface ChipProps {
  children: string;
  styles?: string;
  variant?: Variants
};

const VARIANT_CLASSES = {
  primary: {
    container: 'bg-[#212121] shadow-lg',
    text: 'text-white'
  },
  secondary: {
    container: 'bg-[#e0e0e0]',
    text: 'text-[#757575]'
  }
}

const Chip = ({
  children,
  styles,
  variant = 'primary'
}: ChipProps) => {
  const variantClass = VARIANT_CLASSES[variant]

  return (
    <View className={`${styles}`}>
      <TouchableOpacity
        className={`py-2 px-4 rounded-full ${variantClass.container}`}
      >
        <Text className={`font-inter font-medium capitalize ${variantClass.text}`}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Chip;
