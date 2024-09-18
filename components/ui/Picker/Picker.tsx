import * as Haptics from "expo-haptics";
import { useState, useRef, useCallback } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import DatePicker from "react-native-date-picker";
import { Picker as NativePicker } from "@react-native-picker/picker";
import { Pressable, View, Text } from "react-native";
import { Calendar, Clock, ChevronDown } from "lucide-react-native";

type Type = "date" | "time" | "picker";

interface PickerProps {
  placeholder?: string;
  value: Date;
  setValue: (value: Date) => void;
  type: Type;
}

const BASE_STYLES = {
  input:
    "bg-[#EEEEEE] border-[1px] border-[#E0E0E0] px-2 py-2 rounded-md w-full",
  container: "relative flex flex-row items-center",
  text: "font-inter text-base text-[#BDBDBD]",
};

const CARS = ["tesla", "toyota", "porsche"];

const Picker = ({
  placeholder = "Placeholder",
  value,
  setValue,
  type,
}: PickerProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState();

  const pickerModalRef = useRef<BottomSheetModal>(null);

  const handleModal = useCallback(() => {
    pickerModalRef.current?.present();
  }, []);

  const handleInputPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    setModalOpen(true);
  };

  switch (type) {
    case "date":
      return (
        <View>
          <View className={`${BASE_STYLES.container}`}>
            <Pressable
              className={`${BASE_STYLES.input}`}
              onPress={handleInputPress}
            >
              <Text className={`${BASE_STYLES.text}`}>
                {value.toISOString()}
              </Text>
            </Pressable>
            <View className="absolute right-4">
              <Calendar color="#BDBDBD" />
            </View>
          </View>
          <DatePicker
            modal
            open={modalOpen}
            date={value}
            mode="date"
            onConfirm={(date) => {
              setModalOpen(false);
              setValue(date);
            }}
            onCancel={() => {
              setModalOpen(false);
            }}
          />
        </View>
      );

    case "time":
      return (
        <View>
          <View className={`${BASE_STYLES.container}`}>
            <Pressable
              className={`${BASE_STYLES.input}`}
              onPress={handleInputPress}
            >
              <Text className={`${BASE_STYLES.text}`}>
                {value.toISOString()}
              </Text>
            </Pressable>
            <View className="absolute right-4">
              <Clock color="#BDBDBD" />
            </View>
          </View>
          <DatePicker
            modal
            open={modalOpen}
            date={value}
            mode="time"
            onConfirm={(time) => {
              setModalOpen(false);
              setValue(time);
            }}
            onCancel={() => {
              setModalOpen(false);
            }}
          />
        </View>
      );

    case "picker":
      return (
        <>
          <View className={`${BASE_STYLES.container}`}>
            <Pressable onPress={handleModal} className={`${BASE_STYLES.input}`}>
              <Text className={`${BASE_STYLES.text}`}>{placeholder}</Text>
            </Pressable>
            <View className="absolute right-0 pr-4">
              <ChevronDown color="#BDBDBD" />
            </View>
          </View>
          <BottomSheetModal
            backdropComponent={(props) => (
              <BottomSheetBackdrop
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                {...props}
              />
            )}
            ref={pickerModalRef}
            snapPoints={["30"]}
          >
            <BottomSheetView className="flex items-center justify-center">
              <NativePicker
                mode="dialog"
                selectedValue={selectedItem}
                onValueChange={(value) => {
                  setSelectedItem(value);
                }}
              >
                {CARS.map((car) => (
                  <NativePicker.Item value={car} label="car" />
                ))}
              </NativePicker>
            </BottomSheetView>
          </BottomSheetModal>
        </>
      );
  }
};

export { Picker };
