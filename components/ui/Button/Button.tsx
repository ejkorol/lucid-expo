import * as Haptics from "expo-haptics";
import { TouchableOpacity, View, Text } from "react-native";

type Color = "primary" | "secondary" | "none";
type Size = "sm" | "md" | "lg";
type Radius = "sm" | "md" | "lg" | "full";
type Variant = "primary" | "ghost";

interface ButtonProps {
  isIconOnly?: boolean;
  children?: React.ReactNode;
  color?: Color;
  size?: Size;
  radius?: Radius;
  styles?: string;
  variant?: Variant;
  onClick?: () => void;
}

const BASE_STYLES = {
  container: "flex items-center justify-center",
};

const COLOR_STYLES = {
  primary: {
    container: "bg-primary",
    text: "font-roboto tracking-tighter font-medium text-[#ffffff]",
  },
  secondary: {
    container: "bg-[#ffffff] border-[1.6px] border-[#2962FF]",
    text: "font-roboto tracking-tighter font-medium text-[#2962FF]",
  },
  none: {
    container: "bg-[#ffffff]",
    text: "font-roboto tracking-tighter font-medium text-[#212121]",
  },
};

const SIZE_STYLES = {
  sm: "px-3 py-1",
  md: "px-4 py-2",
  lg: "px-5 py-3",
};

const RADIUS_STYLES = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const VARIANT_STYLES = {
  primary: "bg-primary text-[#ffffff]",
  ghost: "bg-[#ffffff] text-[#2962FF]",
};

const Button = ({
  isIconOnly = false,
  children,
  color = "primary",
  size = "md",
  radius = "md",
  styles = "",
  variant = "primary",
  onClick,
}: ButtonProps) => {
  const colorStyles = COLOR_STYLES[color];
  const sizeStyles = SIZE_STYLES[size];
  const radiusStyles = RADIUS_STYLES[radius];
  const variantStyles = VARIANT_STYLES[variant];

  const handleClick = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    if (onClick) onClick();
  };

  switch (isIconOnly) {
    case true:
      return (
        <TouchableOpacity
          onPress={handleClick}
          className={`${colorStyles.container} ${variantStyles} ${radiusStyles} ${styles}`}
        >
          <View>{children}</View>
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity
          onPress={handleClick}
          className={`${BASE_STYLES.container} ${colorStyles.container} ${sizeStyles} ${radiusStyles} ${styles}`}
        >
          <Text className={`${colorStyles.text}`}>{children}</Text>
        </TouchableOpacity>
      );
  }
};

export { Button };
