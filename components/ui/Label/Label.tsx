import { Text } from "react-native";

interface LabelProps {
  children?: React.ReactNode,
  styles?: string
};

const BASE_STYLES = 'font-inter text-base tracking-tight font-medium text-[#bdbdbd]';

const Label = ({
  children,
  styles = ''
}: LabelProps) => {

  return (
    <Text className={`${BASE_STYLES} ${styles}`}>
      {children ? children : 'Label'}
    </Text>
  );
}

export { Label };
