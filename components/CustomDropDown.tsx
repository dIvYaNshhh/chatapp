import { View, Text } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "@/constants/ChatScreenStyles";
import { data, dataLength } from "@/constants/DropDownValue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/type";
import { updateMessageLength, updateMode } from "@/redux/message";
import DropDownItem from "./DropDownItem";
import AntDesign from "@expo/vector-icons/build/AntDesign";

export default function CustomDropDown() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.message.mode);
  const messageLength = useSelector(
    (state: RootState) => state.message.messageLength
  );
  return (
    <View style={{ flexDirection: "row" }}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Mode"
        value={mode}
        onChange={(item: any) => {
          dispatch(updateMode(item.value));
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
        renderItem={(item) => {
          return <DropDownItem item={item} />;
        }}
      />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={dataLength}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Mesage Length"
        value={messageLength}
        onChange={(item: any) => {
          dispatch(updateMessageLength(item.value));
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
        renderItem={(item) => {
          return <DropDownItem item={item} />;
        }}
      />
    </View>
  );
}
