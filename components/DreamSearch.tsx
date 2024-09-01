import {
  View,
  TextInput,
} from "react-native";
import CreateDreamModal from "./CreateDreamModal";
import { useRef } from "react";
import { Button } from "@/components/ui";
import { Pen } from "lucide-react-native";
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const DreamSearch = () => {

  const bottomSheetRef = useRef<BottomSheetModal>(null);
	const handlePresentModalPress = () => bottomSheetRef.current?.present();

  return (
    <>
      <View className="flex w-dvw flex-row mt-4">
        <TextInput
          className="rounded-xl flex-1 py-4 px-4 bg-[#e0e0e0] font-inter text-[#757575] mr-4"
          placeholder="Search for your dreams..."
        />
        <Button
          onPress={() => handlePresentModalPress()}
          radius="xl"
          variant="shadow"
          isIconOnly
          size="sm"
        >
          <Pen size={24} color='#fafafa'/>
        </Button>
      </View>

      <View>
        <CreateDreamModal ref={bottomSheetRef} />
      </View>
    </>
  )
};

export default DreamSearch;
