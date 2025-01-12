import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.Logo}
            resizeMode="contain"
            className="w-[115px] h-[50px]"
          />
          <Text className="text-2xl text-[#333333]  mt-10 font-semibold items-center">
            Welcome back! Log in to your account
          </Text>

          <FormField 
          title='Email'
          value={form.email}
          handleChangeText={(e) => setForm(...form, { email: e })}
          otherStyles='mt-7'
          keyboardType='email-address'
          />
          <FormField 
          title='Password'
          value={form.password}
          handleChangeText={(e) => setForm(...form, { password: e })}
          otherStyles='mt-7'
          />
          <CustomButton
          title='Sign In'
          handlePress={() => {
            router.push("/create");}}
          containerStyles='mt-7'
          isLoading={isSubmitting}
          />

          <View className='justify-center items-center pt-5 flex-row gap-2'>
            <Text className='text-md text-[#333333] font-medium'>Don't have an account?</Text>
            <Link href='/signup' className="text-md font-bold text-[#FF725E]">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
