import { Text, TouchableOpacity } from "react-native";
import { router, Href } from "expo-router";

type Size = 'lg' | 'md' | 'sm';
type Variant = 'primary' | 'secondary';

interface ButtonProps {
  children?: string | React.ReactElement;
  size?: Size;
  styles?: string;
  variant?: Variant;
  href?: Href;
}

const SIZE_CLASSES = {
  lg: 'py-4 px-6',
  md: 'py-3 px-5',
  sm: 'py-2 px-4',
};

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
};

const handlePress = (path?: Href) => {
  if (path) {
    router.push(path);
  }
};

const Button = ({
  children = 'Button',
  size = 'md',
  styles = '',
  variant = 'primary',
  href,
}: ButtonProps) => {
  const sizeClass = SIZE_CLASSES[size];
  const variantClass = VARIANT_CLASSES[variant];

  return (
    <TouchableOpacity
      onPress={() => handlePress(href)}
      className={`rounded-full ${sizeClass} ${variantClass.container} ${variantClass.border} ${styles}`}
    >
      <Text className={`font-inter font-medium ${variantClass.text}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
