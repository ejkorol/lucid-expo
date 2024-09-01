import { View, Text, TouchableOpacity } from "react-native";
import { router, Href } from "expo-router";

type Size = 'lg' | 'md' | 'sm';
type Variant = 'primary' | 'secondary' | 'shadow';
type Radius = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ButtonProps {
  children?: string | React.ReactElement;
  size?: Size;
  styles?: string;
  variant?: Variant;
  href?: Href;
  isIconOnly?: boolean;
  radius?: Radius;
  onPress?: () => void;
}

const SIZE_CLASSES = {
  lg: 'py-4 px-6',
  md: 'py-3 px-5',
  sm: 'py-2 px-4',
};

const RADIUS_CLASSES = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full'
}

const VARIANT_CLASSES = {
  primary: {
    container: 'bg-[#212121]',
    text: 'text-[#fafafa]',
    border: 'border-transparent',
  },
  secondary: {
    container: 'bg-transparent',
    text: 'text-black',
    border: 'border-none',
  },
  shadow: {
    container: 'bg-[#212121] shadow-lg',
    text: 'text-[#fafafa]',
    border: "border-none"
  }
};

const handlePress = (path?: Href) => {
  if (path) {
    router.push(path);
  };
};

const Button = ({
  children = 'Button',
  size = 'md',
  styles = '',
  variant = 'primary',
  href,
  onPress,
  radius = 'full',
  isIconOnly = false
}: ButtonProps) => {
  const sizeClass = SIZE_CLASSES[size];
  const variantClass = VARIANT_CLASSES[variant];
  const radiusClass = RADIUS_CLASSES[radius];
  const isIconOnlyClass = isIconOnly ? 'aspect-square flex items-center justify-center px-0 py-0' : null;

  return (
    <TouchableOpacity
      onPress={href ? () => handlePress(href) : onPress}
      className={`${radiusClass} ${sizeClass} ${variantClass.container} ${variantClass.border} ${styles} ${isIconOnlyClass}`}
    >
      {isIconOnly
        ? (
          <>
          <View>
            {children}
          </View>
          </>
        )
        : (
          <>
          <Text className={`text-center font-inter font-medium ${variantClass.text}`}>
            {children}
          </Text>
          </>
        )
      }
    </TouchableOpacity>
  );
};

export { Button };
