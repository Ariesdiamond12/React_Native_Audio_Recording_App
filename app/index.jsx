import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full flex-1 items-center justify-center">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 pt-8">
          <Image
            source={images.Logo}
            className=" h-[84px]"
            resizeMethod="contain"
          />
          <Image
            source={images.Playing}
            className="max-w-[380px] w-full h-[300px]"
            resizeMethod="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-black font-bold text-center">
              Capture.Create.Connect
            </Text>
          </View>

          {/* <Text className='text-sm font-psemibold text-[#333333] mt-7 text-center'>Discover a new way of capturing audio, creating meaningful content, connecting with others and safeguarding your stories.</Text> */}

          <CustomButton
            title="Continue With Email"
            handlePress={() => {
              router.push("/signin");
            }}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#FFF4E6" style="black"/>
    </SafeAreaView>
  );
};

export default index;
