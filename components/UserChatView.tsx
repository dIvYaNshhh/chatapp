import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface UserChatViewProps {
  chatText: string;
}
export default function UserChatView({ chatText }: UserChatViewProps) {
  return (
    <View style={styles.box}>
      <View style={styles.overlay} />
      <Text style={styles.userChat}>{chatText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    margin: 8,
    padding: 4,
    backgroundColor: "#0083fd",
    borderTopLeftRadius: 16,
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
