import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { KeyboardAvoidingView, SafeAreaView, View, Text } from "react-native";
import { Label, Button, Picker } from "@/components/ui";

const Credentials = () => {
  const router = useRouter();

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<Date | undefined>(undefined);

  const COUNTRIES = ["Canada", "Japan", "Khazakstan"];
  const CITIES = ["Toronto", "Vancouver"];
  const STATES = ["Ontario", "Quebec"];
  const MBTIS = ["INTJ", "INFJ"];

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [mbti, setMbti] = useState("");

  return (
    <SafeAreaView className="bg-[#ffffff] h-full">
      <KeyboardAvoidingView className="flex-1" behavior="padding">
        <View className="px-6 h-full">
          <View className="flex-1"></View>
          <View className="bottom-0">
            <View>
              <Label styles="mb-2" color="primary">
                Step 3
              </Label>
              <Text className="font-medium text-3xl tracking-tighter text-[#212121]">
                Let’s get personal
              </Text>
              <Text className="mt-4 text-xs text-[#757575]">
                Your birthday and personality type will be used to instantiate a{" "}
                <Text className="underline font-medium text-[#2962FF]">
                  Fingerprint
                </Text>{" "}
                to act as a{" "}
                <Text className="underline font-medium text-[#2962FF]">
                  Blueprint
                </Text>{" "}
                to analyze your dreams.
              </Text>
            </View>

            <View className="my-10">
              <View>
                {/* birth date */}
                <Picker
                  style="mb-4"
                  type="date"
                  value={date}
                  setValue={setDate}
                  placeholder="Birth date*"
                />

                {/* birth time */}
                <Picker
                  style="mb-4"
                  type="time"
                  value={time}
                  setValue={setTime}
                  placeholder="Birth time*"
                />

                {/* country of birth */}
                <Picker
                  style="mb-4"
                  type="picker"
                  value={country}
                  setValue={setCountry}
                  items={COUNTRIES}
                  placeholder="Country of birth*"
                  label="Select a country"
                />

                {/* state of birth */}
                <Picker
                  style="mb-4"
                  type="picker"
                  value={state}
                  setValue={setState}
                  items={STATES}
                  placeholder="State of birth*"
                  label="Select a state"
                />

                {/* city of birth */}
                <Picker
                  style="mb-4"
                  type="picker"
                  value={city}
                  setValue={setCity}
                  items={CITIES}
                  placeholder="City of birth*"
                  label="Select a city"
                />

                {/* mbti */}
                <Picker
                  style="mb-2"
                  type="picker"
                  value={mbti}
                  setValue={setMbti}
                  items={MBTIS}
                  placeholder="MBTI"
                  label="Select your MBTI"
                />
                <View className="flex flex-row justify-end w-full">
                  <Link
                    className="font-roboto text-xs tracking-tighter text-[#BDBDBD]"
                    href="/"
                  >
                    Don't know your MBTI?
                  </Link>
                </View>
              </View>
            </View>

            <Button
              styles="mt-8"
              radius="full"
              size="lg"
              onClick={() => router.push("/auth/signup/credentials")}
            >
              Continue
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Credentials;
