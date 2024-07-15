import { View, Text, SafeAreaView } from "react-native";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  style?: any;
}
export default function Container({ children, style }: ContainerProps) {
  return <SafeAreaView style={style}>{children}</SafeAreaView>;
}
