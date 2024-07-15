import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { saveChat } from "@/redux/savedChat";

interface AIResponseViewProps {
  chatText: string;
}
export default function AIResponseView({ chatText }: AIResponseViewProps) {
  const dispatch = useDispatch();
  return (
    <View style={styles.box}>
      <View style={styles.overlay} />
      <Text style={styles.aiChat}>{chatText}</Text>
      <View style={styles.savedIcon}>
        <TouchableOpacity
          onPress={() => {
            dispatch(saveChat(chatText));
          }}
        >
          <Feather name="bookmark" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  savedIcon: {
    flex: 1,
    padding: 8,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  box: {
    margin: 8,
    padding: 4,
    backgroundColor: "white",
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "transparent",
  },
  aiChat: {
    color: "#121212",
    padding: 16,
  },
});
