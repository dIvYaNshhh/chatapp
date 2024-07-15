import {
  View,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

interface ChatInputViewProps {
  sendMessage: (text: string) => void;
  isLoading: boolean;
}
export default function ChatInputView({
  sendMessage,
  isLoading,
}: ChatInputViewProps) {
  const [value, setValue] = useState("");
  return (
    <View style={{ flexDirection: "row" }}>
      <TextInput
        style={styles.box}
        placeholder="Ask me anything..."
        value={value}
        onChange={(event) => setValue(event.nativeEvent.text)}
        onSubmitEditing={(event) => {
          sendMessage(event.nativeEvent.text);
          setValue("");
        }}
      />
      <TouchableOpacity
        style={styles.sendBtn}
        onPress={() => {
          sendMessage(value);
        }}
      >
        <View style={styles.circular}>
          {isLoading === true ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Feather name="send" size={20} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 8,
    marginVertical: 16,
    marginStart: 16,
    padding: 16,
    color: "#000",
    backgroundColor: "white",
    borderRadius: 32,
    overflow: "hidden",
  },
  circular: {
    width: 40,
    height: 40,
    backgroundColor: "#0083fd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  sendBtn: {
    flex: 1,
    padding: 16,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 0,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "transparent",
  },
  userChat: {
    color: "white",
    padding: 16,
  },
});
