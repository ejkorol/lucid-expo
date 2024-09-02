import { View, Text, TextInput } from "react-native";
import { useState, useEffect } from "react";

type Variant = 'primary';
type Size = 'sm' | 'md' | 'lg';
type Radius = 'sm' | 'md' | 'lg';

interface TextareaProps {
  value?: string;
  placeholder?: string;
  variant?: Variant;
  size?: Size;
  styles?: string;
  radius?: Radius;
  isEditable?: boolean;
  onChange?: (text: string) => void;
}

const VARIANT_CLASSES = {
  primary: {
    container: 'bg-[#e0e0e0]',
    input: 'font-inter text-[#212121]',
    placeholder: 'font-inter text-xs font-medium tracking text-[#757575]',
  },
};

const SIZE_CLASSES = {
  sm: 'px-2 py-3',
  md: 'px-3 py-3',
  lg: 'px-4 py-3',
};

const RADIUS_CLASSES = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
};

const Textarea = ({
  value = '',
  placeholder = 'Placeholder',
  variant = 'primary',
  size = 'md',
  styles = '',
  radius = 'md',
  isEditable = true,
  onChange,
}: TextareaProps) => {
  const variantClass = VARIANT_CLASSES[variant];
  const sizeClass = SIZE_CLASSES[size];
  const radiusClass = RADIUS_CLASSES[radius];

  const [textValue, setTextValue] = useState<string>(value);

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  const handleChange = (text: string) => {
    setTextValue(text);
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <View
      className={`${variantClass.container} ${sizeClass} ${radiusClass} ${styles}`}
    >
      <Text className={`${variantClass.placeholder}`}>{placeholder}</Text>
      <TextInput
        editable={isEditable}
        className={`${variantClass.input}${styles}`}
        multiline
        value={textValue}
        onChangeText={handleChange}
      />
    </View>
  );
}

export { Textarea };
