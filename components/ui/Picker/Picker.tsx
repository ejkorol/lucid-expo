import * as Haptics from "expo-haptics";
import { useState, useRef, useCallback } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DatePicker from "react-native-date-picker";
import { Picker as NativePicker } from "@react-native-picker/picker";
import { Pressable, View, Text, Button } from "react-native";
import { Calendar, Clock, ChevronDown } from "lucide-react-native";

type Type = "date" | "time" | "picker";

interface PickerProps {
  placeholder?: string;
  value: Date | string | undefined;
  setValue: (value: any) => void;
  type: Type;
  style?: string;
  items?: any[];
  label?: string;
}

const BASE_STYLES = {
  input:
    "bg-[#EEEEEE] border-[1px] border-[#E0E0E0] px-2 py-2 rounded-md w-full",
  container: "relative flex flex-row items-center",
  text: "font-inter text-sm text-[#BDBDBD]",
  selected: "font-inter text-sm text-[#757575]",
};

const Picker = ({
  placeholder = "Placeholder",
  value,
  setValue,
  type,
  style = "",
  items = [],
  label = "label",
}: PickerProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined,
  );

  const pickerModalRef = useRef<BottomSheetModal>(null);
  const { bottom: bottomSafeArea } = useSafeAreaInsets();

  const handleModal = useCallback(() => {
    pickerModalRef.current?.present();
  }, []);

  const handleModalClose = useCallback(() => {
    pickerModalRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.18}
      />
    ),
    [],
  );

  const renderFooter = useCallback(
    () => (
      <View className="w-full flex items-center justify-center border-t-[1px] border-[#E0E0E0]">
        <View className="h-full my-auto py-2">
          <Button title="Confirm" onPress={handleModalClose} />
        </View>
      </View>
    ),
    [],
  );

  const handleInputPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    setModalOpen(true);
  };

  switch (type) {
    case "date":
      return (
        <View className={`${style}`}>
          <View className={`${BASE_STYLES.container}`}>
            <Pressable
              className={`${BASE_STYLES.input}`}
              onPress={handleInputPress}
            >
              <Text
                className={
                  value ? `${BASE_STYLES.selected}` : `${BASE_STYLES.text}`
                }
              >
                {value instanceof Date ? value.toISOString() : placeholder}
              </Text>
            </Pressable>
            <View className="absolute right-4">
              <Calendar color="#BDBDBD" />
            </View>
          </View>
          <DatePicker
            modal
            open={modalOpen}
            date={value ? (value as Date) : new Date()}
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
        <View className={`${style}`}>
          <View className={`${BASE_STYLES.container}`}>
            <Pressable
              className={`${BASE_STYLES.input}`}
              onPress={handleInputPress}
            >
              <Text
                className={
                  value ? `${BASE_STYLES.selected}` : `${BASE_STYLES.text}`
                }
              >
                {value instanceof Date ? value.toISOString() : placeholder}
              </Text>
            </Pressable>
            <View className="absolute right-4">
              <Clock color="#BDBDBD" />
            </View>
          </View>
          <DatePicker
            modal
            open={modalOpen}
            date={value ? (value as Date) : new Date()}
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
          <View className={`${BASE_STYLES.container} ${style}`}>
            <Pressable onPress={handleModal} className={`${BASE_STYLES.input}`}>
              <Text
                className={
                  selectedItem
                    ? `${BASE_STYLES.selected}`
                    : `${BASE_STYLES.text}`
                }
              >
                {selectedItem ? selectedItem : placeholder}
              </Text>
            </Pressable>
            <View className="absolute right-0 pr-4">
              <ChevronDown color="#BDBDBD" />
            </View>
          </View>
          <BottomSheetModal
            style={{
              marginLeft: 10,
              marginRight: 10,
            }}
            detached
            bottomInset={bottomSafeArea}
            handleStyle={{ display: "none" }}
            backdropComponent={renderBackdrop}
            footerComponent={renderFooter}
            ref={pickerModalRef}
            snapPoints={["38"]}
          >
            <BottomSheetView className="flex items-center justify-center w-full">
              <View className="items-center justify-center pt-4">
                <Text className="font-inter text-[#757575] text-xs tracking-tighter">
                  {label}
                </Text>
              </View>
              <NativePicker
                mode="dialog"
                selectedValue={selectedItem}
                onValueChange={(item) => {
                  setSelectedItem(item);
                }}
              >
                {items.map((item) => (
                  <NativePicker.Item value={item} label={item} />
                ))}
              </NativePicker>
            </BottomSheetView>
          </BottomSheetModal>
        </>
      );
  }
};

export { Picker };
