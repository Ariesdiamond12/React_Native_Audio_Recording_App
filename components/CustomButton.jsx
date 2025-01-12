import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const CustomButton = ({ handlePress, containerStyles, isLoading, textStyles, title }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-[#FF725E] rounded-xl min-h-[50px] px-6 justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <Text className={`text-white font-semibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;  