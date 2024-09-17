import { useState } from "react";
import { TouchableOpacity, View, TextInput } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

type Size = "md" | "lg";
type Radius = "sm" | "md" | "lg" | "full";
type Type = "text" | "password";

interface InputProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  style?: string;
  size?: Size;
  radius?: Radius;
  type?: Type;
}

const BASE_STYLE = {
  container: "bg-[#EEEEEE] border-[1px] border-[#E0E0E0]",
  text: "font-inter text-base text-[#BDBDBD]",
};

const SIZE_STYLE = {
  md: "px-3 py-3",
  lg: "px-4 py-4",
};

const RADIUS_STYLE = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const Input = ({
  value,
  onChangeText,
  placeholder = "Input",
  style = "",
  size = "md",
  radius = "md",
  type = "text",
}: InputProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const sizeStyles = SIZE_STYLE[size];
  const radiusStyle = RADIUS_STYLE[radius];

  switch (type) {
    case "text":
      return (
        <View className={`${BASE_STYLE.container} ${radiusStyle} ${style}`}>
          <TextInput
            className={`${sizeStyles}`}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
          />
        </View>
      );

    case "password":
      return (
        <View
          className={`${BASE_STYLE.container} ${radiusStyle} ${style} items-center flex-row justify-between`}
        >
          <TextInput
            className={`${sizeStyles}`}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={!visible}
          />
          <View className="pr-2">
            {visible ? (
              <TouchableOpacity onPress={() => setVisible(false)}>
                <EyeOff size={24} color="#BDBDBD" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setVisible(true)}>
                <Eye size={24} color="#BDBDBD" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
  }
};

export { Input };
