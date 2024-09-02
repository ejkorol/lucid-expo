import { useState } from "react";
import {
  View,
  Text,
  TextInput
} from "react-native";

type Variant = 'primary';
type Radius = 'md' | 'lg' | 'xl';
type Size = 'sm' | 'md' | 'lg';
type Type = 'text' | 'password';

interface InputProps {
  placeholder?: string;
  variant?: Variant;
  radius?: Radius;
  styles?: string;
  size?: Size;
  type?: Type;
  onChange?: (text: string) => void;
};

const VARIANT_CLASSES: Record<Variant, { container: string; text: string }>= {
  primary: {
    container: 'bg-[#e0e0e0]',
    text: 'text-[#212121]'
  }
};

const RADIUS_CLASSES = {
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl'
};

const SIZE_CLASSES = {
  sm: 'px-3 py-2',
  md: 'px-4 py-3',
  lg: 'px-5 py-4'
}

const Input = ({
  placeholder = 'Text input',
  variant = 'primary',
  radius = 'md',
  styles = '',
  size = 'md',
  type = 'text',
  onChange
}: InputProps) => {

  const [value, setValue] = useState<string>('');

  const handleChange = (text: string) => {
    setValue(text);
    if (onChange) {
      onChange(text);
    };
  };

  const variantClass = VARIANT_CLASSES[variant];
  const radiusClass = RADIUS_CLASSES[radius];
  const sizeClass = SIZE_CLASSES[size];

  return (
    <View>
      <TextInput
        value={value}
        className={`${variantClass.container} ${variantClass.text} ${radiusClass} ${sizeClass} ${styles}`}
        placeholder={placeholder}
        placeholderTextColor="#212121"
        secureTextEntry={type === 'password'}
        onChangeText={handleChange}
      />
    </View>
  );
}

export { Input };
