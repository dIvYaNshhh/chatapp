import { FlatList } from "react-native";
import Container from "@/components/Container";
import UserChatView from "@/components/UserChatView";
import AIResponseView from "@/components/AIResponseView";
import useAIChat from "@/hooks/useAIChat";
import ChatInputView from "@/components/ChatInputView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/type";
import { userChat } from "@/redux/message";
import { styles } from "@/constants/ChatScreenStyles";
import CustomDropDown from "@/components/CustomDropDown";

export default function ChatScreen() {
  const dispatch = useDispatch();
  const { status, loader } = useAIChat(dispatch);
  const chat = useSelector((state: RootState) => state.message.chat);

  const sendMessage = (text: string) => {
    dispatch(userChat(text));
  };

  return (
    <Container style={styles.container}>
      <CustomDropDown />
      <FlatList
        data={chat}
        renderItem={({ item }) =>
          item.aiMessage ? (
            <AIResponseView chatText={item.aiMessage ?? ""} key={item.id} />
          ) : (
            <UserChatView chatText={item.userMessage ?? ""} key={item.id} />
          )
        }
        keyExtractor={(item) => item.id.toString()}
      />
      <ChatInputView sendMessage={sendMessage} isLoading={loader} />
    </Container>
  );
}
