import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

interface DropDownItemProps {
  item: any;
}
export default function DropDownItem({ item }: DropDownItemProps) {
  return (
    <View style={styles.item}>
      <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
});
