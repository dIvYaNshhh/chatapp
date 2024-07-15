import Container from "@/components/Container";
import { RootState } from "@/redux/type";
import { StyleSheet, Text, Platform, View } from "react-native";
import { useSelector } from "react-redux";
// import { styles } from "@/constants/ChatScreenStyles";

export default function SavedScreen() {
  const chat = useSelector((state: RootState) => state.savedChat.chat);

  return (
    <Container style={styles.container}>
      {chat.map((item) => (
        <View key={item.id} style={styles.titleContainer}>
          <Text>{item.chat}</Text>
        </View>
      ))}
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e7effe",
  },
});
