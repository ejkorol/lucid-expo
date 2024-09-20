import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { KeyboardAvoidingView, SafeAreaView, View, Text } from "react-native";
import { Label, Button, Picker } from "@/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateSignup } from "@/redux/slices/signupSlice";
import useLocations from "@/hooks/useLocations";
import useMbtis, { Mbti } from "@/hooks/useMbtis";
import { ICity, ICountry, IState } from "@/lib/api";
import { signup } from "@/auth/auth";

const Credentials = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const signupData = useSelector((state: RootState) => state.signup);

  const { countries, states, cities, fetchStates, fetchCities } =
    useLocations();

  const { mbtis } = useMbtis();

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<Date | undefined>(undefined);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [mbti, setMbti] = useState("");

  const saveState = () => {
    dispatch(
      updateSignup({
        birthDate: date?.toISOString(),
        birthTime: time?.toISOString(),
        birthCountry: country,
        birthState: state,
        birthCity: city,
        mbti,
      }),
    );
  };

  const handleSubmit = async () => {
    try {
      await signup({
        email: signupData.email,
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        password: signupData.password,
        mbti: signupData.mbti,
        dobDate: signupData.birthDate,
        dobTime: signupData.birthTime,
        dobLocation: signupData.birthCity,
      });
      saveState();
      console.log(signupData);
    } catch (e) {
      console.error(`An error occured at the signup page: ${e}`);
    }
  };

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
                  items={countries as ICountry[]}
                  placeholder="Country of birth*"
                  label="Select a country"
                  callback={() => fetchStates(country)}
                />

                {/* state of birth */}
                <Picker
                  style="mb-4"
                  type="picker"
                  value={state}
                  setValue={setState}
                  items={states as IState[]}
                  placeholder="State of birth*"
                  label="Select a state"
                  callback={() => fetchCities(state)}
                />

                {/* city of birth */}
                <Picker
                  style="mb-4"
                  type="picker"
                  value={city}
                  setValue={setCity}
                  items={cities as ICity[]}
                  placeholder="City of birth*"
                  label="Select a city"
                />

                {/* mbti */}
                <Picker
                  style="mb-2"
                  type="picker"
                  value={mbti}
                  setValue={setMbti}
                  items={mbtis as Mbti[]}
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
              onClick={handleSubmit}
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
