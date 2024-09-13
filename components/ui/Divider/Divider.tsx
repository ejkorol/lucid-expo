import { View } from "react-native";

type Height = 2 | 4 | 6;
type Color = 'light' | 'grey';

interface DividerProps {
  color?: Color,
  height?: Height
};

const BASE_STYLES = 'flex items-center justify-center w-full my-4';

const COLOR_STYLES = {
  light: 'border-[#fafafa]',
  grey: 'border-[#eeeeee]'
};

const HEIGHT_STYLES = {
  2: 'border-t-2',
  4: 'border-t-4',
  6: 'border-t-6'
};

const Divider = ({
  color = 'grey',
  height = 2
}: DividerProps) => {

  const colorStyles = COLOR_STYLES[color];
  const heightStyles = HEIGHT_STYLES[height];

  return (
    <View
      className={`${BASE_STYLES} ${colorStyles} ${heightStyles}`}
    />
  );
}

export { Divider };
