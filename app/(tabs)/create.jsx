import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { images } from "../../constants";
import moment from "moment"; 

const Create = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null); 
  const [sound, setSound] = useState(); 
  const [recordingsList, setRecordingsList] = useState([]); 

  useEffect(() => {
    // Clean up audio recording when component unmounts
    return () => {
      if (recording) {
        recording.stopAndUnloadAsync();
      }
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [recording, sound]);

  const handleRecord = async () => {
    if (isRecording) {
      // Stop recording
      await stopRecording();
    } else {
      // Start recording
      await startRecording();
    }
    setIsRecording((prevState) => !prevState); // Toggle recording state
  };

  const startRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access microphone is required!");
        return;
      }

      const recordingInstance = new Audio.Recording();
      await recordingInstance.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await recordingInstance.startAsync();
      setRecording(recordingInstance); // Set the recording instance
    } catch (error) {
      console.error("Error starting recording", error);
    }
  };

  const stopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const { sound } = await recording.createNewLoadedSoundAsync();
        setSound(sound); 

        const newRecording = {
          id: Date.now(),
          sound,
          date: moment().format("MM/DD/YYYY, hh:mm A"),
        };
        setRecordingsList((prevList) => [...prevList, newRecording]); 
      }
    } catch (error) {
      console.error("Error stopping recording", error);
    }
  };

  const handlePlayback = async (sound) => {
    if (sound) {
      await sound.replayAsync(); // Play the recorded sound
    }
  };

  const handleDelete = (id) => {
    setRecordingsList((prevList) => prevList.filter((item) => item.id !== id)); // Remove recording by id
  };

  const renderRecordingItem = ({ item }) => (
    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
      <TouchableOpacity
        onPress={() => handlePlayback(item.sound)}
        style={{
          marginRight: 10,
          padding: 10,
          backgroundColor: "#FF725E",
          borderRadius: 5,
        }}
      >
        <Text className="text-white">Play</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleDelete(item.id)}
        style={{
          padding: 10,
          backgroundColor: "#FF4C4C",
          borderRadius: 5,
        }}
      >
        <Ionicons name="trash" size={20} color="white" />
      </TouchableOpacity>

      {/* Display Date and Time */}
      <View style={{ marginLeft: 15 }}>
        <Text className="text-[#333333] text-sm">
          Recorded on: {item.date}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <View className="items-center mt-6">
        <Image
          source={images.Recording}
          className="w-60 h-60"
          resizeMode="contain"
        />
      </View>

      {/* Content */}
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-[#333333] text-2xl font-semibold mb-6">
          Create Your Recording
        </Text>
        <Text className="text-[#555555] text-lg mb-12 text-center">
          Tap the button below to start or stop recording.
        </Text>

        {/* Record Button */}
        <TouchableOpacity
          onPress={handleRecord}
          style={[
            {
              width: 96,
              height: 96,
              borderRadius: 48,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
            },
            { backgroundColor: isRecording ? "red" : "#FF725E" },
          ]}
        >
          <Ionicons
            name={isRecording ? "stop" : "mic"}
            size={40}
            color="white"
          />
        </TouchableOpacity>

        {/* Status */}
        {isRecording && (
          <Text className="text-[#FF725E] text-lg mt-4">Recording...</Text>
        )}

        {/* List of Recordings */}
        <FlatList
          data={recordingsList}
          renderItem={renderRecordingItem}
          keyExtractor={(item) => item.id.toString()}
          style={{ marginTop: 20, width: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create;
