import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Keyboard,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";

interface OTPProps {
  length?: number;
  onChange: (otp: string) => void;
}

const BASE_STYLES = {
  container: "flex flex-row justify-between",
  digit: "bg-[#EEEEEE] w-[53px] h-[53px] rounded-lg text-center text-xl",
  defaultBorder: "border-[1.6px] border-[#E0E0E0]",
  completed: "border-[1.6px] border-[#2962FF]",
};

const OTP: React.FC<OTPProps> = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    onChange(newOtp.join(""));

    if (text.length === 1 && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (text.length === 1 && index === length - 1) {
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className={BASE_STYLES.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          ref={(input) => (inputs.current[index] = input)}
          keyboardType="number-pad"
          maxLength={1}
          className={`${BASE_STYLES.digit} ${
            otp[index] ? BASE_STYLES.completed : BASE_STYLES.defaultBorder
          }`}
        />
      ))}
    </View>
  );
};

export { OTP };
