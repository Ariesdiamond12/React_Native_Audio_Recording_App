import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { images } from "../../constants";  

const Share = () => {
  const handleShare = () => {
    alert("Successfully Shared!");
  };

  return (
    <SafeAreaView className="bg-primary h-full px-6 py-4">
      <View className="flex-1 justify-center">
        <Text className="text-[#333333] text-2xl text-center font-semibold mb-3">
          Share Your Audio Recordings
        </Text>

        <Text className="text-[#555555] text-lg mb-6 text-center">
          Share your recorded audio files with your friends, family, or colleagues. 
          Let them enjoy your recordings or collaborate with you on exciting projects.
        </Text>

        {/* Image */}
        <View className="items-center mb-6">
          <Image
            source={images.Sharing} 
            className="w-60 h-60"
            resizeMode="contain"
          />
        </View>

        {/* Share Button */}
        <TouchableOpacity 
          onPress={handleShare} 
          style={{
            backgroundColor: "#FF725E", 
            padding: 12, 
            borderRadius: 8, 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
        >
          <Text className="text-white text-lg">Share Now</Text>
          <Ionicons name="share-social" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Share;
