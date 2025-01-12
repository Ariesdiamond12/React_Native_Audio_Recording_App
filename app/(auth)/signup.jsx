import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
// import { UserAuth } from "../../context/AuthContext";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  // const { session } = UserAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  // const handleSubmit = async () => {
  //   setIsSubmitting(true);
  //   setError("");

  //   const { username, email, password } = form;

  //   // Call signUpNewUser function and handle the result
  //   const result = await signUpNewUser(username, email, password);
  //   setIsSubmitting(false);

  //   if (!result.success) {
  //     setError(result.message);
  //   } else {
  //     // Redirect to another page or display success message
  //     console.log("User signed up successfully!");
  //     navigate('/'); // Navigate to home or another page
  //   }
  // };

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
            Create an account
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm(...form, { username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm(...form, { email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm(...form, { password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center items-center pt-5 flex-row gap-2">
            <Text className="text-md text-[#333333] font-medium">
              Already have an account?
            </Text>
            <Link href="/signin" className="text-md font-bold text-[#FF725E]">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
