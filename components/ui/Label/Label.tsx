import { Text } from "react-native";

type Color = "primary" | "dark" | "grey";

interface LabelProps {
  children?: React.ReactNode;
  styles?: string;
  color?: Color;
}

const BASE_STYLES = "font-inter text-base tracking-tight font-medium";

const COLOR_STYLES = {
  primary: "text-[#2962FF]",
  dark: "text-[#212121]",
  grey: "text-[#bdbdbd]",
};

const Label = ({ children, styles = "", color = "grey" }: LabelProps) => {
  const colorStyles = COLOR_STYLES[color];

  return (
    <Text className={`${BASE_STYLES} ${styles} ${colorStyles}`}>
      {children ? children : "Label"}
    </Text>
  );
};

export { Label };
