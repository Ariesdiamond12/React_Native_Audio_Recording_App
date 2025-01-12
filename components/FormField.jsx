import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles = "", // Handle undefined otherStyles
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-[#333333] font-semibold">{title}</Text>

      <View className="w-full h-[64px] px-4 bg-white rounded-2xl focus:border-[#FF725E]">
        <TextInput
          className="flex-1 text-[#333333] font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {/* {!title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 text-[#FF725E]"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )} */}
      </View>
    </View>
  );
};

export default FormField;
