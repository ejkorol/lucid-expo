import {
  TouchableOpacity,
  View,
  Text
} from "react-native";

type Color = 'primary';
type Size = 'sm' | 'md' | 'lg';
type Radius = 'sm' | 'md' | 'lg' | 'full';
type Variant = 'primary' | 'ghost';

interface ButtonProps {
  isIconOnly?: boolean,
  children?: React.ReactNode,
  color?: Color,
  size?: Size,
  radius?: Radius,
  styles?: string,
  variant?: Variant
};

const COLOR_STYLES = {
  primary: {
    container: 'bg-primary',
    text: 'font-roboto tracking-tighter font-medium text-white'
  }
};

const SIZE_STYLES = {
  sm: '',
  md: 'px-4 py-2',
  lg: ''
};

const RADIUS_STYLES = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
};

const VARIANT_STYLES = {
  primary: 'bg-primary text-white',
  ghost: 'bg-transparent text-primary'
}

const Button = ({
  isIconOnly = false,
  children,
  color = 'primary',
  size = 'md',
  radius = 'md',
  styles = '',
  variant = 'primary'
}: ButtonProps) => {

  const colorStyles = COLOR_STYLES[color];
  const sizeStyles = SIZE_STYLES[size];
  const radiusStyles = RADIUS_STYLES[radius];
  const variantStyles = VARIANT_STYLES[variant];

  switch(isIconOnly) {
    case true:
      return (
        <TouchableOpacity className={`${colorStyles.container} ${variantStyles} ${radiusStyles} ${styles}`}>
          <View>
            {children}
          </View>
        </TouchableOpacity>
      );

    default:
      return (
        <TouchableOpacity className={`${colorStyles.container} ${sizeStyles} ${radiusStyles} ${styles}`}>
          <Text className={`${colorStyles.text}`}>
            Button
          </Text>
        </TouchableOpacity>
      );
  }
};

export { Button };
