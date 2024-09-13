import {
  TouchableOpacity,
  Text
} from "react-native";

type Variant = 'ghost';
type Size = 'md';
type Radius = 'sm' | 'md' | 'lg' | 'full';

interface ChipProps {
  variant?: Variant,
  size?: Size,
  radius?: Radius,
  children?: React.ReactNode,
  styles?: string
};

const VARIANT_STYLES = {
  ghost: {
    container: 'bg-primary/20',
    text: 'text-primary'
  }
};

const SIZE_STYLES = {
  md: {
    container: 'px-4 py-1',
    text: 'font-inter text-xs tracking-tight'
  }
};

const RADIUS_STYLES = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
};

const Chip = ({
  variant = 'ghost',
  radius = 'full',
  size = 'md',
  children,
  styles = ''
}: ChipProps) => {
  
  const variantStyles = VARIANT_STYLES[variant];
  const sizeStyles = SIZE_STYLES[size];
  const radiusStyles = RADIUS_STYLES[radius];

return (
    <TouchableOpacity className={`flex items-center justify-center ${variantStyles.container} ${sizeStyles.container} ${radiusStyles} ${styles}`}>
      <Text className={`${variantStyles.text} ${sizeStyles.text}`}>
        { children !== undefined ? children : 'Chip' }
      </Text>
    </TouchableOpacity>
  );
}

export { Chip };
