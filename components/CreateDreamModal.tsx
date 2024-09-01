import {
  View,
  Text,
  TextInput
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Button } from '@/components/ui';
import React, { forwardRef, useMemo, useCallback } from 'react';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';

export type Ref = BottomSheetModal;

const CreateDreamModal = forwardRef<Ref>((_props, ref) => {
	const snapPoints = useMemo(() => ['50%'], []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>,
    []
  )

	return (
		<BottomSheetModal backdropComponent={renderBackdrop} ref={ref} index={0} snapPoints={snapPoints}>
			<View className="px-6 flex-1 flex-col justify-between">

        <View className="flex-1">
          <View>
            <Text className='text-3xl font-inter'>How did you sleep?</Text>
            <Text className='text-lg font-inter text-[#bdbdbd]'>Wednesday April 3rd</Text>
          </View>
          <View className='mt-6'>
            <TextInput
              className='bg-[#f5f5f5] rounded-lg text-md font-inter text-[#212121] px-4 py-2 h-[200]'
              multiline
              placeholder='What did you dream about?'
              numberOfLines={12}
            />
          </View>
        </View>

        <View className='flex flex-row justify-between mb-8'>
          <Button
            variant='secondary'
            isIconOnly
          >
            <ArrowLeft
              color="#212121"
              height={24}
              width={24}
            />
          </Button>
          <Button
            variant='shadow'
          >
            Add to Journal
          </Button>
        </View>
			</View>
		</BottomSheetModal>
	);
});

export default CreateDreamModal;
