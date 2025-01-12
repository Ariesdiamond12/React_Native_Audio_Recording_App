import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import FormField from '../../components/FormField'

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (key, value) => {
    setUser((prevState) => ({ ...prevState, [key]: value }));
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {isEditing ? "Edit Profile" : "Your Profile"}
        </Text>

        {/* Profile Image */}
        <View className="mb-6 items-center">
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              className="w-24 h-24 rounded-full border-4 border-gray-300"
            />
          ) : (
            <View className="w-24 h-24 rounded-full bg-gray-300 justify-center items-center border-2 border-gray-300">
              <Text className="text-gray-500">No Image</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={handlePickImage}
            className="mt-4 bg-[#FF725E] py-2 px-4 rounded-lg"
          >
            <Text className="text-white font-semibold">Upload Image</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View className="w-full space-y-4">
          <FormField
            title="Name"
            value={user.name}
            placeholder="Enter your name"
            handleChangeText={(text) => handleChange("name", text)}
            otherStyles={isEditing ? "border-2 border-gray-300" : ""}
            editable={isEditing}
          />
          <FormField
            title="Email"
            value={user.email}
            placeholder="Enter your email"
            handleChangeText={(text) => handleChange("email", text)}
            otherStyles={isEditing ? "border-2 border-gray-300" : ""}
            editable={isEditing}
          />
          <FormField
            title="Phone"
            value={user.phone}
            placeholder="Enter your phone number"
            handleChangeText={(text) => handleChange("phone", text)}
            otherStyles={isEditing ? "border-2 border-gray-300" : ""}
            editable={isEditing}
          />
        </View>

        {/* Buttons */}
        <View className="flex flex-row justify-between items-center space-x-4 mt-6">
          {isEditing ? (
            <TouchableOpacity
              onPress={() => setIsEditing(false)}
              className="bg-[#FF725E] py-3 px-6 rounded-lg"
            >
              <Text className="text-white font-semibold">Save</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setIsEditing(true)}
              className="bg-[#FF725E] py-3 px-6 rounded-lg"
            >
              <Text className="text-white font-semibold">Edit Profile</Text>
            </TouchableOpacity>
          )}

          {isEditing && (
            <TouchableOpacity
              onPress={() => setIsEditing(false)}
              className="bg-gray-300 py-3 px-6 rounded-lg"
            >
              <Text className="text-gray-700 font-semibold">Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
